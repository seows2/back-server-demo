import Calendar from 'react-calendar';
import Container from '@/components/@Common/Container';

const BookingPage = () => {
  const handleClick = (v: Date) => {
    console.log('test', v.getDay());
  };
  return (
    <Container title="예약">
      <Calendar onClickDay={handleClick} />
    </Container>
  );
};

export default BookingPage;
