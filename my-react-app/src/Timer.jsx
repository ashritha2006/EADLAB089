import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  return (
    <div>
      <p>Time: {time} seconds</p>
      <button onClick={() => setRunning(true)} disabled={running}>
        Start
      </button>
      <button onClick={() => setRunning(false)} disabled={!running}>
        Stop
      </button>
      <button onClick={() => setTime(0)} disabled={running}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
