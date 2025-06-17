import React, { useEffect, useState } from "react";
import "./styles.css";

const Progress = ({ elm }) => {
  const [tempElm, setTempElm] = useState(0);
  useEffect(() => {
    setTimeout(() => setTempElm(elm), 400);
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
          transition: "1s ease-in",
          //   width: `${elm}%`,
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
  const [progress] = useState([10, 20, 40, 60, 80, 100]);

  return (
    <div>
      {progress?.map((elm, i) => (
        <Progress elm={elm} key={i} />
      ))}
    </div>
  );
};

export default ProgressBar;
