import { userApi } from '@/apis';
import Container from '@/components/@Common/Container';
import Form from '@/components/@Common/Form';
import TextField from '@/components/@Common/TextField';
import useInputValidator from '@/hooks/useInputValidator';
import { FormEvent } from 'react';

const SignUpPage = () => {
  const [userId, idWarning, handleId] = useInputValidator('', () => '');
  const [password, pwdWarning, handlePwd] = useInputValidator('', () => '');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await userApi.signup({ userId, password });
    } catch (error) {}
  };

  return (
    <Container title="회원가입">
      <Form onSubmit={handleSubmit}>
        <TextField placeholder="아이디" value={userId} onChange={handleId} />
        <TextField placeholder="비밀번호" value={password} onChange={handlePwd} />
        <button type="submit">SUBMIT</button>
      </Form>
    </Container>
  );
};
export default SignUpPage;
