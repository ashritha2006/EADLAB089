import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count - 10)}>-</button>
      <button onClick={() => setCount(count + 10)}>+</button>
    </>
  );
};

export default Counter;
