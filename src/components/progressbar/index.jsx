import React, { useEffect, useState } from "react";
import "./styles.css";

const Progress = ({ elm }) => {
  const [tempElm, setTempElm] = useState(0);
  console.log(tempElm);
  useEffect(() => {
    setTimeout(() => setTempElm(elm), 0);
  }, [elm]);
  return (
    <div className="outer-div">
      <div
        className="inner-div"
        style={{
          textAlign: "right",
          color: tempElm < 5 ? "black" : "white",
          background: "green",
          transform: `translateX(${tempElm - 100}%)`,
          transition: "2s ease-in",
          // width: `${elm}%`,
        }}
        role="progressbar"
        aria-valuenow={elm}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {elm}%
      </div>
    </div>
  );
};

const ProgressBar = () => {
  const [start, setStart] = useState(false);
  const [progress] = useState([10, 20, 40, 60, 80, 100]);
  const [bar, setBar] = useState([]);

  const handleClick = () => {
    setStart(true);
    setBar((prev) => [...prev, 1]);
  };

  return (
    <div>
      <button onClick={handleClick}>Start</button>
      {/* {start && progress?.map((elm, i) => <Progress elm={elm} key={i} />)} */}
      {start &&
        bar.map((elm, i) => {
          console.log("yes yes", i);
          return <Progress elm={100} key={i} />;
        })}
    </div>
  );
};

export default ProgressBar;
