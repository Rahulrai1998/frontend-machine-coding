import React from "react";

const GridLights = () => {
  const config = [
    [1, 0, 0],
    [0, 1, 1],
    [1, 0, 1],
  ];

  return (
    <div className="grid-light-box">
      {config?.map((row, i) => (
        <div key={i}>
          {row?.map((cube, j) => {
            <div key={j} className="light-cube">
              {cube}
            </div>;
          })}
        </div>
      ))}
    </div>
  );
};

export default GridLights;
