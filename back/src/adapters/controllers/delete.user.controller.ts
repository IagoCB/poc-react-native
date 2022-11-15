import { inject, injectable } from 'tsyringe';
import DeleteUserUseCase from '../../application/ports/usecases/delete.user.usecase';
import ErrorHandler from '../../shared/error/erro.handler/error.handler';
import ErrorHandlerResponse from '../../shared/error/error.handler.response';
import HTTPStatusCodes from '../../shared/http.status.codes';
import { HTTPRequest, HTTPResponse } from '../../shared/types/http.types';
import { DeleteUserResponse } from '../../shared/types/user.response.types';
import Controller from './controller';

@injectable()
export default class DeleteUserController implements Controller {
  constructor(
    @inject('DeleteUserUseCase')
    private deleteUser: DeleteUserUseCase,
  ) {}

  async handle(request: HTTPRequest): Promise<HTTPResponse> {
    const deleteUserResponse: DeleteUserResponse = await this.deleteUser.handle(
      request.params.userEmail,
    );

    if (deleteUserResponse.isError()) {
      const errorHandlerResponse: ErrorHandlerResponse = ErrorHandler.handle(
        deleteUserResponse.value,
      );
      return {
        statusCode: errorHandlerResponse.statusCode,
        body: errorHandlerResponse.payload,
      };
    }

    return {
      statusCode: HTTPStatusCodes.SUCCESS,
      body: deleteUserResponse.value,
    };
  }
}
