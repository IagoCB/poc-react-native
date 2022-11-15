import 'dotenv/config';
import {
  CreateUserResponse,
  GetListUserResponse,
  UpdateUserResponse,
  DeleteUserResponse,
} from '../../shared/types/user.response.types';
import {
  CreateUserRepository,
  UpdateUserRepository,
} from '../../shared/types/user.types';
import { error, success } from '../../shared/either';
import { logError } from '../../shared/logger';
import ErrorTypes from '../../shared/error/error.types';
import Constants from '../../shared/constant';
import UserRepository from '../../application/ports/resources/user.repository';
import UserModel from '../../config/database/models/user';
import ApplicationError from '../../shared/error/application.error';

export default class MongoAdapter implements UserRepository {
  async createUser(data: CreateUserRepository): Promise<CreateUserResponse> {
    try {
      const response = await UserModel.create(data);
      return success(response.toJSON());
    } catch (e) {
      if (e.code === 11000) {
        const appError: ApplicationError = new ApplicationError(
          ErrorTypes.DATABASE_ERROR,
          Constants.ERR_DUPLICATE,
        );
        logError('/mongo.adapter.ts/createUser/ApplicationError - ', appError);
        return error(appError);
      }
      const appError: ApplicationError = new ApplicationError(
        ErrorTypes.DATABASE_ERROR,
        e.toString(),
      );
      logError('/mongo.adapter.ts/createUser/ApplicationError - ', appError);
      return error(appError);
    }
  }
  async getUserList(): Promise<GetListUserResponse> {
    try {
      const response = await UserModel.find().exec();
      return success(response);
    } catch (e) {
      const appError: ApplicationError = new ApplicationError(
        ErrorTypes.DATABASE_ERROR,
        e.toString(),
      );
      logError('/mongo.adapter.ts/getUserList/ApplicationError - ', appError);
      return error(appError);
    }
  }
  async updateUser(data: UpdateUserRepository): Promise<UpdateUserResponse> {
    try {
      const filter: object = {
        userId: data.userId,
      };
      const update = {
        userName: data.userName,
        userEmail: data.userEmail,
        userAvatar: data.userAvatar,
      };
      const options = { new: true };
      const response = await UserModel.findOneAndUpdate(
        filter,
        update,
        options,
      );
      return success(response.toJSON());
    } catch (e) {
      const appError: ApplicationError = new ApplicationError(
        ErrorTypes.DATABASE_ERROR,
        e.toString(),
      );
      logError('/mongo.adapter.ts/updateUser/ApplicationError - ', appError);
      return error(appError);
    }
  }
  async deleteUser(userEmail: string): Promise<DeleteUserResponse> {
    try {
      const response = await UserModel.deleteOne({ userEmail }).exec();
      return success(response);
    } catch (e) {
      const appError: ApplicationError = new ApplicationError(
        ErrorTypes.DATABASE_ERROR,
        e.toString(),
      );
      logError('/mongo.adapter.ts/deleteUser/ApplicationError - ', appError);
      return error(appError);
    }
  }
}
