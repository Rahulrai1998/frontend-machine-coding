import React from "react";
import "../polyfills/polyfills";

const PolyfillsTester = () => {
  const arr = ["Raj", "Alok", "Kalaam", "Joy"];
  return (
    <div>
      <div>{arr?.myMap((elm) => elm)}</div>
      {arr?.myFilter((elm) => elm === "Raj")}
    </div>
  );
};

export default PolyfillsTester;
