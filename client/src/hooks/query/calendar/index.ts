import { calendarApi } from '@/apis';
import { HolidayResponseBody } from '@/types';
import useSWR from 'swr';

export const useGetHolidayList = (year: number, month: number) => {
  const { data, error } = useSWR<HolidayResponseBody>([year, month], calendarApi.getHoliday);

  return { holidayList: data ?? [], isLoading: !error && !data, isError: error };
};
