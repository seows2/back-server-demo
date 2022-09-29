import { Router } from 'express';
import { handleLogin, handleLogout, handleRefresh } from './auth.controller';

const authRouter = Router();

export default (router: Router) => {
  router.use('/auth', authRouter);

  // [TODO] Validator 추가
  authRouter.post('/', handleLogin);
  authRouter.get('/', handleRefresh);
  authRouter.delete('/', handleLogout);

  return router;
};
