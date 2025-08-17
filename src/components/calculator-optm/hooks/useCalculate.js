import { useReducer } from "react";
import { evaluate } from "mathjs";

const initialState = { input: "", result: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "EVALUATE":
      try {
        return { ...state, result: evaluate(state.input) };
      } catch {
        return { ...state, result: "Error" };
      }
    case "CLEAR":
      return initialState;
    case "CONCAT":
      return { ...state, input: state.input + action.payload };
    case "INPUT_CHANGE":
      return { ...state, input: action.payload };
    default:
      return state;
  }
};

export default function useCalculate() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleKeyPress = (key) => {
    if (key === "=") {
      dispatch({ type: "EVALUATE" });
    } else if (key === "C") {
      dispatch({
        type: "CLEAR",
      });
    } else {
      dispatch({
        type: "CONCAT",
        payload: key,
      });
    }
  };

  const handleInputChange = (value) => {
    dispatch({ type: "INPUT_CHANGE", payload: value });
  };

  return { state, handleInputChange, handleKeyPress };
}
