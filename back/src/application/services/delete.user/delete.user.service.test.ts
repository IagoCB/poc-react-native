/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { container } from 'tsyringe';
import UserRepository from '../../ports/resources/user.repository';
import MockUserAdapter from '../../../../tests/mock.user.repository';
import DeleteUserService from './delete.user.service';

const makeSut = (type) => {
  container.registerSingleton<UserRepository>(
    'UserRepository',
    MockUserAdapter(type),
  );
  return container.resolve(DeleteUserService);
};

describe('Testing Delete module: ', () => {
  test('Should return valid response', async () => {
    const deleteUserService = makeSut('success');
    const userEmail = 'valid';
    const response: any = await deleteUserService.handle(userEmail);
    expect(response.isSuccess()).toBeTruthy();
    expect(response.value.deletedCount).toEqual(1);
  });

  test('Should throw when userEmail is empty', async () => {
    const deleteUserService = makeSut('success');
    const userEmail = '';
    const response = await deleteUserService.handle(userEmail);
    expect(response.isError()).toBeTruthy();
  });

  test('Should throw when deleteUser throws', async () => {
    const deleteUserService = makeSut('success');
    const userEmail = 'throwDeleteUser';
    const response = await deleteUserService.handle(userEmail);
    expect(response.isError()).toBeTruthy();
  });
});
