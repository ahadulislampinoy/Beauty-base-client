import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Review = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    console.log(feedback);
  };

  return (
    <div>
      <section className="p-6 sm:p-10 overflow-hidden">
        <div className="flex flex-col items-start pb-10 md:w-1/2">
          <h1 className="text-4xl font-semibold mt-6 text-gray-700">
            {user?.email ? (
              "Your opinion matters!"
            ) : (
              <Link to="/login" className="underline text-pink-500">
                Login first to give feedback
              </Link>
            )}
          </h1>
          <p className="mt-3 mb-6 font-semibold text-gray-700">
            {user?.email ? "How was your experience?" : ""}
          </p>
          <form onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="feedback">
              Feedback
            </label>
            <textarea
              className="w-full rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-400 focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40 p-3 text-base"
              placeholder="Feedback"
              name="feedback"
              required
              cols="45"
              rows="8"
              style={{ resize: "none" }}
              disabled={user?.email ? false : true}
              id="message"
            ></textarea>
            <button
              className="px-4 py-3 inline-block mb-8 mt-2 font-semibold border-2 border-pink-300 rounded-lg bg-pink-100  hover:bg-pink-200 transition text-pink-700 disabled:hover:bg-pink-100"
              disabled={user?.email ? false : true}
            >
              Leave feedback
            </button>
          </form>
        </div>
        <a
          className="inline-block mb-14 text-3xl font-heading font-medium underline hover:text-darkBlueGray-700"
          href="/"
        >
          1,218 reviews
        </a>
        {/* <div className="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
          <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
            <div className="flex flex-wrap items-center">
              <img
                className="mr-6"
                src="uinel-assets/images/ecommerce-reviews/user.png"
                alt=""
              />
              <h4 className="w-full md:w-auto text-xl font-heading font-medium">
                Faustina H. Fawn
              </h4>
              <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
              <span className="mr-4 text-xl font-heading font-medium">5.0</span>
              <div className="inline-flex">
                <a className="inline-block mr-1" href="#">
                  <svg
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                      fill="#FFCB00"
                    ></path>
                  </svg>
                </a>
                <a className="inline-block mr-1" href="#">
                  <svg
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                      fill="#FFCB00"
                    ></path>
                  </svg>
                </a>
                <a className="inline-block mr-1" href="#">
                  <svg
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                      fill="#FFCB00"
                    ></path>
                  </svg>
                </a>
                <a className="inline-block mr-1" href="#">
                  <svg
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                      fill="#FFCB00"
                    ></path>
                  </svg>
                </a>
                <a className="inline-block text-gray-200" href="#">
                  <svg
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                      fill="#FFCB00"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3 mb-6 md:mb-0">
                <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
                  I haretra neque non mi aliquam, finibus hart bibendum
                  molestie. Vestibulum suscipit sagittis dignissim mauris.
                </p>
                <div className="-mb-2">
                  <div className="inline-flex w-full md:w-auto md:mr-2 mb-2">
                    <div className="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                      <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                        <svg
                          width="11"
                          height="11"
                          viewbox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-green-500 font-heading font-medium">
                        battery life
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex w-full md:w-auto md:mr-2 mb-2">
                    <div className="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                      <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                        <svg
                          width="11"
                          height="11"
                          viewbox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-green-500 font-heading font-medium">
                        functionality
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex w-full md:w-auto mb-2">
                    <div className="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                      <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                        <svg
                          width="11"
                          height="11"
                          viewbox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-green-500 font-heading font-medium">
                        ease of use
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-right">
                <p className="mb-8 text-sm text-gray-300">Added 2 months ago</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
          <div>
            <img
              alt="Woman"
              src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
            />

            <blockquote className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
              <p className="text-lg font-bold text-gray-700">Sophie Lennon</p>
              <p className="mt-1 text-xs font-medium text-gray-500">
                Digital Marketing at Studio
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>

              <div className="mt-8 flex justify-center gap-0.5 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
