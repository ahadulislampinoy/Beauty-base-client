import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import reviewrDefaultImg from "../../assets/reviewerDefaultImg.jpg";
import { AuthContext } from "../../Contexts/AuthProvider";

const Review = ({ id }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [reviewDependency, setReviewDependency] = useState(true);

  const handleFeedback = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    const review = {
      email: user?.email,
      username: user?.displayName,
      userImg: user?.photoURL,
      serviceId: id,

      date: new Date(),
      feedback,
    };
    // Adding data to database
    axios
      .post(`https://beauty-base-server.vercel.app/myreviews`, review)
      .then((res) => {
        if (res.data.insertedId) {
          e.target.reset();
          setReviewDependency(!reviewDependency);
          return toast.success("Thanks your for feedback");
        }
      });
  };
  useEffect(() => {
    axios
      .get(
        `https://beauty-base-server.vercel.app/serviceReviews?serviceId=${id}`
      )
      .then((res) => setReviews(res.data));
  }, [id, reviewDependency]);

  return (
    <div>
      <section className="p-6 sm:p-10 overflow-hidden">
        <div className="flex flex-col items-start pb-10 md:w-1/2">
          <h1 className="text-4xl font-semibold mt-6 text-gray-700">
            {user?.email ? (
              "Your opinion matters!"
            ) : (
              <Link to="/login" className="underline text-pink-500">
                Please login to add a review
              </Link>
            )}
          </h1>
          <p className="mt-3 mb-6 font-semibold text-gray-700">
            {user?.email ? "How was your experience?" : ""}
          </p>
          <form
            onSubmit={handleFeedback}
            onClick={() =>
              user?.email ? "" : toast.error("To add review, login required")
            }
          >
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
        <p className="mt-8 text-3xl font-heading font-medium drop-shadow-xl shadow-pink-500">
          {reviews.length} reviews
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg shadow-pink-200"
            >
              <div className="flex justify-center -mt-16 md:justify-end">
                <img
                  className="object-cover w-20 h-20 border-2 border-pink-300 rounded-full "
                  alt="Reviewer avatar"
                  src={review.userImg ? review.userImg : reviewrDefaultImg}
                />
              </div>

              <h2 className="mt-2 text-2xl font-semibold text-gray-800  md:mt-0">
                {review.username}
              </h2>

              <p className="mt-2 text-gray-600">{review.feedback}</p>

              <div className="flex justify-end mt-4"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Review;
