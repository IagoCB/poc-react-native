import { UpdateUserResponse } from '../../../shared/types/user.response.types';
import { UpdateUser } from '../../../shared/types/user.types';

export default interface UpdateUserUseCase {
  handle(data: UpdateUser): Promise<UpdateUserResponse>;
}
