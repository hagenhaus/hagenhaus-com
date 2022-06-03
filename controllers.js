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
          const filter = 'filter' in req.query ? conn.escape(`where ${req.query.filter}`) : null;
          const order = 'order' in req.query ? conn.escape(`order by ${req.query.order}`) : null;
          const limit = 'pageSize' in req.query ? req.query.pageSize : 10;
          const offset = 'pageNumber' in req.query ? (req.query.pageNumber - 1) * limit : 0;
          const page = conn.escape(`limit ${limit} offset ${offset}`);
          const countsOnly = 'countsOnly' in req.query ? req.query.countsOnly : 'false';
          data.counts.numTotalRecords = (await query(`select count(*) as count from companies`))[0].count;
          if (filter) {
            data.counts.numFilteredRecords = (await query(`call selectCompanyCount(${filter})`))[0][0].count;
          } else {
            data.counts.numFilteredRecords = data.counts.numTotalRecords;
          }
          if (countsOnly == 'false') {
            const records = (await query(`call selectCompanies(${filter}, ${order}, ${page})`))[0];
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

export const getCompany = (req, res) => {
  try {
    dbPool.getConnection((err, conn) => {
      if (err) { res.status(422).send('Unable to connect to database.'); }
      else {
        const proc = `call selectCompany("${req.params.id}")`;
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
* Countries
************************************************************************************************/

export const getCountries = (req, res) => {
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
          const filter = 'filter' in req.query ? conn.escape(`where ${req.query.filter}`) : null;
          const order = 'order' in req.query ? conn.escape(`order by ${req.query.order}`) : null;
          const limit = 'pageSize' in req.query ? req.query.pageSize : 10;
          const offset = 'pageNumber' in req.query ? (req.query.pageNumber - 1) * limit : 0;
          const page = conn.escape(`limit ${limit} offset ${offset}`);
          const countsOnly = 'countsOnly' in req.query ? req.query.countsOnly : 'false';
          data.counts.numTotalRecords = (await query(`select count(*) as count from countries`))[0].count;
          if (filter) {
            data.counts.numFilteredRecords = (await query(`call selectCountryCount(${filter})`))[0][0].count;
          } else {
            data.counts.numFilteredRecords = data.counts.numTotalRecords;
          }
          if (countsOnly == 'false') {
            const records = (await query(`call selectCountries(${filter}, ${order}, ${page})`))[0];
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

export const getCountry = (req, res) => {
  try {
    dbPool.getConnection((err, conn) => {
      if (err) { res.status(422).send('Unable to connect to database.'); }
      else {
        const proc = `call selectCountry("${req.params.code}")`;
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
* Industries
************************************************************************************************/

export const getIndustries = (req, res) => {
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
          const filter = 'filter' in req.query ? conn.escape(`where ${req.query.filter}`) : null;
          const order = 'order' in req.query ? conn.escape(`order by ${req.query.order}`) : null;
          const limit = 'pageSize' in req.query ? req.query.pageSize : 10;
          const offset = 'pageNumber' in req.query ? (req.query.pageNumber - 1) * limit : 0;
          const page = conn.escape(`limit ${limit} offset ${offset}`);
          const countsOnly = 'countsOnly' in req.query ? req.query.countsOnly : 'false';
          data.counts.numTotalRecords = (await query(`select count(*) as count from industries`))[0].count;
          if (filter) {
            data.counts.numFilteredRecords = (await query(`call selectIndustryCount(${filter})`))[0][0].count;
          } else {
            data.counts.numFilteredRecords = data.counts.numTotalRecords;
          }
          if (countsOnly == 'false') {
            const records = (await query(`call selectIndustries(${filter}, ${order}, ${page})`))[0];
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

export const getIndustry = (req, res) => {
  try {
    dbPool.getConnection((err, conn) => {
      if (err) { res.status(422).send('Unable to connect to database.'); }
      else {
        const proc = `call selectIndustry("${req.params.id}")`;
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
          const filter = 'filter' in req.query ? conn.escape(`where ${req.query.filter}`) : null;
          const order = 'order' in req.query ? conn.escape(`order by ${req.query.order}`) : null;
          const limit = 'pageSize' in req.query ? req.query.pageSize : 10;
          const offset = 'pageNumber' in req.query ? (req.query.pageNumber - 1) * limit : 0;
          const page = conn.escape(`limit ${limit} offset ${offset}`);
          const countsOnly = 'countsOnly' in req.query ? req.query.countsOnly : 'false';
          data.counts.numTotalRecords = (await query(`select count(*) as count from portals`))[0].count;
          if (filter) {
            data.counts.numFilteredRecords = (await query(`call selectPortalCount(${filter})`))[0][0].count;
          } else {
            data.counts.numFilteredRecords = data.counts.numTotalRecords;
          }
          if (countsOnly == 'false') {
            const records = (await query(`call selectPortals(${filter}, ${order}, ${page})`))[0];
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

export const getPortal = (req, res) => {
  try {
    dbPool.getConnection((err, conn) => {
      if (err) { res.status(422).send('Unable to connect to database.'); }
      else {
        const proc = `call selectPortal("${req.params.id}")`;
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
* Sectors
************************************************************************************************/

export const getSectors = (req, res) => {
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
          const filter = 'filter' in req.query ? conn.escape(`where ${req.query.filter}`) : null;
          const order = 'order' in req.query ? conn.escape(`order by ${req.query.order}`) : null;
          const limit = 'pageSize' in req.query ? req.query.pageSize : 10;
          const offset = 'pageNumber' in req.query ? (req.query.pageNumber - 1) * limit : 0;
          const page = conn.escape(`limit ${limit} offset ${offset}`);
          const countsOnly = 'countsOnly' in req.query ? req.query.countsOnly : 'false';
          data.counts.numTotalRecords = (await query(`select count(*) as count from sectors`))[0].count;
          if (filter) {
            data.counts.numFilteredRecords = (await query(`call selectSectorCount(${filter})`))[0][0].count;
          } else {
            data.counts.numFilteredRecords = data.counts.numTotalRecords;
          }
          if (countsOnly == 'false') {
            const records = (await query(`call selectSectors(${filter}, ${order}, ${page})`))[0];
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

export const getSector = (req, res) => {
  try {
    dbPool.getConnection((err, conn) => {
      if (err) { res.status(422).send('Unable to connect to database.'); }
      else {
        const proc = `call selectSector("${req.params.id}")`;
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
