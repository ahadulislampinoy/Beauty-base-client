import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Header.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-gray-50 shadow">
        <div className="justify-between px-8 lg:px-14 py-1 mx-auto md:items-center lg:grid grid-cols-2">
          <div className="flex items-center justify-between py-2">
            <Link to="/" className="flex items-center ">
              <img src={logo} alt="" className="w-1/12" />
              <h2 className="text-2xl pl-3 font-semibold text-gray-700">
                Beauty Base
              </h2>
            </Link>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div>
            <div className="hidden lg:block">
              <div className="flex md:flex-row justify-end items-end md:items-center pb-3 mt-8 md:pb-0 md:mt-0">
                <ul className="text-lg font-medium items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0">
                  <li className="text-gray-700 hover:text-pink-500">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : undefined
                      }
                      to="/home"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="text-gray-700 hover:text-pink-500">
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li className="text-gray-700 hover:text-pink-500">
                    <NavLink to="/reviews">My reviews</NavLink>
                  </li>
                  <li className="text-gray-700 hover:text-pink-500">
                    <NavLink to="/addservice">Add service</NavLink>
                  </li>
                  <li className="text-gray-700 border-b-2 border-pink-400 shadow-lg rounded px-4 py-2 hover:text-pink-500">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Transition
          show={navbar}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="block lg:hidden">
              <div className="flex justify-between items-end px-6 pb-6 mt-10">
                <ul className="flex flex-col text-lg font-medium justify-center space-y-8">
                  <li className="text-gray-700 hover:text-pink-500">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : undefined
                      }
                      to="/home"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="text-gray-700 hover:text-pink-500">
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li className="text-gray-700 hover:text-pink-500">
                    <NavLink to="/reviews">My reviews</NavLink>
                  </li>
                  <li className="text-gray-700 hover:text-pink-500">
                    <NavLink to="/addservice">Add service</NavLink>
                  </li>
                  <li className="text-gray-700 border-b-2 border-pink-400 shadow-lg rounded px-4 py-2 hover:text-pink-500">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Header;
