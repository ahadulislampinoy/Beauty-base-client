import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const { userLogIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login successful");
        form.reset();
        setError("");
        // Jwt
        const userEmail = {
          email: user.email,
        };
        fetch(`http://localhost:5000/jwt`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userEmail),
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("Beauty-base", data.token);
            navigate(from, { replace: true });
          });
        // Jwt end
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setError("");
        toast.success("Login successful");
        // Jwt
        const userEmail = {
          email: user.email,
        };
        fetch(`http://localhost:5000/jwt`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userEmail),
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("Beauty-base", data.token);
            navigate(from, { replace: true });
          });
        // Jwt end
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <section className="bg-white">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize">
              Login
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  type="email"
                  required
                  name="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  focus:border-pink-400 focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>

                <input
                  type="password"
                  required
                  name="password"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md  focus:border-pink-400 focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </div>
              <p className="text-base mt-1 text-rose-600">
                {error ? error : ""}
              </p>
              <button
                className="w-full px-6 py-3 mt-6 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform 
              bg-pink-600 rounded-md hover:bg-pink-500 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-50"
              >
                Login
              </button>
            </form>

            <div className="mt-3">
              <div className="flex items-center w-full my-4">
                <hr className="w-full text-gray-600" />
                <p className="px-3 text-gray-600">OR</p>
                <hr className="w-full text-gray-600" />
              </div>

              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg  hover:bg-gray-50 w-full"
              >
                <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>

                <span className="mx-2">Login with Google</span>
              </button>

              <div className="mt-6 text-center ">
                <Link
                  to="/signup"
                  className="text-base text-pink-500 hover:underline"
                >
                  Don’t have an account yet? Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
