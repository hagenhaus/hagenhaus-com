import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import mysql from 'mysql';
import util from 'util';

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
 * authenticate
 * 
 * This function authenticates the caller given either (1) a "token" cookie containing a valid token
 * or (2) an "Authorization" header containing "Bearer" + a valid token.
 ************************************************************************************************/

//  const AuthState = Object.freeze({
//   unauth: { isAuthenticated: false, description: 'No JWT' },
//   unauthInvalidJwt: { isAuthenticated: false, description: 'Invalid JWT' },
//   unauthObsoleteJwt: { isAuthenticated: false, description: 'Valid JWT but invalid user' },
//   authenticated: { isAuthenticated: true, description: 'Valid JWT and valid user' },
//   unauthlogDbConnError: { isAuthenticated: false, description: 'Valid JWT but db connection error' },
//   unauthlogDbQueryError: { isAuthenticated: false, description: 'Valid JWT but db query error' },
//   noAuthorizationHeader: { isAuthenticated: false, description: 'No authorization header' },
//   malformedAuthorizationHeader: { isAuthenticated: false, description: 'Malformed authorization header' },
//   noTokenCookieNorAuthHeader: { isAuthenticated: false, description: 'No token cookie nor bearer authorization header' },
//   noBearer: { isAuthenticated: false, description: 'No Bearer in authorization header' },
//   dbConnError: { isAuthenticated: false, description: 'DB Connection Error' },
//   dbQueryError: { isAuthenticated: false, description: 'DB Query Error' },
//   noSuchUser: { isAuthenticated: false, description: 'No such user' },
//   invalidToken: { isAuthenticated: false, description: 'Invalid token' },
//   valid: { isAuthenticated: true, description: 'Valid token and valid user' }
// });

// function authenticate(req, res, cb) {
//   let token = null;
//   if ('token' in req.cookies) {
//     token = req.cookies.token;
//   } else if ('authorization' in req.headers) {
//     let arr = req.headers.authorization.split(' ');
//     if (arr.length != 2) {
//       cb(AuthState.malformedAuthorizationHeader, null);
//     } else if (arr[0] !== 'Bearer') {
//       cb(AuthState.noBearer, null);
//     }
//     token = arr[1];
//   } else {
//     cb(AuthState.noTokenCookieNorAuthHeader, null);
//   }

//   if (token) {
//     try {
//       let payload = jwt.verify(token, process.env.jwtSecret); // synchronous
//       dbPool.getConnection((err, conn) => {
//         if (err) {
//           logDbConnError(err);
//           cb(AuthState.dbConnError, null);
//         } else {
//           conn.query(`call verifyUser(${payload.id})`, (error, results, fields) => {
//             conn.release();
//             if (error) {
//               logDbQueryError(error);
//               cb(AuthState.dbQueryError, null);
//             } else if (results[0][0].exists) {
//               cb(AuthState.valid, payload.id);
//             } else {
//               cb(AuthState.noSuchUser, null);
//             }
//           });
//         }
//       });
//     } catch (err) {
//       cb(AuthState.invalidToken, null);
//     }
//   }
// }

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
* Messages
************************************************************************************************/

export const postMessage = (req, res) => {
  const record = {};
  record.timestamp = new Date().toISOString();
  record.method = req.method;
  record.endpoint = req.url;
  record.name = req.body.name;
  record.email = req.body.email;
  record.website = req.body.website;
  record.message = req.body.message;
  record.userAgent = req.headers['user-agent'];

  try {
    const stats = fs.statSync('messages.log');
    if (stats.size < 1000000) {
      fs.appendFileSync('messages.log', JSON.stringify(record, null, 2));
      res.status(204).end();
    } else {
      res.status(429).end();
    }
  } catch (err) {
    res.status(404).end();
  }
};

/************************************************************************************************
* Records
************************************************************************************************/

