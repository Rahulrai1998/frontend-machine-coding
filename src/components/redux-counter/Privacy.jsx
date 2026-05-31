import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { privacyActions } from "../../store/privacySlice";


const Privacy = () => {
  const status = useSelector((store) => store.privacy.showCounter);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(privacyActions.toggleShow());
        // dispatch({ type: "SHOW-HIDE" })
      }}
    >
      {status ? "Hide" : "Show"}
    </button>
  );
};

export default Privacy;
