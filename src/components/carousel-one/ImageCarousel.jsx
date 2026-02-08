import React from "react";
import data from "./data.json";

export const ImageCarousel = () => {
  return (
    <div className="container">
      <button className="left-arrow-btn arrow-btn">{"<"}</button>
      <img src={data[0]?.download_url} alt="image one" />
      <button className="right-arrow-btn arrow-btn">{">"}</button>
    </div>
  );
};

/*
images API: https://picsum.photos/v2/list
*/
