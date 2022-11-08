import React from "react";

const OfferForm = () => {
  return (
    <div>
      <section className="bg-gray-50 my-10 flex lg:inline-block w-full shadow">
        <div className=" p-6 sm:p-10 py-16 mx-auto flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between">
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-800 md:text-4xl ">
              Subscribe for our latest offers
            </h2>
            <p className="mt-3 text-lg text-gray-500 ">
              Get the best offer instant! don't miss it.
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2   focus:border-pink-400  focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email Address"
              />

              <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-500 rounded-md focus:ring focus:ring-pink-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-pink-600 focus:outline-none focus:bg-pink-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferForm;
