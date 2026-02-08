import React, { useEffect, useState } from "react";

export const ImageCarousel = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const dataLen = data.length;

  const handlePrevious = () => {
    if (current === 0) setCurrent(dataLen - 1);
    else setCurrent((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrent((prev) => {
      if (current === dataLen - 1) return 0;
      return prev + 1;
    });
  };

  useEffect(() => {
    setInterval(() => {
      handleNext();
    }, 2000);
  }, []);

  return (
    <div className="container" role="dialog">
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
