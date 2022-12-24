import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import mysql from 'mysql2';
import util from 'util';

const saltRounds = process.env.saltRounds | 0;

const baseballDb = mysql.createPool({
  connectionLimit: process.env.dbConnectionLimit,
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
  database: 'lahmansbaseballdb',
  charset: 'utf8mb4',
  dateStrings: true
});

const hagenhausDb = mysql.createPool({
  connectionLimit: process.env.dbConnectionLimit,
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
  // database: process.env.dbDatabase,
  database: 'hagenhaus',
  charset: 'utf8mb4',
  dateStrings: true
});

/************************************************************************************************
* API Information
************************************************************************************************/

export const getApiInformation = (req, res) => {
  res.status(200).send({
    'name': 'Hagenhaus API',
    'method': req.method,
    'url': req.url,
    'timestamp': new Date().toISOString()
  });
};

/************************************************************************************************
* addTicks
************************************************************************************************/

function addTicks(fields) {
  let arr = fields.split(',');
  let newArr = [];
  for (const item of arr) {
    newArr.push(`\`${item}\``);
  }
  return `"${newArr.join(',')}"`;
}

/************************************************************************************************
 * Authentication
 ************************************************************************************************/

const AuthState = Object.freeze({
  malformedAuthHeader: { isAuthenticated: false, description: 'Malformed authorization header' },
  noAuthHeader: { isAuthenticated: false, description: 'This operation requires authentication.' },
  noBearer: { isAuthenticated: false, description: 'No Bearer in authorization header' },
  dbConnError: { isAuthenticated: false, description: 'DB Connection Error' },
  dbQueryError: { isAuthenticated: false, description: 'DB Query Error' },
  noSuchUser: { isAuthenticated: false, description: 'No such user' },
  invalidToken: { isAuthenticated: false, description: 'The authentication token is invalid.' },
  notYourAccount: { isAuthenticated: false, description: 'User ID in JWT !== User ID in request.' },
  valid: { isAuthenticated: true, description: 'Valid token and valid user' }
});

function authenticate(req, cb) {
  if ('authorization' in req.headers) {
    let arr = req.headers.authorization.split(' ');
    if (arr.length != 2) { cb(AuthState.malformedAuthHeader, null); }
    else if (arr[0] !== 'Bearer') { cb(AuthState.noBearer, null); }
    else {
      const token = arr[1];
      try {
        let payload = jwt.verify(token, process.env.jwtSecret); // synchronous
        hagenhausDb.getConnection((err, conn) => {
          if (err) { cb(AuthState.dbConnError, null); }
          else {
            conn.query(`call verifyUser(${payload.id})`, (error, results, fields) => {
              conn.release();
              if (error) { cb(AuthState.dbQueryError, null); }
              else if (results[0][0].exists) { cb(AuthState.valid, payload.id); }
              else { cb(AuthState.noSuchUser, null); }
            });
          }
        });
      } catch (err) {
        cb(AuthState.invalidToken, null);
      }
    }
  } else { cb(AuthState.noAuthHeader, null); }
}

export const postToken = (req, res) => {
  const email = getValue('email', req);
  const password = 'password' in req.body ? req.body.password : null;
  if (!email || !email.length) { sendError(res, 422, 'Email is required.'); }
  if (!password || !password.length) { sendError(res, 422, 'Password is required.'); }
  else {
    hagenhausDb.getConnection((error, conn) => {
      if (error) { sendError(res, 500, 'Server could not connect to database.'); }
      else {
        const proc = `call selectUserByEmail(${email})`;
        conn.query(proc, (error, results, fields) => {
          conn.release();
          if (error) { sendSqlError(res, error, 'Error selecting user by email.'); }
          else {
            let user = results[0][0];
            bcrypt.compare(password, user.password, (error, result) => {
              if (error) { sendError(res, 401, 'bcrypt.compare failed.'); }
              else if (result) {
                const payload = { id: user.id };
                const token = jwt.sign(payload, process.env.jwtSecret, {
                  algorithm: 'HS256',
                  expiresIn: parseInt(process.env.jwtExpiresIn)
                });
                res.status(201).send({ 'token': token, 'userId': user.id });
              } else { sendError(res, 401, 'Email and/or password invalid.'); }
            });
          }
        });
      }
    });
  }
};

