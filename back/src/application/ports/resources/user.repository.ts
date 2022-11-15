import {
  CreateUserResponse,
  GetListUserResponse,
  UpdateUserResponse,
  DeleteUserResponse,
} from '../../../shared/types/user.response.types';
import { CreateUserRepository } from '../../../shared/types/user.types';

export default interface UserRepository {
  createUser(data: CreateUserRepository): Promise<CreateUserResponse>;
  getUserList(): Promise<GetListUserResponse>;
  updateUser(data: object): Promise<UpdateUserResponse>;
  deleteUser(data: string): Promise<DeleteUserResponse>;
}
