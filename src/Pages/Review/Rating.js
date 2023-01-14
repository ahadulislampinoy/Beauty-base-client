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
          >
            {/* <path
              d={
                isFilled
                  ? "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  : "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
              }
              style={{ fill: isFilled ? "#ffc107" : "#e4e5e9" }}
            /> */}
          </FaStar>
        );
      })}
    </div>
  );
};

export default Rating;
