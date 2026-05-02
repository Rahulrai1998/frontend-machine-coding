import React from "react";
import StarRatingWidget from "./StarRatingWidget";

const StarRating = () => {
  return (
    <div>
      <StarRatingWidget total={6} />
      <StarRatingWidget total={4} />
      <StarRatingWidget total={3} />
      <StarRatingWidget total={10} />
    </div>
  );
};

export default StarRating;

/*
gf-descp: https://www.greatfrontend.com/questions/user-interface/star-rating?practice=practice&tab=coding

Functional Requirements
Star widget should be re-usable. 
0. The widget accepts two parameters: the maximum number of stars andd the number of currently-filled/default stars. 
1. When star is clicked, it is filled alongwith all the stars to its left.
2. Hovering over a star fills  that star and all to its left.
  a. The stars that need to be filled during hover take priority over the existing filled state.
  b. If the cursor leaves the widget and no new selecting is made, the approprite stars revert to the filled state before hovering.
*/
