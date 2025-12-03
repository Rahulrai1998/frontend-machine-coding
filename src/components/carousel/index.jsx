import React from "react";

import One from "../../assets/1.jpg";
import Two from "../../assets/2.jpg";
import Three from "../../assets/3.jpg";
import Four from "../../assets/4.jpg";
import Five from "../../assets/5.jpg";
import Carousel from "./Carousel";

const CarouselComp = () => {
  return (
    <div className="app">
      <Carousel>
        <img src={One} id={`image-0`} alt="Image 1" />
        <img src={Two} id={`image-1`} alt="Image 2" />
        <img src={Three} id={`image-2`} alt="Image 3" />
        <img src={Four} id={`image-3`} alt="Image 4" />
        <img src={Five} id={`image-4`} alt="Image 5" />
        {/* <img src={One} /> */}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
