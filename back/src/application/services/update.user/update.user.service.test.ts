/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { container } from 'tsyringe';
import UserRepository from '../../ports/resources/user.repository';
import MockUserAdapter from '../../../../tests/mock.user.repository';
import UpdateUserService from './update.user.service';

const makeSut = (type) => {
  container.registerSingleton<UserRepository>(
    'UserRepository',
    MockUserAdapter(type),
  );
  return container.resolve(UpdateUserService);
};

const validData = {
  userId: 'string',
  userName: 'string',
  userEmail: 'string',
  userAvatar: 'string',
};

describe('Testing Get List module:', () => {
  test('Should return valid response', async () => {
    const updateUserService = makeSut('success');
    const response: any = await updateUserService.handle(validData);
    expect(response.isSuccess()).toBeTruthy();
    expect(response.value).toEqual({
      userId: 'string',
      userName: 'string',
      userEmail: 'string',
      userAvatar: 'string',
    });
  });

  test('Should throw when userId is empty', async () => {
    const updateUserService = makeSut('success');
    validData.userId = '';
    const response = await updateUserService.handle(validData);
    expect(response.isError()).toBeTruthy();
  });

  test('Should throw when UpdateUserValidate throws', async () => {
    const updateUserService = makeSut('success');
    validData.userId = 'throwUpdateUser';
    const response = await updateUserService.handle(validData);
    expect(response.isError()).toBeTruthy();
  });
});
