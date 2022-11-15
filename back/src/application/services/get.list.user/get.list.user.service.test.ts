/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { container } from 'tsyringe';
import UserRepository from '../../ports/resources/user.repository';
import MockUserAdapter from '../../../../tests/mock.user.repository';
import GetListUserService from './get.list.user.service';

const makeSut = (type) => {
  container.registerSingleton<UserRepository>(
    'UserRepository',
    MockUserAdapter(type),
  );
  return container.resolve(GetListUserService);
};

describe('Testing Get List module:', () => {
  test('Should return valid response', async () => {
    const getListUserService = makeSut('success');
    const response: any = await getListUserService.handle();
    expect(response.isSuccess()).toBeTruthy();
    expect(response.value.length).toEqual(1);
  });

  test('Should throw when getUserList throws', async () => {
    const getListUserService = makeSut('error');
    const response = await getListUserService.handle();
    expect(response.isError()).toBeTruthy();
  });
});
