import { createLogger, format, Logger, transports } from 'winston';
import 'winston-daily-rotate-file';

const transportError = new transports.DailyRotateFile({
  level: 'error',
  filename: 'error.log',
  maxSize: '100m',
  maxFiles: '1d',
});

const transportInfo = new transports.DailyRotateFile({
  level: 'info',
  filename: 'info.log',
  maxSize: '100m',
  maxFiles: '1d',
});

const errorLogger: Logger = createLogger({
  format: format.combine(format.errors({ stack: true }), format.json()),
  transports: [
    transportError,
    new transports.Console({
      format: format.simple(),
    }),
  ],
});

const infoLogger: Logger = createLogger({
  format: format.combine(format.errors({ stack: true }), format.json()),
  transports: [
    transportInfo,
    new transports.Console({
      format: format.simple(),
    }),
  ],
});

export const logInfo = infoLogger.info;
export const logError = errorLogger.error;
