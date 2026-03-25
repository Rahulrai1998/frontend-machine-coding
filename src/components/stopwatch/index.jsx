import React, { useEffect, useRef, useState } from "react";
import styles from "./Stopwatch.module.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0); //milliseconds to render.

  let stopwatchRef = useRef(0); //to store the last recorded milliseconds across every rerender.
  //to store the intervalID
  // we can ommit this ref value if we don't need the intervalId outside the useEffect block.
  let intervalRef = useRef(null);

  const formatTime = () => {
    const ms = Math.floor((time % 1000) / 10)
      .toString()
      .padStart(2, "0");
    const s = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const min = Math.floor((time / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0");
    const hr = Math.floor(time / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");
    return `${hr}:${min}:${s}:${ms}`;
  };

  const handleStart = () => {
    stopwatchRef.current = new Date().getTime() - time; //it will return the current ms when start clicked.
    intervalRef.current = setInterval(() => {
      setTime(new Date().getTime() - stopwatchRef.current);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    // stopwatchRef.current = 0;
  };

  return (
    <div>
      <div className={styles.parent}>
        <span
          style={{
            marginBottom: "10px",
            display: "inline-block",
            fontSize: "1.5rem",
          }}
        >
          {formatTime()}
        </span>
        <div className={styles.btnGroup}>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;

/*

remaining use case: on tab change the stopwatch should pause automatically and on returning back it should restart from the same time where it was paused.

*/
