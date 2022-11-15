import 'reflect-metadata';
import { container } from 'tsyringe';
import UserRepository from '../../ports/resources/user.repository';
import MockUserAdapter from '../../../../tests/mock.user.repository';
import CreateUserService from './create.user.service';

const makeSut = (type) => {
  container.registerSingleton<UserRepository>(
    'UserRepository',
    MockUserAdapter(type),
  );
  return container.resolve(CreateUserService);
};

const validUser = {
  userName: 'string',
  userEmail: 'string',
  userAvatar: 'string',
};

const invalidUser = {
  userName: 'throwCreateUser',
  userEmail: 'string',
  userAvatar: 'string',
};

describe('Testing Create module: ', () => {
  test('Should return valid response', async () => {
    const createUserService = makeSut('success');
    const response = await createUserService.handle(validUser);
    expect(response.isSuccess()).toBeTruthy();
  });

  test('Should throw when is empty', async () => {
    const createUserService = makeSut('success');
    validUser.userEmail = '';
    const response = await createUserService.handle(validUser);
    expect(response.isError()).toBeTruthy();
  });

  test('Should throw when createUser throws', async () => {
    const createUserService = makeSut('success');
    const response = await createUserService.handle(invalidUser);
    expect(response.isError()).toBeTruthy();
  });
});
