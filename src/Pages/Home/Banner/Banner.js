import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/banner.jpeg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <section
        style={{
          background: `url(${banner})`,
        }}
        className="bg-custom h-screen"
      >
        <div className="bg-black/25 flex items-center justify-center sm:justify-start p-8 sm:px-16 sm:py-28 lg:py-32 h-screen">
          <div className="max-w-lg text-center sm:text-left">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl capitalize">
              Do beauty services your way at beauty base
            </h2>

            <p className="hidden max-w-md text-white/90 sm:mt-6 sm:block md:text-lg md:leading-relaxed">
              Discover new looks, tips & tricks and redeem the cost of your
              service on new products to love...
            </p>

            <div className="mt-4 sm:mt-8">
              <Link
                to="/services"
                className="inline-flex items-center rounded-full bg-pink-600 px-6 py-3 text-white shadow-lg transition hover:bg-pink-500 focus:outline-none focus:ring"
              >
                <span className="text-sm font-medium"> Book Now </span>

                <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
