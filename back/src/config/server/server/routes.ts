import { Express } from 'express';

import saveRoutes from '../../routes/os.manager.routes';

export default (server: Express): void => {
  server.use('/nlm', saveRoutes);
};
