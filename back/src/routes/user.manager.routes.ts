import { Router } from 'express';

import HttpAdapter from '../adapters/infrastructure/http.adapter';
import MakeCreateUserController from '../factories/create.user.factory';
import MakeGetListUserController from '../factories/get.list.user.factory';
import MakeUpdateUserController from '../factories/update.user.factory';
import MakeDeleteUserController from '../factories/delete.user.factory';

const userRoutes = Router();

userRoutes.post('/user', HttpAdapter(MakeCreateUserController()));
userRoutes.get('/user', HttpAdapter(MakeGetListUserController()));
userRoutes.put('/user', HttpAdapter(MakeUpdateUserController()));
userRoutes.delete('/user/:userEmail', HttpAdapter(MakeDeleteUserController()));

export default userRoutes;
