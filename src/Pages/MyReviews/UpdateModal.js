import React from "react";

const UpdateModal = ({
  showUpdateModal,
  setShowUpdateModal,
  handleUpdateFeedback,
}) => {
  return (
    <>
      {showUpdateModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/40">
            <div className="relative w-full max-w-md px-4 h-auto">
              <div className="bg-gray-50 rounded-lg shadow relative">
                <div className="flex justify-end p-2">
                  <button
                    onClick={() => setShowUpdateModal(false)}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    data-modal-toggle="authentication-modal"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <form
                  className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6"
                  onSubmit={handleUpdateFeedback}
                >
                  <h3 className="text-xl font-medium text-gray-900">
                    Edit review
                  </h3>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                    ></label>
                    <textarea
                      className="w-full rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-400 focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40 p-3 text-base"
                      placeholder="Feedback"
                      name="feedback"
                      required
                      cols="45"
                      rows="8"
                      style={{ resize: "none" }}
                      id="message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-5 py-3 "
                  >
                    Update review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default UpdateModal;
