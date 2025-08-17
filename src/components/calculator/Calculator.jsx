import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  const keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    "=",
  ];

  const handleClick = (e, key) => {
    setInput((inp) => inp + key);
    if (key === "=") {
      setResult(eval(input));
      setInput("");
    }
  };

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <input
        type="text"
        value={input}
        placeholder="Enter..."
        onChange={(e) => setInput(e.target.value)}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          width: "40%",
          margin: "auto",
        }}
      >
        {keys.map((key, i) => (
          <button type="button" key={i} onClick={(e) => handleClick(e, key)}>
            {key}
          </button>
        ))}
      </div>
      <div>{result}</div>
    </div>
  );
};

export default Calculator;
