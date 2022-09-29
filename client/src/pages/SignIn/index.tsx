import Container from '@/components/@Common/Container';
import Form from '@/components/@Common/Form';
import TextField from '@/components/@Common/TextField';
import useAuth from '@/hooks/useAuth';
import useInputValidator from '@/hooks/useInputValidator';
import { FormEvent } from 'react';

const SignInPage = () => {
  const [userId, idWarning, handleId] = useInputValidator('', () => '');
  const [password, pwdWarning, handlePwd] = useInputValidator('', () => '');
  const { login } = useAuth();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await login({ userId, password });
    } catch (error) {}
  };

  return (
    <Container title="로그인">
      <Form onSubmit={handleSubmit}>
        <TextField placeholder="아이디" value={userId} onChange={handleId} />
        <TextField placeholder="비밀번호" value={password} onChange={handlePwd} />
        <button type="submit">SUBMIT</button>
      </Form>
    </Container>
  );
};
export default SignInPage;
