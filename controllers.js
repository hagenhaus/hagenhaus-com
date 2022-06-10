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

export const getRecords = (table, req, res) => {
  dbPool.getConnection((err, conn) => {
    if (err) {
      res.status(422).send('connection error');
    }
    else {
      const query = util.promisify(conn.query).bind(conn);
      (async () => {
        try {
          const data = {};
          data.meta = {};
          const filter = 'filter' in req.query ? conn.escape(`where ${req.query.filter}`) : null;
          const fields = 'fields' in req.query ? conn.escape(`${req.query.fields}`) : null;
          const order = 'order' in req.query ? conn.escape(`order by ${req.query.order}`) : null;
          const limit = 'pageSize' in req.query ? req.query.pageSize : 10;
          const offset = 'pageNumber' in req.query ? (req.query.pageNumber - 1) * limit : 0;
          const page = conn.escape(`limit ${limit} offset ${offset}`);
          const metaOnly = 'metaOnly' in req.query ? req.query.metaOnly : 'false';
          data.meta.numTotalRecords = (await query(`select count(*) as count from ${table}`))[0].count;
          if (filter) {
            data.meta.numFilteredRecords = (await query(`call selectRecordCount("${table}", ${filter})`))[0][0].count;
          } else {
            data.meta.numFilteredRecords = data.meta.numTotalRecords;
          }
          if (metaOnly == 'false') {
            if(table == "portalsView") {
              data.portals = (await query(`call selectRecords("${table}", ${filter}, ${fields}, ${order}, ${page})`))[0];
              data.meta.numResponseRecords = data.portals.length;
            } else {
              data[table] = (await query(`call selectRecords("${table}", ${filter}, ${fields}, ${order}, ${page})`))[0];
              data.meta.numResponseRecords = data[table].length;
            }
          }
          data.meta.pageNumber = parseInt('pageNumber' in req.query ? req.query.pageNumber : 1);
          data.meta.pageSize = parseInt(limit);
          data.meta.numTotalPages = Math.ceil(data.meta.numTotalRecords / data.meta.pageSize);
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
        const fields = 'fields' in req.query ? conn.escape(`${req.query.fields}`) : null;
        const proc = `call selectRecord("${table}", "${req.params.id}", ${fields})`;
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
  getRecords('companies', req, res);
};

export const getCompany = (req, res) => {
  getRecord('companies', req, res);
};

/************************************************************************************************
* Countries
************************************************************************************************/

export const getCountries = (req, res) => {
  getRecords('countries', req, res);
};

export const getCountry = (req, res) => {
  getRecord('countries', req, res);
};

/************************************************************************************************
* Industries
************************************************************************************************/

export const getIndustries = (req, res) => {
  getRecords('industries', req, res);
};

export const getIndustry = (req, res) => {
  getRecord('industries', req, res);
};

/************************************************************************************************
* Industry Groups
************************************************************************************************/

export const getIndustryGroups = (req, res) => {
  getRecords('industryGroups', req, res);
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

export const getPortals = (req, res) => {
  getRecords('portalsView', req, res);
};

export const getPortal = (req, res) => {
  getRecord('portalsView', req, res);
};

/************************************************************************************************
* Sectors
************************************************************************************************/

export const getSectors = (req, res) => {
  getRecords('sectors', req, res);
};

export const getSector = (req, res) => {
  getRecord('sectors', req, res);
};

/************************************************************************************************
* Subindustries
************************************************************************************************/

export const getSubindustries = (req, res) => {
  getRecords('subindustries', req, res);
};

export const getSubindustry = (req, res) => {
  getRecord('subindustries', req, res);
};