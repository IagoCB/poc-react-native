import validate from 'validate.js';
import ApplicationError from '../../shared/error/application.error';
import Constraints from './constraints/create.user.constraints';
import { error, success } from '../../shared/either';
import Constants from '../../shared/constant';
import ErrorTypes from '../../shared/error/error.types';
import { CreateUserValidationResponse } from '../../shared/types/user.response.types';
import { CreateUser } from '../../shared/types/user.types';

export default class CreateUserValidate {
  private data: CreateUser;

  constructor(data: CreateUser) {
    this.data = data;
  }

  static create(data: CreateUser): CreateUserValidationResponse {
    const validation = validate(data, Constraints);
    if (validation) {
      const response = Constants.ERR_Validation;
      response.message = validation;
      return error(new ApplicationError(ErrorTypes.VALIDATION_ERROR, response));
    }
    return success(new CreateUserValidate(data));
  }
}
