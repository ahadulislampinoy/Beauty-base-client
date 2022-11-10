import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewCards from "./MyReviewCards";

const MyReviews = () => {
  useTitle("My reviews");
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [reviewDependency, setReviewDependency] = useState(true);

  // Get my reviews
  useEffect(() => {
    fetch(
      `https://beauty-base-server.vercel.app/myreviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("Beauty-base")}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, reviewDependency]);

  return (
    <div>
      <section className="p-6 sm:p-10 overflow-hidden">
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          {reviews.length === 0 ? (
            <>
              <div className="flex h-screen w-screen justify-center items-center bg-white">
                <p className="capitalize font-medium tracking-widest text-gray-800 text-3xl p-4">
                  No reviews were added
                </p>
              </div>
            </>
          ) : (
            <>
              {reviews.map((review) => (
                <MyReviewCards
                  key={review._id}
                  review={review}
                  reviewDependency={reviewDependency}
                  setReviewDependency={setReviewDependency}
                />
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyReviews;
