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
    if (err) {
      res.status(500).send(serverError('get records'));
    }
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
        catch (error) {
          if (error.code === 'ER_BAD_FIELD_ERROR') {
            res.status(400).send(invalidField(error.sqlMessage));
          } else if (error.code == 'ER_PARSE_ERROR') {
            res.status(400).send(invalidValue('page or limit'));
          } else {
            res.status(400).send(miscError());
          }
        }
        finally { conn.release(); }
      })();
    }
  });
};

export const getRecord = (db, table, req, res) => {
  db.getConnection((err, conn) => {
    if (err) {
      res.status(500).send(serverError('get a record'));
    }
    else {
      const fields = 'fields' in req.query ? conn.escape(`${req.query.fields}`) : null;
      const proc = `call selectRecord("${table}", "${req.params.id}", ${fields})`;
      conn.query(proc, (error, results, flds) => {
        conn.release();
        if (error) {
          if (error.code === 'ER_BAD_FIELD_ERROR') {
            res.status(400).send(invalidField(error.sqlMessage));
          } else {
            res.status(400).send(miscError());
          }
        } else {
          res.status(200).send(results[0][0]);
        }
      });
    }
  });
};

export const patchRecord = (table, req, res) => {
  portalsDb.getConnection((err, conn) => {
    if (err) {
      res.status(500).send(serverError('modify a record'));
    }
    else {
      const updates = 'updates' in req.body ? conn.escape(`${req.body.updates}`) : null;
      const proc = `call updateRecord("${table}", "${req.params.id}", ${updates})`;
      conn.query(proc, (error, results, flds) => {
        conn.release();
        if (error) {
          if (error.code === 'ER_BAD_FIELD_ERROR') {
            res.status(400).send(invalidField(error.sqlMessage));
          } else {
            res.status(400).send(miscError());
          }
        } else {
          res.status(204).send();
        }
      });
    }
  });
};

export const deleteRecord = (table, req, res) => {
  portalsDb.getConnection((err, conn) => {
    if (err) {
      res.status(500).send(serverError('delete a record'));
    }
    else {
      const proc = `call deleteRecord("${table}", "${req.params.id}")`;
      conn.query(proc, (error, results, flds) => {
        conn.release();
        if (error) {
          if (error.code === 'ER_BAD_FIELD_ERROR') {
            res.status(400).send(invalidField(error.sqlMessage));
          } else {
            res.status(400).send(miscError());
          }
        } else {
          res.status(204).send();
        }
      });
    }
  });
};

/************************************************************************************************
* Portals
************************************************************************************************/

export const getCompanies = (req, res) => {
  getRecords(portalsDb, 'companies', req, res);
};

export const getCompany = (req, res) => {
  getRecord(portalsDb, 'companies', req, res);
};

export const getCountries = (req, res) => {
  getRecords(portalsDb, 'countries', req, res);
};

export const getCountry = (req, res) => {
  getRecord(portalsDb, 'countries', req, res);
};

export const getIndustries = (req, res) => {
  getRecords(portalsDb, 'industries', req, res);
};

export const getIndustry = (req, res) => {
  getRecord(portalsDb, 'industries', req, res);
};

export const getIndustryGroups = (req, res) => {
  getRecords(portalsDb, 'industryGroups', req, res);
};

export const getIndustryGroup = (req, res) => {
  getRecord(portalsDb, 'industryGroups', req, res);
};

export const postPortal = (req, res) => {
  portalsDb.getConnection((err, conn) => {
    if (err) {
      res.status(500).send(serverError('create a record'));
    }
    else {
      const fields = 'fields' in req.query && req.query.fields.length ? conn.escape(req.query.fields) : null;
      const allowJoinedFields = 'allowJoinedFields' in req.query ? req.query.allowJoinedFields.toLowerCase() === 'true' : true;

      const name = 'name' in req.body ? req.body.name : null;
      const url = 'url' in req.body ? req.body.url : null;
      const companyId = 'companyId' in req.body ? req.body.companyId : null;

      if (!name || !name.length) {
        res.status(422).send(requiredField('name'));
      } else if (!url || !url.length) {
        res.status(422).send(requiredField('url'));
      } else if (!companyId || !companyId.length) {
        res.status(422).send(requiredField('companyId'));
      } else {
        const proc = `call insertPortal(${mysql.escape(name)},${mysql.escape(url)},${mysql.escape(companyId)},${fields},${allowJoinedFields})`;
        conn.query(proc, (error, results, flds) => {
          conn.release();
          if (error) {
            if (error.code === 'ER_BAD_FIELD_ERROR') {
              res.status(400).send(invalidField(error.sqlMessage));
            } else {
              res.status(400).send(miscError());
            }
          } else {
            res.status(201).send(results[0][0]);
          }
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
  getRecord(portalsDb, table, req, res);
};

export const patchPortal = (req, res) => {
  patchRecord('portals', req, res);
};

export const deletePortal = (req, res) => {
  deleteRecord('portals', req, res);
};

export const getSectors = (req, res) => {
  getRecords(portalsDb, 'sectors', req, res);
};

export const getSector = (req, res) => {
  getRecord(portalsDb, 'sectors', req, res);
};

export const getSubindustries = (req, res) => {
  getRecords(portalsDb, 'subindustries', req, res);
};

export const getSubindustry = (req, res) => {
  getRecord(portalsDb, 'subindustries', req, res);
};

/************************************************************************************************
* Baseball
************************************************************************************************/

export const getBaseballPlayers = (req, res) => {
  getRecords(baseballDb, 'people', req, res);
};

export const getBaseballPlayer = (req, res) => {
  getRecord(baseballDb, 'people', req, res);
};

/************************************************************************************************
* Problem Objects
************************************************************************************************/

function invalidField(msg) {
  return {
    "status": "400",
    "type": "invalid-field",
    "title": "Invalid Field",
    "detail": `${msg}.`
  };
}

function invalidValue(msg) {
  return {
    "status": "400",
    "type": "invalid-value",
    "title": "Invalid Value",
    "detail": `A ${msg} value in the request is invalid.`
  };
}

function miscError() {
  return {
    "status": "400",
    "type": "misc-error",
    "title": "Misc Error",
    "detail": `This error is not documented yet.`
  };
}

function requiredField(msg) {
  return {
    "status": "422",
    "type": "required-field",
    "title": "Required Field",
    "detail": `${msg} is a required field.`
  };
}

function serverError(msg) {
  return {
    "status": "500",
    "type": "server-error",
    "title": "Server Error",
    "detail": `The server could not access the underlying database while attempting to ${msg}.`
  };
}
