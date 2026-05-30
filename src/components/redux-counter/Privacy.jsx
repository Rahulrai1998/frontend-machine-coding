import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Privacy = () => {
  const status = useSelector((store) => store.showCounter);
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch({ type: "SHOW-HIDE" })}>
      {status ? "Hide" : "Show"}
    </button>
  );
};

export default Privacy;