export const getRecords = (db, table, req, res) => {
  db.getConnection((err, conn) => {
    if (err) { sendError(res, err); }
    else {
      const query = util.promisify(conn.query).bind(conn);
      (async () => {
        try {
          const fields = 'fields' in req.query && req.query.fields.length ? conn.escape(`${req.query.fields}`) : null;
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
        catch (error) { sendError(res, error); }
        finally { conn.release(); }
      })();
    }
  });
};

export const getRecord = (db, table, idField, req, res) => {
  db.getConnection((err, conn) => {
    if (err) { sendError(res, err); }
    else {
      const fields = 'fields' in req.query ? conn.escape(`${req.query.fields}`) : null;
      const proc = `call selectRecord("${table}", "${idField}", "${req.params.id}", ${fields})`;
      conn.query(proc, (error, results, flds) => {
        conn.release();
        if (error) { sendError(res, error); }
        else { res.status(200).send(results[0][0]); }
      });
    }
  });
};

export const patchRecord = (db, table, idField, req, res) => {
  db.getConnection((err, conn) => {
    if (err) { sendError(res, err); }
    else {
      const updates = 'updates' in req.body ? conn.escape(`${req.body.updates}`) : null;
      const proc = `call updateRecord("${table}", "${idField}", "${req.params.id}", ${updates})`;
      conn.query(proc, (error, results, flds) => {
        conn.release();
        if (error) { sendError(res, error); }
        else { res.status(204).send(); }
      });
    }
  });
};

export const deleteRecord = (db, table, idField, req, res) => {
  db.getConnection((err, conn) => {
    if (err) { sendError(res, err); }
    else {
      const proc = `call deleteRecord("${table}", "${idField}", "${req.params.id}")`;
      conn.query(proc, (error, results, flds) => {
        conn.release();
        if (error) { sendError(res, error); }
        else { res.status(204).send(); }
      });
    }
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
  hagenhausDb.getConnection((err, conn) => {
    if (err) { sendError(res, err); }
    else {
      const fields = 'fields' in req.query && req.query.fields.length ? conn.escape(req.query.fields) : null;
      const hasJoinedFields = 'hasJoinedFields' in req.query ? req.query.hasJoinedFields.toLowerCase() === 'true' : true;

      const name = 'name' in req.body ? req.body.name : null;
      const url = 'url' in req.body ? req.body.url : null;
      const companyId = 'companyId' in req.body ? req.body.companyId : null;

      if (!name || !name.length) { sendError(res, { code: 'required-field', subMessage: 'name' }); }
      else if (!url || !url.length) { sendError(res, { code: 'required-field', subMessage: 'url' }); }
      else if (!companyId || !companyId.length) { sendError(res, { code: 'required-field', subMessage: 'companyId' }); }
      else {
        const proc = `call insertPortal(
          ${mysql.escape(name)},
          ${mysql.escape(url)},
          ${mysql.escape(companyId)},
          ${fields},
          ${hasJoinedFields})`;
        conn.query(proc, (error, results, flds) => {
          conn.release();
          if (error) { sendError(res, error); }
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
  baseballDb.getConnection((err, conn) => {
    if (err) { sendError(res, err); }
    else {
      const fields = 'fields' in req.query && req.query.fields.length ? conn.escape(req.query.fields) : null;
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

      if (!nameFirst) { sendError(res, { code: 'required-field', subMessage: 'nameFirst' }); }
      else if (!nameLast) { sendError(res, { code: 'required-field', subMessage: 'nameLast' }); }
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
          if (error) { sendError(res, error); }
          else { res.status(201).send(results[0][0]); }
        });
      }
    }
  });
};

export const postBaseballPark = (req, res) => {
  baseballDb.getConnection((err, conn) => {
    if (err) { sendError(res, err); }
    else {
      const fields = 'fields' in req.query && req.query.fields.length ? conn.escape(req.query.fields) : null;
      const hasJoinedFields = 'hasJoinedFields' in req.query ? req.query.hasJoinedFields.toLowerCase() === 'true' : true;


      const parkalias = getValue('parkalias', req);
      const parkkey = getValue('parkkey', req);
      const parkname = getValue('parkname', req);
      const city = getValue('city', req);
      const state = getValue('state', req);
      const country = getValue('country', req);

      if (!parkname) { sendError(res, { code: 'required-field', subMessage: 'parkname' }); }
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
          if (error) { sendError(res, error); }
          else { res.status(201).send(results[0][0]); }
        });
      }
    }
  });
};

/************************************************************************************************
* getValue
************************************************************************************************/

function getValue(field, req) {
  let value = null;
  if(field in req.body && req.body[field].length) {
    if(typeof field == 'string') {
      value = mysql.escape(req.body[field]);
    } else {
      value = req.body[field];
    }
  }
  return value;
}

/************************************************************************************************
* sendError
* 
* This function translates internal error formats to a single standard message format that requesting 
* apps understand. 
************************************************************************************************/

function sendError(res, error) {
  console.log(JSON.stringify(error, null, 2));

  let status = null;
  let message = null;

  switch (error.code) {
    case 'ER_BAD_FIELD_ERROR':
      status = 400;
      let detail = error.sqlMessage
        .replace('column', 'field')
        .replace("'where clause'", "filter")
        .replace("'order clause'", "order");
      message = {
        "type": "unknown-field",
        "title": "Unknown Field",
        "detail": `${detail}.`
      };
      break;

    case 'ER_DBACCESS_DENIED_ERROR':
      status = 500;
      message = {
        "type": "server-data-access",
        "title": "Server Data Access",
        "detail": `The server could not access the database.`
      };
      break;

    case 'ER_NO_REFERENCED_ROW_2':
      status = 400;
      message = {
        "type": "invalid-value",
        "title": "Invalid Value",
        "detail": `A value in the request is invalid.`
      };
      break;

    case 'ER_PARSE_ERROR':
      status = 400;
      message = {
        "type": "invalid-value",
        "title": "Invalid Value",
        "detail": `A value in the request is invalid.`
      };
      break;

    case 'ER_SP_WRONG_NO_OF_ARGS':
      status = 500;
      message = {
        "type": "wrong-number-of-arguments",
        "title": "Wrong Number of Arguments",
        "detail": `The server passed the wrong number of arguments to the database.`
      };
      break;

    case 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD':
      status = 500;
      message = {
        "type": "wrong-value-for-field",
        "title": "Wrong Value for Field",
        "detail": `The server passed the wrong type of value to the database for a field.`
      };
      break;

    case 'required-field':
      status = 422;
      message = {
        "type": "required-field",
        "title": "Required Field",
        "detail": `The required field '${error.subMessage}' is missing from the request.`
      };
      break;

    default:
      status = 400;
      message = {
        "type": "miscellaneous",
        "title": "Miscellaneous",
        "detail": `An error occurred, but it is not documented yet.`
      };
  }

  message.status = status;
  res.status(status).send(message);
}
