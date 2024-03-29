import winston from 'winston';

/**
 * @class Logger
 */
class Logger {
  logger: winston.Logger;
  private colorizer = winston.format.colorize();

  /**
   * Logger Class Constructor
   */
  constructor() {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            winston.format.simple(),
            winston.format.printf((msg) =>
              this.colorizer.colorize(
                msg.level,
                `${msg.timestamp} - ${msg.level}: ${msg.message}`
              )
            )
          ),
        }),
        new winston.transports.File({
          format: winston.format.combine(
            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            winston.format.prettyPrint()
          ),
          filename: './logs/error.log',
          level: 'error',
        }),
        new winston.transports.File({ filename: './logs/combined.log' }),
      ],
    });
  }
}

export const loggerS = new Logger().logger;
