import { Router } from 'express';
import { userTestValidation } from '../../validation/user';
import { handleUserTest } from './users.controller';

const userRouter = Router();

export default (router: Router) => {
  router.use('/user', userRouter);

  userRouter.get('/', userTestValidation, handleUserTest);

  return router;
};
