import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce.js";

const DebouncedValue = () => {
  const [query, setQuery] = useState("");
  //here the debounced value will be received after a delay.
  const debouncedValue = useDebounce(query, 2000);
  console.log("Searching....", debouncedValue);

  useEffect(() => {
    if (debouncedValue) {
      console.log("Searching....", debouncedValue);
    }
  }, [debouncedValue]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={query}
        onChange={handleChange}
      />
      {debouncedValue}
    </div>
  );
};

export default DebouncedValue;
