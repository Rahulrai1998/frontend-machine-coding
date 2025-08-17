import React from "react";

const Display = ({ data, handleInputChange }) => {
  return (
    <div className="display" aria-live="polite">
      <input
        type="text"
        className="input"
        value={data.input}
        onChange={(e) => {
          console.log(e.target.value);
          handleInputChange(e.target.value);
        }}
      />
      <div className="result">{data.result}</div>
    </div>
  );
};

export default Display;
