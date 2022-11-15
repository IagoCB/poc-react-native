/* eslint-disable @typescript-eslint/no-explicit-any */
import CreateUser from '../../application/domain/create.user';
import ValidateCreateUser from '../../application/domain/validate.create.user';
import ValidateUpdateUser from '../../application/domain/validate.update.user';
import UpdateUser from '../../application/domain/update.user';
import DeleteUserValidate from '../../application/domain/validate.delete.user';
import DeleteUser from '../../application/domain/delete.user';
import { Either } from '../either';
import ApplicationError from '../error/application.error';

export type CreateUserValidationResponse = Either<
  ApplicationError,
  ValidateCreateUser
>;
export type UpdateUserValidationResponse = Either<
  ApplicationError,
  ValidateUpdateUser
>;
export type DeleteUserValidationResponse = Either<
  ApplicationError,
  DeleteUserValidate
>;
export type CreateUserResponse = Either<ApplicationError, CreateUser>;
export type GetListUserResponse = Either<ApplicationError, Array<any>>;
export type UpdateUserResponse = Either<ApplicationError, UpdateUser>;
export type DeleteUserResponse = Either<ApplicationError, DeleteUser>;