/************************************************************************************************
* Records
************************************************************************************************/

export const getRecords = (db, table, req, res) => {
  db.getConnection((error, conn) => {
    if (error) { sendError(res, 500, 'Server could not connect to database.'); }
    else {
      const query = util.promisify(conn.query).bind(conn);
      (async () => {
        try {
          const fields = 'fields' in req.query && req.query.fields.length ? addTicks(req.query.fields) : null;
          const filter = 'filter' in req.query && req.query.filter.length ? conn.escape(`where ${req.query.filter}`) : null;
          const order = 'order' in req.query && req.query.order.length ? conn.escape(`order by ${req.query.order}`) : null;
          const limit = 'limit' in req.query && req.query.limit.length ? req.query.limit : 10;
          const offset = 'page' in req.query && req.query.page.length ? (req.query.page - 1) * limit : 0;
          const page = conn.escape(`limit ${limit} offset ${offset}`);

          const hasMetadata = 'hasMetadata' in req.query ? req.query.hasMetadata.toLowerCase() === 'true' : true;
          const hasFieldList = 'hasFieldList' in req.query ? req.query.hasFieldList.toLowerCase() === 'true' : false;
          const hasRecords = 'hasRecords' in req.query ? req.query.hasRecords.toLowerCase() === 'true' : true;

          const data = {};

          if (hasMetadata) { data.metadata = {}; }
          if (hasFieldList) { data.fieldList = []; }
          if (hasRecords) { data.records = []; }

          if (hasRecords) {
            data.records = (await query(`call selectRecords("${table}", ${fields}, ${filter}, ${order}, ${page})`))[0];
          }

          if (hasMetadata) {
            data.metadata.numTotalRecords = (await query(`select count(*) as count from ${table}`))[0].count;
            if (filter) {
              data.metadata.numFilteredRecords = (await query(`call selectRecordCount("${table}", ${filter})`))[0][0].count;
            } else {
              data.metadata.numFilteredRecords = data.metadata.numTotalRecords;
            }
            if (hasRecords) {
              data.metadata.numResponseRecords = data.records.length;
            }
            data.metadata.page = parseInt('page' in req.query ? req.query.page : 1);
            data.metadata.limit = parseInt(limit);
            data.metadata.numTotalPages = Math.ceil(data.metadata.numFilteredRecords / data.metadata.limit);
            data.metadata.firstItemOnPage = ((data.metadata.page - 1) * data.metadata.limit) + 1;
          }

          if (hasFieldList) {
            const array = (await query(`call selectRecordFields("${table}")`))[0];
            for (const item of array) {
              data.fieldList.push(item['Field']);
            }
          }

          res.status(200).send(data);
        }
        catch (error) { sendSqlError(res, error, 'Error getting records from DB.'); }
        finally { conn.release(); }
      })();
    }
  });
};

export const getRecord = (db, table, idField, req, res) => {
  db.getConnection((error, conn) => {
    if (error) { sendError(res, 500, 'Server could not connect to database.'); }
    else {
      const fields = 'fields' in req.query && req.query.fields.length ? addTicks(req.query.fields) : null;
      const proc = `call selectRecord("${table}", "${idField}", "${req.params.id}", ${fields})`;
      conn.query(proc, (error, results, flds) => {
        conn.release();
        if (error) { sendSqlError(res, error, 'Error getting record from DB.'); }
        else { res.status(200).send(results[0][0]); }
      });
    }
  });
};

