import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStoreContext } from "../contextApi/ContextApi";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const location = useLocation();

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    setNavbarOpen(false);
    navigate("/login");
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-600 font-medium";
  };

  const renderActionButton = () => {
    if (token) {
      return (
        <button
          onClick={onLogOutHandler}
          className="w-full text-center px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full border-none cursor-pointer transition-colors duration-200"
        >
          Log Out
        </button>
      );
    } else {
      if (location.pathname === "/register") {
        return (
          <Link
            to="/login"
            onClick={() => setNavbarOpen(false)}
            className="w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-200 no-underline"
          >
            Log In
          </Link>
        );
      } else if (location.pathname === "/login") {
        return (
          <Link
            to="/register"
            onClick={() => setNavbarOpen(false)}
            className="w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-200 no-underline"
          >
            Sign Up
          </Link>
        );
      } else {
        return (
          <Link
            to="/register"
            onClick={() => setNavbarOpen(false)}
            className="w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-200 no-underline"
          >
            Sign Up
          </Link>
        );
      }
    }
  };

  return (
    <div className=" sticky top-0 z-50 p-5 sm:px-6 ">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-3 px-6 bg-white rounded-full shadow-md font-sans relative">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 focus:outline-none"
        >
          <img
            src="/images/linkforge-logo.png"
            alt="LinkForge Logo"
            className="h-8 w-8"
          />
          <div className="text-2xl font-bold text-gray-900 no-underline">
            LinkForge
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8 m-0 p-0">
            <li>
              <Link
                to="/"
                className={`${getLinkClass(
                  "/"
                )} hover:text-gray-900 transition-colors`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${getLinkClass(
                  "/about"
                )} hover:text-gray-900 transition-colors`}
              >
                About
              </Link>
            </li>
            {token && (
              <li>
                <Link
                  to="/dashboard"
                  className={`${getLinkClass(
                    "/dashboard"
                  )} hover:text-gray-900 transition-colors`}
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          <div className="flex items-center space-x-6">
            {renderActionButton()}
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setNavbarOpen(!navbarOpen)}>
            {navbarOpen ? (
              <RxCross2 className="text-3xl text-gray-800" />
            ) : (
              <IoIosMenu className="text-3xl text-gray-800" />
            )}
          </button>
        </div>
      </nav>

      {navbarOpen && (
        <div className="md:hidden mt-3 p-5 bg-white rounded-2xl shadow-lg animate-fade-in-down">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                to="/"
                className={`${getLinkClass("/")} text-lg`}
                onClick={() => setNavbarOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${getLinkClass("/about")} text-lg`}
                onClick={() => setNavbarOpen(false)}
              >
                About
              </Link>
            </li>
            {token && (
              <li>
                <Link
                  to="/dashboard"
                  className={`${getLinkClass("/dashboard")} text-lg`}
                  onClick={() => setNavbarOpen(false)}
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col items-center space-y-4">
            {renderActionButton()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
