import React, { useEffect, useRef, useState } from "react";

export const ImageCarousel = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const [showAnimation, setShowAnimation] = useState({
    "image-show": "right-image-show",
    "image-hide": "right-image-hide",
  });

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
    setShowAnimation({
      "image-show": "left-image-show",
      "image-hide": "left-image-hide",
    });
  };

  const handleNext = () => {
    setCurrent((prev) => {
      if (prev === dataLen - 1) {
        return 0;
      }
      return prev + 1;
    });
    setShowAnimation({
      "image-show": "right-image-show",
      "image-hide": "right-image-hide",
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
      <button className="left-arrow-btn arrow-btn" onClick={handlePrevious}>
        {"<"}
      </button>

      {/* we can this single image approach if don't want the animation*/}
      {/* <img
        src={data[current].download_url}
        alt="image one"
        className={`carousel-one-img`}
      /> */}
      <div className="image-container">
        {data?.map((link, idx) => (
          <img
            src={link.download_url}
            alt="image one"
            className={`carousel-one-img ${idx !== current ? showAnimation["image-hide"] : showAnimation["image-show"]}`}
          />
        ))}
      </div>
      
      <section className="img-stepper">
        {data?.map((dot, index) => (
          <button
            onClick={() => {
              setCurrent(index);
            }}
            key={dot.id}
            className={`stepper-icon ${index === current ? "current-step" : null}`}
          ></button>
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
