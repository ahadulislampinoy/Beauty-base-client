import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="text-gray-800">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-pink-500">
                <span className="text-lg font-bold tracking-wider uppercase text-gray-600">
                  Question asked in interviews
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-pink-500">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Difference between SQL and NoSQL
                  </h3>
                  <p className="mt-3 leading-7">
                    There are many differences between SQL and NoSQL, SQL
                    databases are relational whereas NoSQL databases are
                    non-relational. SQL databases have fixed predefined schema
                    but NSQL databases have dynamic schema for unstructured
                    data. Also, SQL databases are table-based, while NoSQL
                    databases are document, key-value, and graph based. On the
                    performance section, SQL requires specialized DB hardware
                    for better performance while NoSQL uses commodity hardware.
                    SQL database examples are Oracle, MySQL, etc and SQL
                    database are MongoDB and CouchDB, etc
                  </p>
                </div>
              </div>
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-pink-500">
                  <h3 className="text-xl font-semibold tracking-wide">
                    What is JWT, and how does it work?
                  </h3>
                  <p className="mt-3">...</p>
                </div>
              </div>
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-pink-500">
                  <h3 className="text-xl font-semibold tracking-wide">
                    What is the difference between javascript and NodeJS?
                  </h3>
                  <p className="mt-3">...</p>
                </div>
              </div>
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-pink-500">
                  <h3 className="text-xl font-semibold tracking-wide">
                    How does NodeJS handle multiple requests at the same time?
                  </h3>
                  <p className="mt-3">...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
