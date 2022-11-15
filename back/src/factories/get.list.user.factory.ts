import { container } from 'tsyringe';

import GetListUserController from '../adapters/controllers/get.list.user.controller';
import GetListUserService from '../application/services/get.list.user/get.list.user.service';
import MongoAdapter from '../adapters/infrastructure/user.mongo.adapter';

const MakeGetListUserController = (): GetListUserController => {
  container.resolve(MongoAdapter);
  container.resolve(GetListUserService);
  return container.resolve(GetListUserController);
};

export default MakeGetListUserController;
