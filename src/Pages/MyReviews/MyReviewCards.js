import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

const MyReviewCards = ({ review }) => {
  const [service, setService] = useState({});
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Reviewed services data
  useEffect(() => {
    fetch(`https://beauty-base-server.vercel.app/services/${review.serviceId}`)
      .then((response) => response.json())
      .then((data) => setService(data));
  }, [review.serviceId]);

  // Update review data
  const handleUpdateFeedback = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    fetch(`https://beauty-base-server.vercel.app/reviews/${review._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ feedback }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Your feedback updated successfully");
          setShowUpdateModal(false);
        }
      });
  };

  //Delete review
  const hanldleDelete = () => {
    fetch(`https://beauty-base-server.vercel.app/reviews/${review._id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Review deleted successfully");
        }
      });
  };

  return (
    <div className="flex bg-gray-50 rounded-lg shadow">
      <div className="flex-none w-24 md:w-48 relative">
        <img
          src={service.img}
          alt="service"
          className="absolute rounded-lg inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex-auto p-6">
        <h1 className="flex-auto text-2xl font-semibold ">{service.name}</h1>
        <p className="lg:text-lg my-2 text-gray-700 leading-7">
          {review.feedback}
        </p>
        <div className="flex mt-8 font-medium flex-wrap">
          <button
            onClick={() => setShowUpdateModal(true)}
            type="button"
            className="m-2 ml-0 py-2 px-6 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
          >
            Edit
          </button>
          {/* Modal for update review */}
          <UpdateModal
            showUpdateModal={showUpdateModal}
            setShowUpdateModal={setShowUpdateModal}
            handleUpdateFeedback={handleUpdateFeedback}
          />
          <button
            onClick={() => setShowDeleteModal(true)}
            type="button"
            className="m-2 ml-0 py-3 px-4 bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-rose-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Delete
          </button>
          {/* Modal for delete review */}
          <DeleteModal
            showDeleteModal={showDeleteModal}
            setShowDeleteModal={setShowDeleteModal}
            hanldleDelete={hanldleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default MyReviewCards;
