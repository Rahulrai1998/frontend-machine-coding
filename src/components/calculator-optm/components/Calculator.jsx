import React, { useReducer } from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import "../styles/Calculator.css";
import { type } from "@testing-library/user-event/dist/type";

import useCalculate from "../hooks/useCalculate";

const Calculator = () => {
  const { state, handleInputChange, handleKeyPress } = useCalculate();

  return (
    <section className="calculator" role="application" aria-label="Calculator">
      <Display data={state} handleInputChange={handleInputChange} />
      <Keypad handleKeyPress={handleKeyPress} />
    </section>
  );
};

export default Calculator;
