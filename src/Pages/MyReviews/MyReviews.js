import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";

const MyReviews = () => {
  useTitle("My reviews");
  const [reviews, setReviews] = useState([]);

  return (
    <div>
      {/* <section className="p-6 sm:p-10 overflow-hidden">
        <p className="mt-8 text-3xl font-heading font-medium drop-shadow-xl shadow-pink-500">
          {"reviews.length"} reviews
        </p>
        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <div class="px-12 py-8 transition-colors duration-300 transform border  rounded-xl">
              <div class="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                  src={review?.userImg ? review.userImg : userDefaultImg}
                  alt=""
                />
                <div class="mt-4 sm:mx-2 sm:mt-0 flex items-center">
                  <h1 class="text-xl font-semibold text-gray-700 capitalize">
                    {review?.username}
                  </h1>
                </div>
              </div>

              <p class="mt-4 text-gray-500 capitalize leading-7">
                {review?.feedback}
              </p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default MyReviews;
