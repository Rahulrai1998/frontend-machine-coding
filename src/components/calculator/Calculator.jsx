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
    "C",
  ];

  const handleClick = (e, key) => {
    switch (key) {
      case "=":
        try {
          setResult(eval(input));
        } catch (error) {
          setResult(error);
          console.log(error);
        }
        break;
      case "C":
        setResult("");
        setInput("");
        break;
      default:
        setInput((inp) => inp + key);
    }
    if (key === "=") {
    }
  };

  return (
    <div
      style={{ width: "50%", margin: "auto" }}
      role="application"
      aria-label="Calculator"
    >
      <input
        aria-live="polite"
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
          <button
            type="button"
            key={i}
            onClick={(e) => handleClick(e, key)}
            aria-label={`${key} Button`}
          >
            {key}
          </button>
        ))}
      </div>
      <div>{result}</div>
    </div>
  );
};

export default Calculator;

/*
OPTIMIZATIONS
- avoid using eval()
    - it is less secure, prone to XSS attacks as it executes arbitrary JS code.
    - less performant and bad for debugging
    - use any Math parser like, mathsjs, or JSON.parse()
- use useReducer() instead useState(), for input and result
    - more scalable and testable logic
- memoise the static keypad data to avoid un-necessary re-renders
    - performance boosts for large UIs or frequent updates/parent re-renderings.
    What happend if not use useMemo() for the keypad data ?
        - without useMemo(), the keypad array is built every time the parent component re-renders.
        - a new array reference is created each time
        - Any child component relying on keys may re-render unnecesaarily.
- Accessibilty enhancements.
    - add aria-pressed to buttons. 
    - add keyboard navigation with onKeyDown and tabindex       

- use auto-fit and minmax grid for fluid resizing off keys
- split the code into smaller components like, Display, Keypad, Button
- Add Unit Tests
*/
