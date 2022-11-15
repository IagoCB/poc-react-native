import { CreateUserResponse } from '../../../shared/types/user.response.types';
import { CreateUser } from '../../../shared/types/user.types';

export default interface CreateUserUseCase {
  handle(data: CreateUser): Promise<CreateUserResponse>;
}
