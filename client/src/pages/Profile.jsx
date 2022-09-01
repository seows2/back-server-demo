import { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1500);
  });

  useEffect(() => {
    setInterval(() => {
      console.log(count);
    }, 1500);
  });

  return <div>하이!</div>;
};
