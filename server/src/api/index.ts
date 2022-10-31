import { Router } from 'express';
import auth from './routes/auth';
import calendar from './routes/calendar';
import users from './routes/users';
import version from './routes/version';

export default () => {
  const router = Router();

  version(router);
  users(router);
  auth(router);
  calendar(router);

  return router;
};
