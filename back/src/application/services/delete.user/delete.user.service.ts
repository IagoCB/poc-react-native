import { inject, injectable } from 'tsyringe';
import { error, success } from '../../../shared/either';
import DeleteUserUseCase from '../../ports/usecases/delete.user.usecase';
import UserRepository from '../../ports/resources/user.repository';
import { DeleteUserResponse } from '../../../shared/types/user.response.types';
import DeleteUserValidate from '../../domain/validate.delete.user';

@injectable()
export default class DeleteUserService implements DeleteUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,
  ) {}

  async handle(data: string): Promise<DeleteUserResponse> {
    const messageValidation = DeleteUserValidate.delete(data);
    if (messageValidation.isError()) return error(messageValidation.value);
    const deleteUserResponse: DeleteUserResponse =
      await this.userRepository.deleteUser(data);
    if (deleteUserResponse.isError()) return error(deleteUserResponse.value);

    return success(deleteUserResponse.value);
  }
}
