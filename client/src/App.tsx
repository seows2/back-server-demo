import { Route, Routes } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CountPage from '@/pages/Count';
import HomePage from '@/pages/Home';

const App = () => {
  return (
    <>
      <h1>하이하이</h1>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/count" element={<CountPage />} />
      </Routes>
    </>
  );
};

export default App;
