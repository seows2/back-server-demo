import { Router } from 'express';
import users from './routes/users';
import version from './routes/version';

export default () => {
  const router = Router();

  version(router);
  users(router);

  return router;
};