export const patchRecord = (db, table, idField, req, res) => {
  db.getConnection((error, conn) => {
    if (error) { sendError(res, 500, 'Server could not connect to database.'); }
    else {
      const updates = 'updates' in req.body ? conn.escape(`${req.body.updates}`) : null;
      const proc = `call updateRecord("${table}", "${idField}", "${req.params.id}", ${updates})`;
      conn.query(proc, (error, results, flds) => {
        conn.release();
        if (error) { sendSqlError(res, error, 'Error patching record in DB.'); }
        else { res.status(204).send(); }
      });
    }
  });
};

export const deleteRecord = (db, table, idField, req, res) => {
  authenticate(req, (authState, userId) => {
    if (authState.isAuthenticated) {
      db.getConnection((error, conn) => {
        if (error) { sendError(res, 500, 'Server could not connect to database.'); }
        else {
          const proc = `call deleteRecord("${table}", "${idField}", "${req.params.id}")`;
          conn.query(proc, (error, results, flds) => {
            conn.release();
            if (error) { sendSqlError(res, error, 'Error deleting record from DB.'); }
            else { res.status(204).send(); }
          });
        }
      });
    } else { res.status(401).send(authState.description); }
  });
};

/************************************************************************************************
* Portals
************************************************************************************************/

export const getCompanies = (req, res) => { getRecords(hagenhausDb, 'companies', req, res); };
export const getCompany = (req, res) => { getRecord(hagenhausDb, 'companies', 'id', req, res); };
export const getCountries = (req, res) => { getRecords(hagenhausDb, 'countries', req, res); };
export const getCountry = (req, res) => { getRecord(hagenhausDb, 'countries', 'id', req, res); };
export const getIndustries = (req, res) => { getRecords(hagenhausDb, 'industries', req, res); };
export const getIndustry = (req, res) => { getRecord(hagenhausDb, 'industries', 'id', req, res); };
export const getIndustryGroups = (req, res) => { getRecords(hagenhausDb, 'industryGroups', req, res); };
export const getIndustryGroup = (req, res) => { getRecord(hagenhausDb, 'industryGroups', 'id', req, res); };
export const getPortals = (req, res) => {
  const table = 'hasJoinedFields' in req.query && req.query.hasJoinedFields.toLowerCase() === 'false' ? 'portals' : 'portalsView';
  getRecords(hagenhausDb, table, req, res);
};
export const getPortal = (req, res) => {
  const table = 'hasJoinedFields' in req.query && req.query.hasJoinedFields.toLowerCase() === 'false' ? 'portals' : 'portalsView';
  getRecord(hagenhausDb, table, 'id', req, res);
};
export const patchPortal = (req, res) => { patchRecord(hagenhausDb, 'portals', 'id', req, res); };
export const deletePortal = (req, res) => { deleteRecord(hagenhausDb, 'portals', 'id', req, res); };
export const getSectors = (req, res) => { getRecords(hagenhausDb, 'sectors', req, res); };
export const getSector = (req, res) => { getRecord(hagenhausDb, 'sectors', 'id', req, res); };
export const getSubindustries = (req, res) => { getRecords(hagenhausDb, 'subindustries', req, res); };
export const getSubindustry = (req, res) => { getRecord(hagenhausDb, 'subindustries', 'id', req, res); };

export const postPortal = (req, res) => {
  hagenhausDb.getConnection((error, conn) => {
    if (error) { sendError(res, 500, 'Server could not connect to database.'); }
    else {
      const fields = 'fields' in req.query && req.query.fields.length ? addTicks(req.query.fields) : null;
      const hasJoinedFields = 'hasJoinedFields' in req.query ? req.query.hasJoinedFields.toLowerCase() === 'true' : true;

      const name = 'name' in req.body ? req.body.name : null;
      const url = 'url' in req.body ? req.body.url : null;
      const companyId = 'companyId' in req.body ? req.body.companyId : null;

      if (!name || !name.length) { sendError(res, 422, 'name field is required.'); }
      else if (!url || !url.length) { sendError(res, 422, 'url field is required.'); }
      else if (!companyId || !companyId.length) { sendError(res, 422, 'companyId field is required.'); }
      else {
        const proc = `call insertPortal(
          ${mysql.escape(name)},
          ${mysql.escape(url)},
          ${mysql.escape(companyId)},
          ${fields},
          ${hasJoinedFields})`;
        conn.query(proc, (error, results, flds) => {
          conn.release();
          if (error) { sendSqlError(res, error, 'Error creating record.'); }
          else { res.status(201).send(results[0][0]); }
        });
      }
    }
  });
};

