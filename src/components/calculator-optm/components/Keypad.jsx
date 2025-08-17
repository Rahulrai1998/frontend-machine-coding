import React, { useMemo } from "react";

const Keypad = ({ handleKeyPress }) => {
  const keys = useMemo(
    () => [
      "7",
      "8",
      "9",
      "/",
      "4",
      "5",
      "6",
      "*",
      "1",
      "2",
      "3",
      "-",
      "0",
      "=",
      "+",
      "C",
    ],
    []
  );
  
  return (
    <div className="keypad" role="grid" aria-label="Keypad">
      {keys?.map((key) => (
        <button
          type="button"
          key={key}
          className="key"
          aria-label={`${key} Key`}
          onClick={() => handleKeyPress(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
