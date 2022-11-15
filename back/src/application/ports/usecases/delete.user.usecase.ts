import { DeleteUserResponse } from '../../../shared/types/user.response.types';

export default interface DeleteUserUseCase {
  handle(data: string): Promise<DeleteUserResponse>;
}
