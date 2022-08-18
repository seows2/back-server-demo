import { Router } from 'express';
import { userTestValidation } from '../../validation/user';
import { handleCreateUser, handleUserTest } from './users.controller';

const userRouter = Router();

export default (router: Router) => {
  router.use('/users', userRouter);

  userRouter.get('/', userTestValidation, handleUserTest);
  userRouter.post('/', handleCreateUser);

  return router;
};
