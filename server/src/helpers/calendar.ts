import axios from 'axios';
import { SERVICE_END_POINT, SERVICE_KEY } from '@/constants/calendar';

export const getCalendarInfo = async (solYear: string, solMonth: string): Promise<any> => {
  const { data } = await axios.get(`${SERVICE_END_POINT}`, {
    params: {
      serviceKey: SERVICE_KEY,
      solYear,
      solMonth: solMonth.padStart(2, '0'),
    },
  });

  return data.response.body;
};
