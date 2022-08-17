import fs from 'fs';
import mysql from 'mysql';
import util from 'util';

const portalsDb = mysql.createPool({
  connectionLimit: process.env.dbConnectionLimit,
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
  // database: process.env.dbDatabase,
  database: 'hagenhaus',
  charset: 'utf8mb4',
  dateStrings: true
});

const baseballDb = mysql.createPool({
  connectionLimit: process.env.dbConnectionLimit,
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
  database: 'lahmansbaseballdb',
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

export const getCompanies = (req, res) => { getRecords(portalsDb, 'companies', req, res); };
export const getCompany = (req, res) => { getRecord(portalsDb, 'companies', 'id', req, res); };
export const getCountries = (req, res) => { getRecords(portalsDb, 'countries', req, res); };
export const getCountry = (req, res) => { getRecord(portalsDb, 'countries', 'id', req, res); };
export const getIndustries = (req, res) => { getRecords(portalsDb, 'industries', req, res); };
export const getIndustry = (req, res) => { getRecord(portalsDb, 'industries', 'id', req, res); };
export const getIndustryGroups = (req, res) => { getRecords(portalsDb, 'industryGroups', req, res); };
export const getIndustryGroup = (req, res) => { getRecord(portalsDb, 'industryGroups', 'id', req, res); };

export const postPortal = (req, res) => {
  portalsDb.getConnection((err, conn) => {
    if (err) { sendError(res, err); }
    else {
      const fields = 'fields' in req.query && req.query.fields.length ? conn.escape(req.query.fields) : null;
      const allowJoinedFields = 'allowJoinedFields' in req.query ? req.query.allowJoinedFields.toLowerCase() === 'true' : true;

      const name = 'name' in req.body ? req.body.name : null;
      const url = 'url' in req.body ? req.body.url : null;
      const companyId = 'companyId' in req.body ? req.body.companyId : null;

      if (!name || !name.length) { sendError(res, { code: 'required-field', subMessage: 'name' }); }
      else if (!url || !url.length) { sendError(res, { code: 'required-field', subMessage: 'url' }); }
      else if (!companyId || !companyId.length) { sendError(res, { code: 'required-field', subMessage: 'companyId' }); }
      else {
        const proc = `call insertPortal(${mysql.escape(name)},${mysql.escape(url)},${mysql.escape(companyId)},${fields},${allowJoinedFields})`;
        conn.query(proc, (error, results, flds) => {
          conn.release();
          if (error) { sendError(res, error); }
          else { res.status(201).send(results[0][0]); }
        });
      }
    }
  });
};

export const getPortals = (req, res) => {
  const table = 'allowJoinedFields' in req.query && req.query.allowJoinedFields.toLowerCase() === 'false' ? 'portals' : 'portalsView';
  getRecords(portalsDb, table, req, res);
};

export const getPortal = (req, res) => {
  const table = 'allowJoinedFields' in req.query && req.query.allowJoinedFields.toLowerCase() === 'false' ? 'portals' : 'portalsView';
  getRecord(portalsDb, table, 'id', req, res);
};

export const patchPortal = (req, res) => { patchRecord(portalsDb, 'portals', 'id', req, res); };
export const deletePortal = (req, res) => { deleteRecord(portalsDb, 'portals', 'id', req, res); };
export const getSectors = (req, res) => { getRecords(portalsDb, 'sectors', req, res); };
export const getSector = (req, res) => { getRecord(portalsDb, 'sectors', 'id', req, res); };
export const getSubindustries = (req, res) => { getRecords(portalsDb, 'subindustries', req, res); };
export const getSubindustry = (req, res) => { getRecord(portalsDb, 'subindustries', 'id', req, res); };

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
export const getBaseballTeams = (req, res) => { getRecords(baseballDb, 'teams', req, res); };
export const getBaseballTeam = (req, res) => { getRecord(baseballDb, 'teams', 'ID', req, res); };

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
