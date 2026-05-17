import React, { useEffect, useState } from "react";


/*
Simple stopwatch
1. start, stop and reset buttons.
2. on start count should start from from 1 and by 1 every second.
*/
const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    if (!isRunning && time < 10) setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((time) => {
          if (time >= 10) {
            clearInterval(timer);
            setIsRunning(false);
            return time;
          }
          return time + 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  //generic approach
  //   useEffect(() => {
  //   let timer;
  //   if (running) {
  //     timer = setInterval(() => {
  //       setCount((prev) => prev + 1);
  //     }, 1000);
  //   } else {
  //     if (timer) clearInterval(timer);
  //   }
  //   return () => {
  //     if (timer) clearInterval(timer);
  //   };
  // }, [running]);

  return (
    <div>
      <div style={{ textAlign: "center" }}>{time}</div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Timer;
