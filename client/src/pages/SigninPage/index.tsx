import { auth } from "../../apis/authApi";
import useSigninForm, { SIGNIN_FORM_NAME } from "../../hooks/useSigninForm";

const SigninPage = () => {
  const { form, isEmpty, handleChanges } = useSigninForm();
  console.log(form, isEmpty);

  const handleSignIn = () => {
    const response = auth.login(form);
    console.log(response);
  };
  return (
    <div>
      SigninPage
      <div>
        <input name="email" onChange={handleChanges[SIGNIN_FORM_NAME.EMAIL]} />
        <input
          name="password"
          type="password"
          onChange={handleChanges[SIGNIN_FORM_NAME.PASSWORD]}
        />
        <button onClick={handleSignIn}>SignIn</button>
      </div>
    </div>
  );
};

export default SigninPage;
