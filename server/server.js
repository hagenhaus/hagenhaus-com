import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import cors from 'cors';
import { routes } from './routes.js';
import https from 'https';
import { logger } from './logger.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

routes(app);

if (process.env.https == 'true') {
  const privateKey = fs.readFileSync(process.env.privateKey, 'utf8');
  const certificate = fs.readFileSync(process.env.certificate, 'utf8');
  const credentials = { key: privateKey, cert: certificate };
  const httpsServer = https.createServer(credentials, app);
  httpsServer.listen(process.env.appPort, () => {
    logger.info({ subject: 'server', event: 'start', message: `port ${process.env.appPort}` });
  });
} else {
  app.listen(process.env.appPort, () => {
    logger.info({ subject: 'server', event: 'start', message: `port ${process.env.appPort}` });
  });
}

process.on('SIGINT', function () {
  console.log();
  logger.info({ subject: 'server', event: 'stop', message: `port ${process.env.appPort}` });
  process.exit();
});
