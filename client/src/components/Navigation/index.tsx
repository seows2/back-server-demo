import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navigation: FC = () => {
  return (
    <>
      <Link to="/">홈</Link>
      <Link to="/count">카운터</Link>
    </>
  );
};

export default Navigation;
