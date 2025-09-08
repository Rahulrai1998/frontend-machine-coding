import React, { useMemo, useState } from "react";

const GridLights = () => {
  const [stack, setStack] = useState(new Map());
  const [rolling, setRolling] = useState(false);

  const config = [
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 0],
  ];

  //OPTIMIZATIONS
  const bitCubes = useMemo(
    () => config.flat().reduce((acc, cur) => acc + cur, 0),
    [config]
  );

  const handleClick = (rowIndex, colIndex) => {
    const newStack = structuredClone(stack);
    const key = `${rowIndex}-${colIndex}`;
    if (newStack.get(key)) {
      return;
    } else {
      newStack.set(key, true);
    }
    setStack(newStack);

    if (bitCubes === newStack.size) {
      rollBack();
    }

  };

  const rollBack = () => {
    setRolling(true);
    const interval = setInterval(() => {
      setStack((prev) => {
        const lastKey = Array.from(prev.keys()).pop();
        const newStack = structuredClone(prev);
        if (!newStack.size) {
          setRolling(false);
          clearInterval(interval);
        }
        newStack.delete(lastKey);
        return newStack;
      });
    }, 200);
  };

  return (
    <div className="grid-light-box">
      {config?.map((row, i) => (
        <div key={i} className="grid-container">
          {row?.map((cube, j) => {
            return (
              <div
                onClick={() => cube && !rolling && handleClick(i, j)}
                key={j}
                className={`light-cube ${cube === 0 ? "off-bg" : null} ${
                  stack.has(`${i}-${j}`) ? "on-bg" : null
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
