import Calendar from 'react-calendar';
import Container from '@/components/@Common/Container';
import { useGetHolidayList } from '@/hooks/query/calendar';
import { useState } from 'react';
import { fDate } from '@/utils/date';

const BookingPage = () => {
  const [date, setDate] = useState(new Date());
  const { holidayList } = useGetHolidayList(date.getFullYear(), date.getMonth() + 1);

  const updateDate = ({ activeStartDate }: { activeStartDate: Date }) => {
    setDate(activeStartDate);
  };

  const renderHoliday = ({ date }: { date: Date }) => {
    const holiDate = holidayList.find(hd => hd.date === fDate(date));

    return holiDate ? (
      <div>
        {holiDate.dateName} <br /> 홀리데이!
      </div>
    ) : null;
  };

  return (
    <Container title="예약">
      <Calendar
        tileContent={renderHoliday}
        prev2Label={null}
        next2Label={null}
        minDetail="year"
        onActiveStartDateChange={updateDate}
      />
    </Container>
  );
};

export default BookingPage;
