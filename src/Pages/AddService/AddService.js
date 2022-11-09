import React from "react";
import toast from "react-hot-toast";
import { TbArrowRotaryLastRight } from "react-icons/tb";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  useTitle("Add service");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceDetails = {
      name: form.name.value,
      img: form.photo.value,
      price: form.price.value,
      description: form.description.value,
    };

    // Adding new service in database
    fetch(`https://beauty-base-server.vercel.app/services`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(serviceDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          return toast.success("Service added successfully");
        }
      });
  };

  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <h1 className="max-w-xl mx-auto text-center lg:text-start text-4xl sm:text-5xl lg:text-6xl drop-shadow-lg font-bold text-pink-500">
                A new service is on the way
                <TbArrowRotaryLastRight className="inline-block" />
              </h1>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg shadow-pink-200 lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Service Name
                  </label>
                  <input
                    className="w-full rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-400 focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40 p-3 sm:sm:text-lg"
                    placeholder="Service Name"
                    type="text"
                    required
                    name="name"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="img">
                      Service Image Url
                    </label>
                    <input
                      className="w-full rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-400 focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40 p-3 sm:text-lg"
                      placeholder="Service Image Url"
                      type="text"
                      required
                      name="photo"
                      id="img"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="price">
                      Service Price
                    </label>
                    <input
                      className="w-full rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-400 focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40 p-3 sm:text-lg"
                      placeholder="Service Price"
                      type="text"
                      required
                      name="price"
                      id="price"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="description">
                    Service Description
                  </label>
                  <textarea
                    className="w-full rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-400 focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40 p-3 sm:text-lg"
                    placeholder="Service Description"
                    rows="6"
                    name="description"
                    id="description"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="px-4 py-3 inline-block mt-2 font-semibold border-2 border-pink-300 rounded-lg bg-pink-100  hover:bg-pink-200 transition text-pink-700"
                  >
                    Add Service
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddService;
