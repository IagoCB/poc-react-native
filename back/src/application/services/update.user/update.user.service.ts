import { inject, injectable } from 'tsyringe';
import { error, success } from '../../../shared/either';
import UpdateUserUseCase from '../../ports/usecases/update.user.usecase';
import UserRepository from '../../ports/resources/user.repository';
import { UpdateUserResponse } from '../../../shared/types/user.response.types';
import { UpdateUser } from '../../../shared/types/user.types';
import UpdateUserValidate from '../../domain/validate.update.user';

@injectable()
export default class UpdateUserService implements UpdateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,
  ) {}

  async handle(data: UpdateUser): Promise<UpdateUserResponse> {
    const messageValidation = UpdateUserValidate.update(data);
    if (messageValidation.isError()) return error(messageValidation.value);

    const updateUserResponse: UpdateUserResponse =
      await this.userRepository.updateUser(data);
    if (updateUserResponse.isError()) return error(updateUserResponse.value);

    return success(updateUserResponse.value);
  }
}
