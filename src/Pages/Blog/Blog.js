import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <section className="text-gray-800">
        <div className="container max-w-5xl py-12 mx-auto">
          <div className="grid gap-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center px-2 sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-pink-500">
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
                  <p className="mt-3 leading-7">
                    JSON Web Token is an open industry standard used to share
                    information between client and server. JWT is mostly used to
                    identify an authenticated user. They are issued by an
                    authentication server and are consumed by the client-server
                    to secure its APIs. They contain JSON objects which have the
                    information that needs to be shared. Each JWT is also signed
                    using cryptography (hashing) to ensure that the JSON
                    contents cannot be altered by the client or a malicious
                    party
                  </p>
                </div>
              </div>
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-pink-500">
                  <h3 className="text-xl font-semibold tracking-wide">
                    What is the difference between javascript and NodeJS?
                  </h3>
                  <p className="mt-3 leading-7">
                    Javascript is a programming language that is used for
                    writing scripts on websites. on the other hand, NodeJS is a
                    Javascript runtime environment, NodeJS allows Javascript
                    code to run outside the browser. JavaScript is mainly used
                    to create front end applications or develop client-side
                    whereas NodeJS is used on the back end development which is
                    server-side development. JavaScript can manipulate DOM
                    whereas NodeJS doesn’t have the capability of manipulating
                    DOM. Javascript can run in any browser engine as Firefox’s
                    spider monkey, v8 engine of google chrome, whereas NodeJS
                    runs only on v8 engine of google chrome.
                  </p>
                </div>
              </div>
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-pink-500">
                  <h3 className="text-xl font-semibold tracking-wide">
                    How does NodeJS handle multiple requests at the same time?
                  </h3>
                  <p className="mt-3 leading-7">
                    NodeJS application is single-threaded actually NodeJS
                    EventLoop is single threaded. Not the entire server
                    architecture for NodeJS is single threaded. NodeJS EventLoop
                    which is an infinite loop that receives requests and
                    processes them. This EventLoop is the listener for the
                    EventQueue. When a new request comes in, NodeJS checks if it
                    requires any blocking IO operations, if not, the EventLoop
                    processes it and sends the response back to the client
                    directly.
                  </p>
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
