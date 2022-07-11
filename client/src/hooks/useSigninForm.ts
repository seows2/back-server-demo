import { useState } from "react";

export const SIGNIN_FORM_NAME = {
  EMAIL: "email",
  PASSWORD: "password",
};

const useSigninForm = () => {
  const [requiredForm, setRequiredForm] = useState({
    [SIGNIN_FORM_NAME.EMAIL]: "",
    [SIGNIN_FORM_NAME.PASSWORD]: "",
  });

  const isEmpty =
    Object.values(requiredForm).filter(Boolean).length <
    Object.keys(requiredForm).length;

  const handleEmailChange = ({ target }: { target: HTMLInputElement }) => {
    setRequiredForm((prev) => ({
      ...prev,
      [SIGNIN_FORM_NAME.EMAIL]: target.value,
    }));
  };

  const handlePasswordChange = ({ target }: { target: HTMLInputElement }) => {
    setRequiredForm((prev) => ({
      ...prev,
      [SIGNIN_FORM_NAME.PASSWORD]: target.value,
    }));
  };

  return {
    form: requiredForm,
    handleChanges: {
      [SIGNIN_FORM_NAME.EMAIL]: handleEmailChange,
      [SIGNIN_FORM_NAME.PASSWORD]: handlePasswordChange,
    },
    isEmpty,
  };
};

export default useSigninForm;
