import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ setRating, rating }) => {
  const handleClick = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className="flex mb-5">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= rating;
        return (
          <FaStar
            key={star}
            onClick={() => handleClick(star)}
            className={`${
              isFilled ? "text-pink-500/75" : "text-gray-300"
            } w-7 h-7 cursor-pointer`}
          ></FaStar>
        );
      })}
    </div>
  );
};

export default Rating;
