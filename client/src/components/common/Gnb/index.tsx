import useAuth from '@/hooks/useAuth';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import * as S from './index.style';

const Gnb: FC = () => {
  const { logout, isLoggedIn } = useAuth();

  return (
    <S.Nav>
      <Link to={'/'}>홈</Link>
      <div>
        {!isLoggedIn ? (
          <>
            <Link to={'/signin'}>
              <S.SignInButton type="button">Sign in</S.SignInButton>
            </Link>
            <Link to={'/signup'}>
              <S.SignUpButton type="button">Register</S.SignUpButton>
            </Link>
          </>
        ) : (
          <>
            <Link to={'/booking'}>
              <button type="button">예약</button>
            </Link>
            <S.SignUpButton type="button" onClick={logout}>
              로그아웃
            </S.SignUpButton>
          </>
        )}

        <Link to={'/count'}>
          <button type="button">Count</button>
        </Link>
      </div>
    </S.Nav>
  );
};

export default Gnb;
