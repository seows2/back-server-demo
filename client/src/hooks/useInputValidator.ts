import { ChangeEvent, useCallback, useState } from 'react';

const useInputValidator = (initialValue: string, validator: (value: string) => string) => {
  const [input, setInput] = useState(initialValue);
  const [warning, setWarning] = useState(' ');

  const onInput = useCallback(
    (value: string) => {
      setInput(value);
      setWarning(validator(value));
    },
    [setInput, setWarning, validator],
  );
  const handleInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onInput(event.target.value);
    },
    [onInput],
  );

  return [input, warning, handleInput] as const;
};

export default useInputValidator;
