import { auth } from "../../apis/authApi";
import useSigninForm, { SIGNIN_FORM_NAME } from "../../hooks/useSigninForm";

const SigninPage = () => {
  const { form, handleChanges } = useSigninForm();

  const handleSignIn = async () => {
    const response = await auth.login(form);
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
