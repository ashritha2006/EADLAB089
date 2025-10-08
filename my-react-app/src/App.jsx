import React, { useState } from 'react';  // Import useState
import './App.css';
import Counter from './Counter';
import Test from './Test';
import DisplayCount from './DisplayCount';
import ReactDOM from 'react-dom/client';
import RouterComp from './RouterComp';
import TableWithPagination from './TableWithPagination';
import Timer from './Timer';
import Portaldemo from './PortalDemo';
import PasswordStrengthChecker from './PasswordStrengthChecker';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter />
      <Test />
      <DisplayCount count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <RouterComp />
      <TableWithPagination />
      <Timer />
      <Portaldemo />
      <PasswordStrengthChecker />
    </div>
  );
}

export default App;
