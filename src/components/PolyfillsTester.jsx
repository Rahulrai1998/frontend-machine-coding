import React from "react";
import "../polyfills/polyfills";

const PolyfillsTester = () => {
  const arr = ["Raj", "Alok", "Kalaam", "Joy"];
  const n = [1, 2, 3];
  return (
    <div>
      <div>{arr?.myMap((elm) => elm)}</div>
      <div>{arr?.myFilter((elm) => elm === "Raj")}</div>
      {n?.myReduce((accum, elm, i, arr) => accum + elm, 0)}
    </div>
  );
};

export default PolyfillsTester;
