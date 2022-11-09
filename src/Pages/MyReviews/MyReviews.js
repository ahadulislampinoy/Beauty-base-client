import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewCards from "./MyReviewCards";

const MyReviews = () => {
  useTitle("My reviews");
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  // Get my reviews
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div>
      <section className="p-6 sm:p-10 overflow-hidden">
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          {reviews.map((review) => (
            <MyReviewCards key={review._id} review={review} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyReviews;
