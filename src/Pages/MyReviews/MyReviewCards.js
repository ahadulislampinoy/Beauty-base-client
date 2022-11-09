import React, { useEffect, useState } from "react";

const MyReviewCards = ({ review }) => {
  const [service, setService] = useState({});
  // My reviews services data
  useEffect(() => {
    fetch(`http://localhost:5000/services/${review.serviceId}`)
      .then((response) => response.json())
      .then((data) => setService(data));
  }, [review.serviceId]);

  const hanldleDelete = () => {
    fetch(`http://localhost:5000/reviews/${review._id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div class="flex bg-gray-50 rounded-lg shadow">
      <div class="flex-none w-24 md:w-48 relative">
        <img
          src={service.img}
          alt="shopping"
          class="absolute rounded-lg inset-0 w-full h-full object-cover"
        />
      </div>
      <div class="flex-auto p-6">
        <h1 class="flex-auto text-2xl font-semibold ">{service.name}</h1>
        <p class="lg:text-lg my-2 text-gray-700 leading-7">{review.feedback}</p>
        <div class="flex mt-8 font-medium flex-wrap">
          <button
            type="button"
            class="m-2 ml-0 py-2 px-3 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Edit
          </button>
          <button
            onClick={hanldleDelete}
            type="button"
            class="m-2 ml-0 py-3 px-4 bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-rose-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCards;
