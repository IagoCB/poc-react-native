import { inject, injectable } from 'tsyringe';
import { error, success } from '../../../shared/either';
import CreateUserUseCase from '../../ports/usecases/create.user.usecase';
import UserRepository from '../../ports/resources/user.repository';
import { CreateUserResponse } from '../../../shared/types/user.response.types';
import { CreateUser } from '../../../shared/types/user.types';
import CreateUserValidate from '../../domain/validate.create.user';
import { handleDataToCreate } from '../handle.obj';

@injectable()
export default class CreateUserService implements CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,
  ) {}

  async handle(data: CreateUser): Promise<CreateUserResponse> {
    const messageValidation = CreateUserValidate.create(data);
    if (messageValidation.isError()) return error(messageValidation.value);

    const handleData = handleDataToCreate(data);
    const createUserResponse: CreateUserResponse =
      await this.userRepository.createUser(handleData);
    if (createUserResponse.isError()) return error(createUserResponse.value);

    return success(createUserResponse.value);
  }
}
