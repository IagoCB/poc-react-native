import { inject, injectable } from 'tsyringe';
import UpdateUserUseCase from '../../application/ports/usecases/update.user.usecase';
import ErrorHandler from '../../shared/error/erro.handler/error.handler';
import ErrorHandlerResponse from '../../shared/error/error.handler.response';
import HTTPStatusCodes from '../../shared/http.status.codes';
import { HTTPRequest, HTTPResponse } from '../../shared/types/http.types';
import { UpdateUserResponse } from '../../shared/types/user.response.types';
import Controller from './controller';

@injectable()
export default class UpdateUserController implements Controller {
  constructor(
    @inject('UpdateUserUseCase')
    private updateUser: UpdateUserUseCase,
  ) {}

  async handle(request: HTTPRequest): Promise<HTTPResponse> {
    const updateUserResponse: UpdateUserResponse = await this.updateUser.handle(
      {
        ...request.body,
      },
    );

    if (updateUserResponse.isError()) {
      const errorHandlerResponse: ErrorHandlerResponse = ErrorHandler.handle(
        updateUserResponse.value,
      );
      return {
        statusCode: errorHandlerResponse.statusCode,
        body: errorHandlerResponse.payload,
      };
    }

    return {
      statusCode: HTTPStatusCodes.SUCCESS,
      body: updateUserResponse.value,
    };
  }
}
