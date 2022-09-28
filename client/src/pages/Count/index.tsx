import { useCountValue, useSetCount } from '@/atoms/countState';

const CountPage = () => {
  const count = useCountValue();
  const setCount = useSetCount();

  const plus = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  return (
    <>
      <h1>카운터</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    </>
  );
};

export default CountPage;
