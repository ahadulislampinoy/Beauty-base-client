import React from "react";

const DeleteModal = ({
  showDeleteModal,
  setShowDeleteModal,
  hanldleDelete,
}) => {
  return (
    <>
      {showDeleteModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowDeleteModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="mx-auto sm:m-0 flex items-center justify-center flex-none w-14 h-14 sm:mr-4 bg-rose-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7 text-rose-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 text-center">
                    <h4 className="text-xl sm:text-2xl font-medium text-gray-800">
                      Are you sure you want to delete?
                    </h4>
                    <div className="items-center gap-2 mt-5 sm:flex">
                      <button
                        className="m-2 p-2.5 flex-1 text-white bg-rose-600 rounded-md outline-none ring-offset-2 ring-rose-600 focus:ring-2"
                        onClick={hanldleDelete}
                      >
                        Delete
                      </button>
                      <button
                        className="m-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-gray-600 focus:ring-2"
                        onClick={() => setShowDeleteModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default DeleteModal;
