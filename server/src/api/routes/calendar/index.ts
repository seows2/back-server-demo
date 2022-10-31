import { Router } from 'express';
import handleGetHoliday from './calendar.controller';

const calendarRouter = Router();

export default (router: Router) => {
  router.use('/calendar', calendarRouter);

  calendarRouter.get('/', handleGetHoliday);

  return router;
};
