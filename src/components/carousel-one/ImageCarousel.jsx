import React, { useEffect, useRef, useState } from "react";

export const ImageCarousel = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const dataLen = data.length;

  // let interval; this variable will get re-defined on every re-render and won't persist/hold its previous value

  //a ref variable won't get re-defined on every rerender.
  //it persists the value across the re-renders
  //hence, on every re-render we get our expected value.
  let interval = useRef(null); //a ref value holds an object

  const handlePrevious = () => {
    if (current === 0) setCurrent(dataLen - 1);
    //this we react make sure that we get updated value always.
    else setCurrent((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrent((prev) => {
      if (prev === dataLen - 1) return 0;
      return prev + 1;
    });
  };

  useEffect(() => {
    //ref.current holds that mutable value that we want to persist across re-renders. Some times it holds DOM elements.
    interval.current = setInterval(() => {
      handleNext();
    }, 2000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div
      className="container"
      role="dialog"
      onMouseEnter={() => clearInterval(interval.current)}
      onMouseLeave={() => {
        interval.current = setInterval(() => {
          handleNext();
        }, 2000);
      }}
    >
      {current}
      <button className="left-arrow-btn arrow-btn" onClick={handlePrevious}>
        {"<"}
      </button>
      <img src={data[current]?.download_url} alt="image one" />

      <section className="img-stepper">
        {data?.map((dot) => (
          <button key={dot.id} className="stepper-icon"></button>
        ))}
      </section>

      <button className="right-arrow-btn arrow-btn" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
};

/*
images API: https://picsum.photos/v2/list
*/
