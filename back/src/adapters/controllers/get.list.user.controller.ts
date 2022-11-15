import { inject, injectable } from 'tsyringe';
import GetListUserUseCase from '../../application/ports/usecases/get.list.user.usecase';
import ErrorHandler from '../../shared/error/erro.handler/error.handler';
import ErrorHandlerResponse from '../../shared/error/error.handler.response';
import HTTPStatusCodes from '../../shared/http.status.codes';
import { HTTPResponse } from '../../shared/types/http.types';
import { GetListUserResponse } from '../../shared/types/user.response.types';
import Controller from './controller';

@injectable()
export default class GetListUserController implements Controller {
  constructor(
    @inject('GetListUserUseCase')
    private getUser: GetListUserUseCase,
  ) {}

  async handle(): Promise<HTTPResponse> {
    const getUserResponse: GetListUserResponse = await this.getUser.handle();

    if (getUserResponse.isError()) {
      const errorHandlerResponse: ErrorHandlerResponse = ErrorHandler.handle(
        getUserResponse.value,
      );
      return {
        statusCode: errorHandlerResponse.statusCode,
        body: errorHandlerResponse.payload,
      };
    }

    return {
      statusCode: HTTPStatusCodes.SUCCESS,
      body: getUserResponse.value,
    };
  }
}
