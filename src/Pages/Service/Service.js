import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Sevice.css";

const Service = () => {
  const service = useLoaderData();
  const { name, img, price, description } = service;

  return (
    <div>
      <div className="p-6 sm:p-10 py-10">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-6/12 lg:p-0 px-2 py-7 text-gray-800">
            <h1 className="text-5xl lg:text-6xl my-6 drop-shadow-md font-bold text-pink-500">
              ${price}
            </h1>
            <h1 className="text-4xl font-bold leading-tight mb-5 capitalize">
              {name}
            </h1>
            <p className="text-xl leading-8">{description}</p>
          </div>
          <div className="lg:w-2/6 order-2">
            <img src={img} alt="" className="rounded service-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
