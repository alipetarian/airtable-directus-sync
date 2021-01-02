/* Express Async Errors */
require('express-async-errors');

const config = require('config');
const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize({ message: true }),
    winston.format.simple(),
  ),
  levels: winston.config.syslog.levels,
  transports: [
    new winston.transports.Console({ level: 'info', colorize: true, prettyPrint: true }),
    new winston.transports.File({
      filename: 'logFile.log',
      level: 'info',
    }),
  ],
});

module.exports = function () {
  console.log('**** ENVIRONMENT VARIABLES ****');
  console.log('DIRECTUS ENDPOINT: ', config.get('directusEndpoint'));

  process.on('uncaughtException', (ex) => {
    console.log('Inside uncaught excpetion');
    logger.error(ex.message, ex.message);
    // process.exit(1);
  });

  process.on('unhandledRejection', (ex) => {
    console.log('Inside unhandled excption');
    logger.error(ex.message, ex.message);
    // process.exit(1);
  });
};

module.exports.logger = logger;
