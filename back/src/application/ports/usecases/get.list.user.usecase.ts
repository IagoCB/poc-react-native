import { GetListUserResponse } from '../../../shared/types/user.response.types';

export default interface GetListUserUseCase {
  handle(): Promise<GetListUserResponse>;
}
