import { user } from "../../apis/userApi";
import useSignupForm, { SIGNUP_FORM_NAME } from "../../hooks/useSignupForm";

const SignupPage = () => {
  const { form, handleChanges } = useSignupForm();

  const handleSignup = async () => {
    const response = await user.create(form);
    console.log(response);
  };
  return (
    <div>
      SigninPage
      <div>
        <input name="email" onChange={handleChanges[SIGNUP_FORM_NAME.EMAIL]} />
        <input
          name="password"
          type="password"
          onChange={handleChanges[SIGNUP_FORM_NAME.PASSWORD]}
        />
        <input name="name" onChange={handleChanges[SIGNUP_FORM_NAME.NAME]} />
        <button onClick={handleSignup}>SignUp</button>
      </div>
    </div>
  );
};

export default SignupPage;
