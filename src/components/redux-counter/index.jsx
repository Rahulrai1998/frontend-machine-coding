import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Privacy from "./Privacy";
import { counterActions } from "../../store";

const ReduxCounter = () => {
  const inputRef = useRef(0);
  // const counter = useSelector((store) => store.counter); REDUX
  const counter = useSelector((store) => store.counter.count);
  const status = useSelector((store) => store.showCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter</h3>
      <input type="number" placeholder="enter..." ref={inputRef} /> {counter}
      <button
        onClick={() =>
          // dispatch({ type: "ADD", payload: { data: inputRef.current.value } }) REDUX
          dispatch(
            counterActions.add({
              num: Number(inputRef.current.value),
            }),
          )
        }
      >
        Add
      </button>
      <h4>{status ? counter : ""}</h4>
      <Privacy />
      <button
        onClick={() => {
          dispatch(counterActions.increment());
          console.log(counterActions.increment());
        }}
      >
        Increase
      </button>
      <button onClick={() => dispatch(counterActions.decrement())}>
        Decrease
      </button>
      {/*REDUX*/}
      {/* <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button> */}
    </div>
  );
};

export default ReduxCounter;
