import { Service } from 'typedi';
import * as calendarHelper from '@/helpers/calendar';
import ErrorResponse from '@/utils/errorResponse';
import { ERROR } from '@/constants/error';

@Service()
class CalendarService {
  async getHoliday(year: string, month: string) {
    try {
      const { items } = await calendarHelper.getCalendarInfo(year, month);

      return items;
    } catch (error) {
      throw new ErrorResponse(ERROR.UNAUTHORIZED);
    }
  }
}

export default CalendarService;
