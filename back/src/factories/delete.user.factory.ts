import { container } from 'tsyringe';

import DeleteUserController from '../adapters/controllers/delete.user.controller';
import DeleteUserService from '../application/services/delete.user/delete.user.service';
import MongoAdapter from '../adapters/infrastructure/user.mongo.adapter';

const MakeDeleteUserController = (): DeleteUserController => {
  container.resolve(MongoAdapter);
  container.resolve(DeleteUserService);
  return container.resolve(DeleteUserController);
};

export default MakeDeleteUserController;
