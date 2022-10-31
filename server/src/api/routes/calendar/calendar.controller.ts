import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import CalendarService from '@/services/calendar';

const handleGetHoliday = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { year, month } = req.query;

    const calendarServiceInstance = Container.get(CalendarService);

    const response = await calendarServiceInstance.getHoliday(Number(year), Number(month));

    res.json(response);
  } catch (error) {
    next(error);
  }
};

export default handleGetHoliday;
