import React from "react";
import { ImageCarousel } from "./ImageCarousel";
import "./carouselOne.css";
import data from "./data.json";

const CarouselOne = () => {
  return (
    <div>
      <ImageCarousel data={data.slice(0, 6)} />
    </div>
  );
};

export default CarouselOne;
