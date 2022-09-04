import { Route, Routes } from 'react-router-dom';
import CountPage from '@/pages/Count';
import HomePage from '@/pages/Home';
import SignInPage from '@/pages/SignIn';
import SignUpPage from '@/pages/SignUp';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/count" element={<CountPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
};

export default App;
