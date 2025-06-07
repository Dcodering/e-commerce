"use client";
import React from "react";
import StarRatings from "react-star-ratings";

function Rating({ rating }) {
  return (
    <div>
      <StarRatings
        rating={rating}
        starRatedColor="#0e7490"
        numberOfStars={5}
        name="rating"
        starDimension="12px"
        starSpacing="1px"
      />
    </div>
  );
}

export default Rating;
