import 'reflect-metadata';
import './shared/container';
import { logInfo } from './shared/logger';

import httpServer from './config/server/httpServer';
import { MongoHelper } from './adapters/infrastructure/mongo.helper';

import 'dotenv/config';

MongoHelper.connect()
  .then(async () => {
    httpServer.listen(process.env.PORT || 3001, () => {
      // eslint-disable-next-line no-console
      console.log(`Server running on port ${process.env.PORT}`);
      logInfo(`Server running on port ${process.env.PORT}`);
    });
  })
  // eslint-disable-next-line no-console
  .catch(console.error);
