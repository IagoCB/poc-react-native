import validate from 'validate.js';
import ApplicationError from '../../shared/error/application.error';
import Constraints from './constraints/delete.user.constraints';
import { error, success } from '../../shared/either';
import Constants from '../../shared/constant';
import ErrorTypes from '../../shared/error/error.types';
import { DeleteUserValidationResponse } from '../../shared/types/user.response.types';

export default class DeleteUserValidate {
  private data: string;

  constructor(data: string) {
    this.data = data;
  }

  static delete(userEmail: string): DeleteUserValidationResponse {
    const validation = validate({ userEmail }, Constraints);
    if (validation) {
      const response = Constants.ERR_Validation;
      response.message = validation;
      return error(new ApplicationError(ErrorTypes.VALIDATION_ERROR, response));
    }
    return success(new DeleteUserValidate(userEmail));
  }
}
