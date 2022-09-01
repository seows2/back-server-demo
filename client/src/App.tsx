import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Navigation from '@/components/Navigation';
import CountPage from '@/pages/Count';
import HomePage from '@/pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <h1>하이하이</h1>
        <div>
          <Navigation />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/count" element={<CountPage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
