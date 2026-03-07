import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timer;
    if (value) {
      timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
    }
    //the cleanup function will run before the new effect executed due to dependencies change.
    //The cleanup function runs in two scenarios:
    //1. when dependencies change and new effect executes.
    //2. when component unmounts.
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
