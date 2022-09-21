import Container from '@/components/@Common/Container';
import TextField from '@/components/@Common/TextField';
import Layout from '@/components/Common/Layout';

const SignUpPage = () => {
  return (
    <Layout>
      <Container title="회원가입">
        <TextField placeholder="아이디" onChange={() => {}} />
        <TextField placeholder="비밀번호" onChange={() => {}} />
      </Container>
    </Layout>
  );
};
export default SignUpPage;
