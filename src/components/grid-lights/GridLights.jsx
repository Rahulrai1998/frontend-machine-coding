import React from "react";

const GridLights = () => {
  const config = [
    [1, 0, 1],
    [0, 1, 1],
    [1, 0, 1],
  ];

  return (
    <div className="grid-light-box">
      {config?.map((row, i) => (
        <div key={i} className="grid-container">
          {row?.map((cube, j) => {
            return (
              <div
                key={j}
                className={`light-cube ${cube === 0 ? "off-bg" : null}`}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GridLights;
