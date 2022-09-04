import { FC } from 'react';
import { Link } from 'react-router-dom';

import * as S from './index.style';

const Gnb: FC = () => {
  return (
    <S.Nav>
      <Link to={'/'}>홈</Link>
      <div>
        <Link to={'/signin'}>
          <S.SignInButton type="button">Sign in</S.SignInButton>
        </Link>
        <Link to={'/signup'}>
          <S.SignUpButton type="button">Register</S.SignUpButton>
        </Link>
        <Link to={'/count'}>
          <button type="button">Count</button>
        </Link>
      </div>
    </S.Nav>
  );
};

export default Gnb;
