import { ChangeEvent, InputHTMLAttributes } from 'react';
import * as S from './index.style';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  className = '',
  type = 'text',
  readOnly = false,
  value = '',
  maxLength,
  onChange,
  ...props
}: TextFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (maxLength !== undefined && event.target.value.length > maxLength) {
      return;
    }

    onChange(event);
  };

  return (
    <S.TextField
      type={type}
      value={value}
      className={className}
      readOnly={readOnly}
      onChange={handleChange}
      {...props}
    />
  );
};

export default TextField;
