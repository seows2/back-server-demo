import axios from 'axios';
import { SERVICE_END_POINT, SERVICE_KEY } from '@/constants/calendar';
import { CalendarResBody } from '@/types';

type ItemType = {
  dateKind: string;
  dateName: string;
  isHoliday: 'Y' | 'N';
  locdate: number;
  remarks: string;
  seq: number;
};
type CalendarType = {
  items: { item: ItemType[] } | { item: ItemType } | '';
  numOfRows: number;
  pageNo: number;
  totalCount: number;
};

const formatCalendar = (calendar: CalendarType): CalendarResBody[] => {
  if (!calendar.items) return [];
  const { item } = calendar.items;
  const calendarInfo = Array.isArray(item) ? item : [item];

  return calendarInfo.map(({ locdate, dateName, isHoliday }) => ({
    date: locdate,
    dateName,
    isHoliday: isHoliday === 'Y',
  }));
};

export const getCalendarInfo = async (
  solYear: string,
  solMonth: string,
): Promise<CalendarResBody[]> => {
  const { data } = await axios.get(`${SERVICE_END_POINT}`, {
    params: {
      serviceKey: SERVICE_KEY,
      solYear,
      solMonth: solMonth.padStart(2, '0'),
    },
  });

  return formatCalendar(data.response.body);
};
