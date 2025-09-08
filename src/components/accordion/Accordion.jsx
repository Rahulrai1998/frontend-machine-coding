import React from "react";
import { data } from "./data";

const Accordion = () => {
  return (
    <div className="accord-parent">
      {data?.map((elm) => (
        <div className="card" key={elm.id}>
          {" "}
          {elm?.title}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
