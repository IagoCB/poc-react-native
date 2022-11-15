import { container } from 'tsyringe';
import UserRepository from '../application/ports/resources/user.repository';
import MongoAdapter from '../adapters/infrastructure/user.mongo.adapter';

import CreateUserService from '../application/services/create.user/create.user.service';
import CreateUserUseCase from '../application/ports/usecases/create.user.usecase';

import GetListUserService from '../application/services/get.list.user/get.list.user.service';
import GetListUserUseCase from '../application/ports/usecases/get.list.user.usecase';

import UpdateUserUseCase from '../application/ports/usecases/update.user.usecase';
import UpdateUserService from '../application/services/update.user/update.user.service';

import DeleteUserUseCase from '../application/ports/usecases/delete.user.usecase';
import DeleteUserService from '../application/services/delete.user/delete.user.service';

container.registerSingleton<UserRepository>('UserRepository', MongoAdapter);

container.registerSingleton<CreateUserUseCase>(
  'CreateUserUseCase',
  CreateUserService,
);

container.registerSingleton<GetListUserUseCase>(
  'GetListUserUseCase',
  GetListUserService,
);

container.registerSingleton<UpdateUserUseCase>(
  'UpdateUserUseCase',
  UpdateUserService,
);

container.registerSingleton<DeleteUserUseCase>(
  'DeleteUserUseCase',
  DeleteUserService,
);
