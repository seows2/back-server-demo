import { FC } from 'react';
import Gnb from '../Gnb';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Gnb />
      <main>{children}</main>
    </>
  );
};

export default Layout;
