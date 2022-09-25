import { FormHTMLAttributes, ReactNode } from 'react';
import * as S from './index.style';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form = ({ className = '', children, ...props }: FormProps) => {
  return (
    <S.Form className={className} {...props}>
      {children}
    </S.Form>
  );
};

export default Form;
