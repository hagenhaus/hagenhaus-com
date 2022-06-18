import fs from 'fs';
import mysql from 'mysql';
import util from 'util';

const dbConfig = {
  connectionLimit: process.env.dbConnectionLimit,
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
  database: process.env.dbDatabase,
  charset: 'utf8mb4',
  dateStrings: true
};
const dbPool = mysql.createPool(dbConfig);

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
* Records
************************************************************************************************/

export const getRecordFields = (table, req, res) => {
  try {
    dbPool.getConnection((err, conn) => {
      if (err) { res.status(422).send('Unable to connect to database.'); }
      else {
        const proc = `call selectRecordFields("${table}")`;
        conn.query(proc, (error, results, fields) => {
          conn.release();
          if (error) {
            res.status(422).send('conn.query error');
          } else {
            const fa = [];
            for (const f of results[0]) {
              fa.push(f['Field']);
            }
            res.status(200).send(fa);
          }
        });
      }
    });
  } catch (err) {
    res.status(422).send('some error');
  }
};

export const getRecords = (endpoint, table, req, res) => {
  dbPool.getConnection((err, conn) => {
    if (err) {
      res.status(422).send('connection error');
    }
    else {
      const query = util.promisify(conn.query).bind(conn);
      (async () => {
        try {
          const data = {};
          data.metadata = {};
          const fieldList = 'fieldList' in req.query ? conn.escape(`${req.query.fieldList}`) : null;
          const recordFilter = 'recordFilter' in req.query ? conn.escape(`where ${req.query.recordFilter}`) : null;
          const recordOrder = 'recordOrder' in req.query ? conn.escape(`order by ${req.query.recordOrder}`) : null;
          const limit = 'pageSize' in req.query ? req.query.pageSize : 10;
          const offset = 'pageNumber' in req.query ? (req.query.pageNumber - 1) * limit : 0;
          const page = conn.escape(`limit ${limit} offset ${offset}`);
          const metaOnly = 'metaOnly' in req.query ? req.query.metaOnly : 'false';

          data.metadata.numTotalRecords = (await query(`select count(*) as count from ${table}`))[0].count;

          if (recordFilter) {
            data.metadata.numFilteredRecords = (await query(`call selectRecordCount("${table}", ${recordFilter})`))[0][0].count;
          } else {
            data.metadata.numFilteredRecords = data.metadata.numTotalRecords;
          }

          if (metaOnly == 'false') {
            data[endpoint] = (await query(`call selectRecords("${table}", ${fieldList}, ${recordFilter}, ${recordOrder}, ${page})`))[0];
            data.metadata.numResponseRecords = data[endpoint].length;
          }

          data.metadata.pageNumber = parseInt('pageNumber' in req.query ? req.query.pageNumber : 1);
          data.metadata.pageSize = parseInt(limit);
          data.metadata.numTotalPages = Math.ceil(data.metadata.numFilteredRecords / data.metadata.pageSize);
          data.metadata.firstItemOnPage = ((data.metadata.pageNumber - 1) * data.metadata.pageSize) + 1;
          res.status(200).send(data);
        }
        catch (error) {
          res.status(422).send('query error');
        }
        finally { conn.release(); }
      })();
    }
  });
};

export const getRecord = (table, req, res) => {
  try {
    dbPool.getConnection((err, conn) => {
      if (err) { res.status(422).send('Unable to connect to database.'); }
      else {
        const fieldList = 'fieldList' in req.query ? conn.escape(`${req.query.fieldList}`) : null;
        const proc = `call selectRecord("${table}", "${req.params.id}", ${fieldList})`;
        conn.query(proc, (error, results, fields) => {
          conn.release();
          if (error) {
            res.status(422).send('conn.query error');
          } else {
            res.status(200).send(results[0][0]);
          }
        });
      }
    });
  } catch (err) {
    res.status(422).send('some error');
  }
};

/************************************************************************************************
* Companies
************************************************************************************************/

export const getCompanies = (req, res) => {
  getRecords('companies', 'companies', req, res);
};

export const getCompany = (req, res) => {
  getRecord('companies', req, res);
};

/************************************************************************************************
* Countries
************************************************************************************************/

export const getCountries = (req, res) => {
  getRecords('countries', 'countries', req, res);
};

export const getCountry = (req, res) => {
  getRecord('countries', req, res);
};

/************************************************************************************************
* Industries
************************************************************************************************/

export const getIndustries = (req, res) => {
  getRecords('industries', 'industries', req, res);
};

export const getIndustry = (req, res) => {
  getRecord('industries', req, res);
};

/************************************************************************************************
* Industry Groups
************************************************************************************************/

export const getIndustryGroups = (req, res) => {
  getRecords('industry-groups', 'industryGroups', req, res);
};

export const getIndustryGroup = (req, res) => {
  getRecord('industryGroups', req, res);
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
* Portals
************************************************************************************************/

export const getPortalFields = (req, res) => {
  getRecordFields('portalsView', req, res);
};

export const getPortals = (req, res) => {
  getRecords('portals', 'portalsView', req, res);
};

export const getPortal = (req, res) => {
  getRecord('portalsView', req, res);
};

/************************************************************************************************
* Sectors
************************************************************************************************/

export const getSectors = (req, res) => {
  getRecords('sectors', 'sectors', req, res);
};

export const getSector = (req, res) => {
  getRecord('sectors', req, res);
};

/************************************************************************************************
* Subindustries
************************************************************************************************/

export const getSubindustries = (req, res) => {
  getRecords('subindustries', 'subindustries', req, res);
};

export const getSubindustry = (req, res) => {
  getRecord('subindustries', req, res);
};