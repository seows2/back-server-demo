import { useState } from "react";

export const SIGNUP_FORM_NAME = {
  EMAIL: "email",
  PASSWORD: "password",
  NAME: "name",
};

const useSignupForm = () => {
  const [requiredForm, setRequiredForm] = useState({
    [SIGNUP_FORM_NAME.EMAIL]: "",
    [SIGNUP_FORM_NAME.PASSWORD]: "",
    [SIGNUP_FORM_NAME.NAME]: "",
  });

  const isEmpty =
    Object.values(requiredForm).filter(Boolean).length <
    Object.keys(requiredForm).length;

  const handleEmailChange = ({ target }: { target: HTMLInputElement }) => {
    setRequiredForm((prev) => ({
      ...prev,
      [SIGNUP_FORM_NAME.EMAIL]: target.value,
    }));
  };

  const handlePasswordChange = ({ target }: { target: HTMLInputElement }) => {
    setRequiredForm((prev) => ({
      ...prev,
      [SIGNUP_FORM_NAME.PASSWORD]: target.value,
    }));
  };

  const handleNameChange = ({ target }: { target: HTMLInputElement }) => {
    setRequiredForm((prev) => ({
      ...prev,
      [SIGNUP_FORM_NAME.NAME]: target.value,
    }));
  };

  return {
    form: requiredForm,
    handleChanges: {
      [SIGNUP_FORM_NAME.EMAIL]: handleEmailChange,
      [SIGNUP_FORM_NAME.PASSWORD]: handlePasswordChange,
      [SIGNUP_FORM_NAME.NAME]: handleNameChange,
    },
    isEmpty,
  };
};

export default useSignupForm;
