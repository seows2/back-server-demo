import { HolidayResponseBody } from '@/types';
import Api from '../api';

class CalendarApi extends Api {
  getHoliday = async (year: number, month: number) => {
    const response = await this.get<HolidayResponseBody>({ params: { year, month } });

    return response.data;
  };
}

export default CalendarApi;
