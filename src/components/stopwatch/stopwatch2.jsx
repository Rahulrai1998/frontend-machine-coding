import { useState, useEffect } from "react";
export default function Stopwatch() {
  const [milli, setMilli] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer2;
    if (running) {
      //we are not supposed to show or render every millisecond on the screen.
      //hence, we will update the millisecond count on every 10ms and not on every 1 ms.
      timer2 = setInterval(() => {
        setMilli((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(timer2);
    }
    return () => {
      clearInterval(timer2);
    };
  }, [running]);

  /*
  useEffect(() => {
    let timer2;
    if (running) {
      timer2 = setInterval(() => {
        setMilli((prev) => prev + 1);
        // this will not work as event-loop itself takes 4-10s to perform tasks.
      }, 1); //call the interval on every 1s is not ideal and suggested.
    } else {
      clearInterval(timer2);
    }
    return () => {
      clearInterval(timer2);
    };
  }, [running]);

 */
  let mili = Math.floor(milli % 1000);
  let second = Math.floor(milli / 1000) % 60;
  let min = Math.floor(milli / (1000 * 60)) % 60;
  let hour = Math.floor(milli / (1000 * 60 * 60));

  const handleReset = () => {
    setRunning(false);
    setMilli(0);
  };

  return (
    <div>
      <p>
        {hour}hr {min}min {second}s {mili}ms
      </p>
      <div>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => setRunning(false)}>Stop</button>
      </div>
    </div>
  );
}
