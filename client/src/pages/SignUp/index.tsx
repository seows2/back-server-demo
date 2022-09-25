import Container from '@/components/@Common/Container';
import Form from '@/components/@Common/Form';
import TextField from '@/components/@Common/TextField';
import Layout from '@/components/Common/Layout';
import useInputValidator from '@/hooks/useInputValidator';
import { FormEvent } from 'react';

const SignUpPage = () => {
  const [id, idWarning, handleId] = useInputValidator('', () => '');
  const [pwd, pwdWarning, handlePwd] = useInputValidator('', () => '');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('로그인', id, pwd);
  };

  return (
    <Layout>
      <Container title="회원가입">
        <Form onSubmit={handleSubmit}>
          <TextField placeholder="아이디" value={id} onChange={handleId} />
          <TextField placeholder="비밀번호" value={pwd} onChange={handlePwd} />
          <button type="submit">SUBMIT</button>
        </Form>
      </Container>
    </Layout>
  );
};
export default SignUpPage;
