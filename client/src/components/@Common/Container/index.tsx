import { ReactNode } from 'react';
import * as S from './index.style';

type ContainerProps = {
  title?: string;
  children?: ReactNode;
};

const Container = ({ title, children }: ContainerProps) => {
  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}
      {children}
    </S.Container>
  );
};

export default Container;
