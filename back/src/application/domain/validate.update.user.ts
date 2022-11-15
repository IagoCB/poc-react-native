import validate from 'validate.js';
import ApplicationError from '../../shared/error/application.error';
import Constraints from './constraints/update.user.constraints';
import { error, success } from '../../shared/either';
import Constants from '../../shared/constant';
import ErrorTypes from '../../shared/error/error.types';
import { UpdateUserValidationResponse } from '../../shared/types/user.response.types';
import { UpdateUser } from '../../shared/types/user.types';
import { logError } from '../../shared/logger';

export default class UpdateUserValidate {
  private data: UpdateUser;

  constructor(data: UpdateUser) {
    this.data = data;
  }

  static update(data: UpdateUser): UpdateUserValidationResponse {
    const validation = validate(data, Constraints);
    if (validation) {
      const response = Constants.ERR_Validation;
      response.message = validation;
      const appError: ApplicationError = new ApplicationError(
        ErrorTypes.VALIDATION_ERROR,
        response,
      );
      logError(
        '/application/domain/validate.update.user.ts/ApplicationError - ',
        appError,
      );
      return error(appError);
    }
    return success(new UpdateUserValidate(data));
  }
}
