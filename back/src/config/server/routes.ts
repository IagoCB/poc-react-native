import { Express } from 'express';

import saveRoutes from '../../routes/user.manager.routes';

export default (server: Express): void => {
  server.use('/api', saveRoutes);
};
