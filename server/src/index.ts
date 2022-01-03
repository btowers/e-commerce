import server from './services/server';
import cluster from 'cluster';
import os from 'os';
import dotenv from 'dotenv';
import config from './config';
import minimist from 'minimist';
import { loggerS } from './services/logger';
import { initWsServer } from './services/sockets';

const argv = minimist(process.argv.slice(2));
const numCPUs = os.cpus().length;
dotenv.config();

if (cluster.isMaster && argv._[0] === 'cluster') {
  loggerS.info(`NUMERO DE CPUS ===> ${numCPUs}`);
  loggerS.info(`PID MASTER ${process.pid}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    loggerS.warn(`Worker ${worker.process.pid} died at ${Date()}`);
    cluster.fork();
  });
} else {
  server.listen(config.PORT, () => {
    loggerS.info(`Server: Running on port ${config.PORT}`);
  });

  initWsServer(server);

  server.on('error', () => {
    loggerS.error('Error while starting...');
  });
}
