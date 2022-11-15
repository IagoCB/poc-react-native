import { container } from 'tsyringe';

import UpdateUserController from '../adapters/controllers/update.user.controller';
import UpdateUserService from '../application/services/update.user/update.user.service';
import MongoAdapter from '../adapters/infrastructure/user.mongo.adapter';

const MakeUpdateUserController = (): UpdateUserController => {
  container.resolve(MongoAdapter);
  container.resolve(UpdateUserService);
  return container.resolve(UpdateUserController);
};

export default MakeUpdateUserController;
