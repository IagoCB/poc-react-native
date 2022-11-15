/* eslint-disable @typescript-eslint/no-unused-vars */
import 'dotenv/config';
import { CreateUserResponse, UpdateUserResponse, GetListUserResponse, DeleteUserResponse } from '../src/shared/types/user.response.types';
import { CreateUserRepository, UpdateUserRepository } from '../src/shared/types/user.types';
import { error, success } from '../src/shared/either';
import ErrorTypes from '../src/shared/error/error.types';
import UserRepository from '../src/application/ports/resources/user.repository';
import ApplicationError from '../src/shared/error/application.error';

const response = {
  userId: "string",
  userName:"string",
  userEmail: "string",
  userAvatar: "string",
}

const appError: ApplicationError = new ApplicationError(ErrorTypes.DATABASE_ERROR, 'error');

const mockUserAdapter = (type) => class MockUserAdapter implements UserRepository {
  async createUser(
    data: CreateUserRepository,
  ): Promise<CreateUserResponse> {
    if (data.userName === 'throwCreateUser') return error(appError);
    return success(response);
  }

  async updateUser(
    data: UpdateUserRepository,
  ): Promise<UpdateUserResponse> {
    if (data.userId === 'throwUpdateUser') return error(appError);
    return success(response);
  }

  async getUserList(): Promise<GetListUserResponse> {
    if (type === 'error') return error(appError);
    return success([response]);
  }

  async deleteUser(
    userEmail: string,
  ): Promise<DeleteUserResponse> {
    if(userEmail === 'throwDeleteUser') return error(appError);
      return success({deletedCount: 1});
  }
}

export default mockUserAdapter;
