import React, { useState } from "react";
import style from "./starRating.module.css";

const StarRatingWidget = ({ total = 5 }) => {
  const [starValue, setStarValue] = useState();
  const { starContainer, filled } = style;
  const starArray = new Array(total).fill(undefined);

  const handleClick = (idx) => {
    setStarValue(idx);
  };
  return (
    <div>
      {starArray?.map((elm, idx) => (
        <span
          className={`${starContainer} , ${idx <= starValue ? filled : null}`}
          key={idx}
          onClick={() => handleClick(idx)}
        >
          &#x2605;
        </span>
      ))}

      {/* {Array.from({ length: total })?.map(() => (
        <span className={style.starContainer}>&#x2606;</span>
      ))}{" "} */}
    </div>
  );
};

export default StarRatingWidget;

//empty-star: &#x2606; filled-star: &#x2605;

/*
new Array() constructor vs Array.from()
const arr1 = new Array(5);
console.log(arr1) // empty array with no elements. Array methods don't work here.
new Array(5).fill(0) //it will define and initialize the empty array with 5 0 elements.

const arr2 = Array.from({length:5}) 
console.log(arr2) // array with 5 undefined elements. Array methods work here.
*/
