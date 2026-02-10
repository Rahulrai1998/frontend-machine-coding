import React from "react";
import { ImageCarousel } from "./ImageCarousel";
import "./carouselOne.css";
import data from "./data.json";

const CarouselOne = () => {
  return <ImageCarousel data={data.slice(0, 6)} />;
};

export default CarouselOne;
