import { inject, injectable } from 'tsyringe';
import { error, success } from '../../../shared/either';
import GetListUserUseCase from '../../ports/usecases/get.list.user.usecase';
import UserRepository from '../../ports/resources/user.repository';
import { GetListUserResponse } from '../../../shared/types/user.response.types';

@injectable()
export default class GetListUserService implements GetListUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,
  ) {}

  async handle(): Promise<GetListUserResponse> {
    const getListUserResponse: GetListUserResponse =
      await this.userRepository.getUserList();
    if (getListUserResponse.isError()) return error(getListUserResponse.value);
    return success(getListUserResponse.value);
  }
}
