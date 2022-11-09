import React, { useEffect, useState } from "react";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services?limit=3`)
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6 sm:p-10 text-start">
        {services.map((service) => (
          <div
            key={service._id}
            className="rounded-xl bg-white p-3 shadow-lg shadow-pink-100"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={service.img}
                alt="service-img"
                className="h-96 w-full"
              />
            </div>
            <div className="mt-1 p-2">
              <h2 className="text-xl text-gray-800">{service.name}</h2>
              <p className="mt-2 text-base text-gray-500">
                {service.description.slice(0, 100) + "..."}
              </p>

              <div className="mt-5 flex items-end justify-between">
                <p>
                  <span className="text-lg font-bold text-pink-500">
                    ${service.price}
                  </span>
                </p>

                <div className="group inline-flex rounded-xl bg-pink-100 p-2 hover:bg-pink-200">
                  <Link
                    to={`/services/${service._id}`}
                    className="px-1 font-semibold text-pink-500"
                  >
                    View details
                    <MdArrowRight className="inline-block" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/services"
        className="px-8 py-3 inline-block mb-8 mt-4 font-semibold border-2 border-pink-300 rounded-lg bg-pink-100 hover:bg-pink-200 transition text-pink-700"
      >
        Show all
      </Link>
    </div>
  );
};

export default Services;