/************************************************************************************************
* Baseball
************************************************************************************************/

export const getBaseballLeagues = (req, res) => { getRecords(baseballDb, 'leagues', req, res); };
export const getBaseballLeague = (req, res) => { getRecord(baseballDb, 'leagues', 'lgID', req, res); };
export const getBaseballManagers = (req, res) => { getRecords(baseballDb, 'managers', req, res); };
export const getBaseballManager = (req, res) => { getRecord(baseballDb, 'managers', 'ID', req, res); };
export const getBaseballParks = (req, res) => { getRecords(baseballDb, 'parks', req, res); };
export const getBaseballPark = (req, res) => { getRecord(baseballDb, 'parks', 'id', req, res); };
export const getBaseballPlayers = (req, res) => { getRecords(baseballDb, 'people', req, res); };
export const getBaseballPlayer = (req, res) => { getRecord(baseballDb, 'people', 'playerId', req, res); };
export const getBaseballPlayerStatsRecords = (req, res) => { getRecords(baseballDb, 'battingPlayerNameView', req, res); };
export const getBaseballPlayerStatsRecord = (req, res) => { getRecord(baseballDb, 'battingPlayerNameView', 'ID', req, res); };
export const getBaseballTeams = (req, res) => { getRecords(baseballDb, 'teams', req, res); };
export const getBaseballTeam = (req, res) => { getRecord(baseballDb, 'teams', 'ID', req, res); };
export const patchBaseballPlayer = (req, res) => { patchRecord(baseballDb, 'people', 'playerId', req, res); };
export const deleteBaseballPlayer = (req, res) => { deleteRecord(baseballDb, 'people', 'playerId', req, res); };
export const patchBaseballPark = (req, res) => { patchRecord(baseballDb, 'parks', 'ID', req, res); };
export const deleteBaseballPark = (req, res) => { deleteRecord(baseballDb, 'parks', 'ID', req, res); };

