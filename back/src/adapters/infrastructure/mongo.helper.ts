/* eslint-disable import/prefer-default-export */
import { connect } from 'mongoose';
import 'dotenv/config';
import { logError, logInfo } from '../../shared/logger';
import ErrorTypes from '../../shared/error/error.types';
import ApplicationError from '../../shared/error/application.error';

export const MongoHelper = {
  async connect(): Promise<void> {
    try {
      await connect(
        `<Path to mongodb>`,
      );
      logInfo('MongoDB connection started successfully!');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('ERROR_MONGO_CONNECTION', e);
      const appError: ApplicationError = new ApplicationError(
        ErrorTypes.ERROR_MONGO_CONNECTION,
        e.toString(),
      );
      logError('/mongo.adapter.ts/connect/ApplicationError - ', appError);
    }
  },
};
