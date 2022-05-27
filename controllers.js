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
* Companies
************************************************************************************************/

export const getCompanies = (req, res) => {
  try {
    dbPool.getConnection((err, conn) => {
      if (err) {
        console.log('dbPool.getConnection error');
      } else {
        conn.query(`call selectCompanies()`, (error, results, fields) => {
          conn.release();
          if (error) {
            res.status(422).send('conn.query error');
          } else {
            res.status(200).send(results[0]);
          }
        });
      }
    });
  } catch (err) {
    res.status(422).send('some error');
  }
};

/************************************************************************************************
* GICS
************************************************************************************************/

export const getGicsSectors = (req, res) => {
  dbPool.getConnection((err, conn) => {
    if (err) {
      res.status(422).send('connection error');
    }
    else {
      const query = util.promisify(conn.query).bind(conn);
      (async () => {
        try {
          const data = {};
          data.counts = {};
          const filter = 'filter' in req.query ? conn.escape(req.query.filter) : null;
          const limit = 'pageSize' in req.query ? req.query.pageSize : 10;
          const offset = 'pageNumber' in req.query ? (req.query.pageNumber - 1) * limit : 0;
          const sortField = 'sortField' in req.query ? conn.escape(req.query.sortField) : conn.escape('id');
          const sortDirection = 'sortDirection' in req.query ? conn.escape(req.query.sortDirection) : conn.escape('asc');
          const countsOnly = 'countsOnly' in req.query ? req.query.countsOnly : 'false';
          data.counts.numTotalRecords = (await query(`select count(*) as count from gicsSectors`))[0].count;
          if (filter) {
            data.counts.numFilteredRecords = (await query(`call selectGicsSectorCount(${filter})`))[0][0].count;
          } else {
            data.counts.numFilteredRecords = data.counts.numTotalRecords;
          }
          if (countsOnly == 'false') {
            const records = (await query(`call selectGicsSectors(${filter}, ${limit}, ${offset}, ${sortField}, ${sortDirection})`))[0];
            data.counts.numResponseRecords = records.length;
            data.records = records;
          }
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

export const getGicsIndustryGroups = (req, res) => {
  try {
    dbPool.getConnection((err, conn) => {
      if (err) {
        console.log('dbPool.getConnection error');
      } else {
        const name = 'name' in req.query ? conn.escape(req.query.name) : null;
        const sectorId = 'sectorId' in req.query ? conn.escape(req.query.sectorId) : null;
        conn.query(`call selectGicsIndustryGroups(${name}, ${sectorId})`, (error, results, fields) => {
          conn.release();
          if (error) {
            res.status(422).send('conn.query error');
          } else {
            res.status(200).send(results[0]);
          }
        });
      }
    });
  } catch (err) {
    res.status(422).send('some error');
  }
};

export const getGicsIndustries = (req, res) => {
  try {
    dbPool.getConnection((err, conn) => {
      if (err) {
        console.log('dbPool.getConnection error');
      } else {
        const name = 'name' in req.query ? conn.escape(req.query.name) : null;
        const industryGroupId = 'industryGroupId' in req.query ? conn.escape(req.query.industryGroupId) : null;
        conn.query(`call selectGicsIndustries(${name}, ${industryGroupId})`, (error, results, fields) => {
          conn.release();
          if (error) {
            res.status(422).send('conn.query error');
          } else {
            res.status(200).send(results[0]);
          }
        });
      }
    });
  } catch (err) {
    res.status(422).send('some error');
  }
};

export const getGicsSubindustries = (req, res) => {
  try {
    dbPool.getConnection((err, conn) => {
      if (err) {
        console.log('dbPool.getConnection error');
      } else {
        const name = 'name' in req.query ? conn.escape(req.query.name) : null;
        const industryId = 'industryId' in req.query ? conn.escape(req.query.industryId) : null;
        conn.query(`call selectGicsSubindustries(${name}, ${industryId})`, (error, results, fields) => {
          conn.release();
          if (error) {
            res.status(422).send('conn.query error');
          } else {
            res.status(200).send(results[0]);
          }
        });
      }
    });
  } catch (err) {
    res.status(422).send('some error');
  }
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
  try {
    dbPool.getConnection((err, conn) => {
      if (err) {
        console.log('dbPool.getConnection error');
      } else {
        conn.query(`call selectPortals()`, (error, results, fields) => {
          conn.release();
          if (error) {
            res.status(422).send('conn.query error');
          } else {
            res.status(200).send(results[0]);
          }
        });
      }
    });
  } catch (err) {
    res.status(422).send('some error');
  }
};
