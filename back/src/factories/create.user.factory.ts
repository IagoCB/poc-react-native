import { container } from 'tsyringe';

import CreateUserController from '../adapters/controllers/create.user.controller';
import CreateUserService from '../application/services/create.user/create.user.service';
import MongoAdapter from '../adapters/infrastructure/user.mongo.adapter';

const MakeCreateUserController = (): CreateUserController => {
  container.resolve(MongoAdapter);
  container.resolve(CreateUserService);
  return container.resolve(CreateUserController);
};

export default MakeCreateUserController;
