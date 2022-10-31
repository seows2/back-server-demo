import axios from 'axios';
import { SERVICE_END_POINT, SERVICE_KEY } from '@/constants/calendar';

export const getCalendarInfo = async (solYear: number, solMonth: number) => {
  const { data } = await axios.get(`${SERVICE_END_POINT}`, {
    params: {
      serviceKey: SERVICE_KEY,
      solYear,
      solMonth,
    },
  });

  return data.response.body;
};
