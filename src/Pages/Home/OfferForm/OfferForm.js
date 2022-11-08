import React from "react";

const OfferForm = () => {
  return (
    <div>
      <section class="bg-gray-50">
        <div class="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-semibold tracking-tight text-gray-700 xl:text-4xl ">
            Subscribe for latest updates and offers!
          </h2>

          <div class="mt-8 lg:mt-0">
            <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
              <input
                id="email"
                type="text"
                class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2   focus:border-pink-400  focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email Address"
              />

              <button class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-600 rounded-md focus:ring focus:ring-pink-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-pink-600 focus:outline-none focus:bg-pink-600">
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
