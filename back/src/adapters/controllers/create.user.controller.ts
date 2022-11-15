import { inject, injectable } from 'tsyringe';
import CreateUserUseCase from '../../application/ports/usecases/create.user.usecase';
import ErrorHandler from '../../shared/error/erro.handler/error.handler';
import ErrorHandlerResponse from '../../shared/error/error.handler.response';
import HTTPStatusCodes from '../../shared/http.status.codes';
import { HTTPRequest, HTTPResponse } from '../../shared/types/http.types';
import { CreateUserResponse } from '../../shared/types/user.response.types';
import Controller from './controller';

@injectable()
export default class CreateUserController implements Controller {
  constructor(
    @inject('CreateUserUseCase')
    private createUser: CreateUserUseCase,
  ) {}

  async handle(request: HTTPRequest): Promise<HTTPResponse> {
    const createUserResponse: CreateUserResponse = await this.createUser.handle(
      {
        ...request.body,
      },
    );

    if (createUserResponse.isError()) {
      const errorHandlerResponse: ErrorHandlerResponse = ErrorHandler.handle(
        createUserResponse.value,
      );
      return {
        statusCode: errorHandlerResponse.statusCode,
        body: errorHandlerResponse.payload,
      };
    }

    return {
      statusCode: HTTPStatusCodes.SUCCESS,
      body: createUserResponse.value,
    };
  }
}
