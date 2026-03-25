import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  const stopwatchRef = useRef(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    alert(new Date().getTime());
  };
  const handleStop = () => {};
  const handleReset = () => {};
  return (
    <div>
      <span>00:00:00:00</span>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