export const postBaseballPlayer = (req, res) => {
  baseballDb.getConnection((error, conn) => {
    if (error) { sendError(res, 500, 'Server could not connect to database.'); }
    else {
      const fields = 'fields' in req.query && req.query.fields.length ? addTicks(req.query.fields) : null;
      const hasJoinedFields = 'hasJoinedFields' in req.query ? req.query.hasJoinedFields.toLowerCase() === 'true' : true;

      const playerID = mysql.escape(`xyz${Math.floor(Math.random() * 90000) + 10000}`);
      const nameFirst = getValue('nameFirst', req);
      const nameLast = getValue('nameLast', req);
      const birthYear = getValue('birthYear', req);
      const birthMonth = getValue('birthMonth', req);
      const birthDay = getValue('birthDay', req);
      const birthCountry = getValue('birthCountry', req);
      const birthState = getValue('birthState', req);
      const birthCity = getValue('birthCity', req);
      const deathYear = getValue('deathYear', req);
      const deathMonth = getValue('deathMonth', req);
      const deathDay = getValue('deathDay', req);
      const deathCountry = getValue('deathCountry', req);
      const deathState = getValue('deathState', req);
      const deathCity = getValue('deathCity', req);
      const nameGiven = getValue('nameGiven', req);
      const weight = getValue('weight', req);
      const height = getValue('height', req);
      const bats = getValue('bats', req);
      const throws = getValue('throws', req);
      const debut = getValue('debut', req);
      const finalGame = getValue('finalGame', req);
      const retroID = getValue('retroID', req);
      const bbrefID = getValue('bbrefID', req);
      const birth_date = getValue('birth_date', req);
      const debut_date = getValue('debut_date', req);
      const finalgame_date = getValue('finalgame_date', req);
      const death_date = getValue('death_date', req);

      if (!nameFirst) { sendError(res, 422, 'nameFirst field is required.'); }
      else if (!nameLast) { sendError(res, 422, 'nameLast field is required.'); }
      else {
        const proc = `call insertPlayer(
          ${playerID},
          ${nameFirst},
          ${nameLast},
          ${birthYear},
          ${birthMonth},
          ${birthDay},
          ${birthCountry},
          ${birthState},
          ${birthCity},
          ${deathYear},
          ${deathMonth},
          ${deathDay},
          ${deathCountry},
          ${deathState},
          ${deathCity},
          ${nameGiven},
          ${weight},
          ${height},
          ${bats},
          ${throws},
          ${debut},
          ${finalGame},
          ${retroID},
          ${bbrefID},
          ${birth_date},
          ${debut_date},
          ${finalgame_date},
          ${death_date},
          ${fields},
          ${hasJoinedFields})`;
        conn.query(proc, (error, results, flds) => {
          conn.release();
          if (error) { sendSqlError(res, error, 'Error creating record.'); }
          else { res.status(201).send(results[0][0]); }
        });
      }
    }
  });
};

export const postBaseballPark = (req, res) => {
  baseballDb.getConnection((error, conn) => {
    if (error) { sendError(res, 500, 'Server could not connect to database.'); }
    else {
      const fields = 'fields' in req.query && req.query.fields.length ? addTicks(req.query.fields) : null;
      const hasJoinedFields = 'hasJoinedFields' in req.query ? req.query.hasJoinedFields.toLowerCase() === 'true' : true;

      const parkalias = getValue('parkalias', req);
      const parkkey = getValue('parkkey', req);
      const parkname = getValue('parkname', req);
      const city = getValue('city', req);
      const state = getValue('state', req);
      const country = getValue('country', req);

      if (!parkname) { sendError(res, 422, 'parkname field is required.'); }
      else {
        const proc = `call insertPark(
          ${parkalias},
          ${parkkey},
          ${parkname},
          ${city},
          ${state},
          ${country},
          ${fields},
          ${hasJoinedFields})`;
        conn.query(proc, (error, results, flds) => {
          conn.release();
          if (error) { sendSqlError(res, error, 'Error creating record.'); }
          else { res.status(201).send(results[0][0]); }
        });
      }
    }
  });
};

/************************************************************************************************
* Famous Trees
************************************************************************************************/

export const getFamousTrees = (req, res) => { getRecords(hagenhausDb, 'trees', req, res); };
export const getFamousTree = (req, res) => { getRecord(hagenhausDb, 'trees', 'id', req, res); };

export const patchFamousTree = (req, res) => {
  authenticate(req, (authState, userId) => {
    if (authState.isAuthenticated) {
      patchRecord(hagenhausDb, 'trees', 'id', req, res);
    } else { res.status(401).send(authState.description); }
  });
};

export const deleteFamousTree = (req, res) => {
  authenticate(req, (authState, userId) => {
    if (authState.isAuthenticated) {
      deleteRecord(hagenhausDb, 'trees', 'id', req, res);
    } else { res.status(401).send(authState.description); }
  });
};

