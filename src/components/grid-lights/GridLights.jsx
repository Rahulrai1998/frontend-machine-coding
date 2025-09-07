import React, { useState } from "react";

const GridLights = () => {
  const [stack, setStack] = useState({});
  const config = [
    [1, 0, 1],
    [0, 1, 1],
    [1, 0, 1],
  ];

  const handleClick = (rowIndex, colIndex) => {
    const newStack = structuredClone(stack);
    const key = `${rowIndex}-${colIndex}`;
    if (newStack[key]) {
      return;
    } else {
      newStack[key] = true;
    }
    setStack(newStack);
    console.log(stack);
  };

  return (
    <div className="grid-light-box">
      {config?.map((row, i) => (
        <div key={i} className="grid-container">
          {row?.map((cube, j) => {
            return (
              <div
                onClick={() => cube && handleClick(i, j)}
                key={j}
                className={`light-cube ${cube === 0 ? "off-bg" : null} ${
                  stack[`${i}-${j}`] ? "on-bg" : null
                }`}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GridLights;
