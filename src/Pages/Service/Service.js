import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Review from "../Review/Review";
import "./Sevice.css";

const Service = () => {
  const service = useLoaderData();
  const { _id, name, img, price, description } = service;
  useTitle(name);

  return (
    <div>
      <div className="p-6 sm:p-10 sm:pb-16">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-6/12 lg:p-0 px-2 py-7 text-gray-800">
            <h1 className="text-5xl lg:text-6xl my-6 drop-shadow-md font-bold text-pink-500">
              ${price}
            </h1>
            <h1 className="text-4xl font-bold leading-tight mb-5 capitalize">
              {name}
            </h1>
            <p className="text-lg sm:text-xl sm:leading-8">{description}</p>
          </div>
          <div className="lg:w-2/6 order-2 flex justify-center">
            <img src={img} alt="" className="rounded service-img" />
          </div>
        </div>
      </div>
      <hr className="bg-gray-700 w-full mx-auto h-[1px] lg:w-2/5 hidden lg:block" />
      <Review id={_id} />
    </div>
  );
};

export default Service;