export const postFamousTree = (req, res) => {
  authenticate(req, (authState, userId) => {
    if (authState.isAuthenticated) {
      hagenhausDb.getConnection((error, conn) => {
        if (error) { sendError(res, 500, 'Server could not connect to database.'); }
        else {
          const fields = 'fields' in req.query && req.query.fields.length ? addTicks(req.query.fields) : null;
          const birthYear = getValue('birthYear', req);
          const city = getValue('city', req);
          const country = getValue('country', req);
          const description = getValue('description', req);
          const girth = getValue('girth', req);
          const height = getValue('height', req);
          const lat = getValue('lat', req);
          const links = getValue('links', req);
          const lng = getValue('lng', req);
          const name = getValue('name', req);
          const species = getValue('species', req);

          if (!name) { sendError(res, 422, 'name field is required.'); }
          else {
            const proc = `call insertTree(
          ${birthYear},
          ${city},
          ${country},
          ${description},
          ${girth},
          ${height},
          ${lat},
          ${links},
          ${lng},
          ${name},
          ${species},
          ${fields})`;
            conn.query(proc, (error, results, flds) => {
              conn.release();
              if (error) { sendSqlError(res, error, 'Error creating record.'); }
              else { res.status(201).send(results[0][0]); }
            });
          }
        }
      });
    } else { res.status(401).send(authState.description); }
  });
};

/************************************************************************************************
* Users
************************************************************************************************/

export const getUser = (req, res) => { getRecord(hagenhausDb, 'users', 'id', req, res); };

export const patchUser = (req, res) => {
  authenticate(req, (authState, userId) => {
    if (authState.isAuthenticated) {
      if ((userId * 1) !== (req.params.id * 1)) { res.status(401).send(AuthState.notYourAccount.description); }
      else { patchRecord(hagenhausDb, 'users', 'id', req, res); }
    } else { res.status(401).send(authState.description); }
  });
};

export const deleteUser = (req, res) => {
  authenticate(req, (authState, userId) => {
    if (authState.isAuthenticated) {
      if ((userId * 1) !== (req.params.id * 1)) { res.status(401).send(AuthState.notYourAccount.description); }
      else { deleteRecord(hagenhausDb, 'users', 'id', req, res); }
    } else { res.status(401).send(authState.description); }
  });
};

export const postUser = (req, res) => {
  sendError(res, 401, 'Invalid Partner ID');
  // const firstName = getValue('firstName', req);
  // const lastName = getValue('lastName', req);
  // const email = getValue('email', req);
  // const password = 'password' in req.body ? req.body.password : null;
  // if (!firstName || !firstName.length) { sendError(res, 422, 'First name is required.'); }
  // else if (!lastName || !lastName.length) { sendError(res, 422, 'Last name is required.'); }
  // else if (!email || !email.length) { sendError(res, 422, 'Email is required.'); }
  // else if (!password || !password.length) { sendError(res, 422, 'Password is required.'); }
  // else {
  //   bcrypt.hash(password, saltRounds, (err, hash) => {
  //     hagenhausDb.getConnection((error, conn) => {
  //       if (error) { sendError(res, 500, 'Server could not connect to database.'); }
  //       else {
  //         const proc = `call insertUser(${firstName},${lastName},${email},"${hash}","","","","","")`;
  //         conn.query(proc, (error, results, fields) => {
  //           conn.release();
  //           if (error) { sendSqlError(res, error, 'Error creating record.'); }
  //           else { res.status(201).send(results[0][0]); }
  //         });
  //       }
  //     });
  //   });
  // }
};

/************************************************************************************************
* getValue
************************************************************************************************/

function getValue(field, req) {
  let value = null;
  if (field in req.body && req.body[field].length) {
    if (typeof field == 'string') {
      value = mysql.escape(req.body[field]);
    } else {
      value = req.body[field];
    }
  }
  return value;
}

/************************************************************************************************
* sendSqlError
************************************************************************************************/

function sendSqlError(res, error, msg) {
  sendError(res, 400, `${'sqlMessage' in error ? error.sqlMessage : msg}`);
}

/************************************************************************************************
* sendError
************************************************************************************************/

function sendError(res, code, msg) {
  res.status(code).send(msg);
}
