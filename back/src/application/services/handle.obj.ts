/* eslint-disable import/prefer-default-export */
import { CreateUser, handleCreateUser } from '../../shared/types/user.types';
import { createUuid } from '../../shared/create.uuid';

export const handleDataToCreate = (data: CreateUser): handleCreateUser => {
  const handleData = {
    ...data,
    userId: createUuid(),
  };
  return handleData;
};
