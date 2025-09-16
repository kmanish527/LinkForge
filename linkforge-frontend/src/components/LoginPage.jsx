import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import toast from "react-hot-toast";
import { useStoreContext } from "../contextApi/ContextApi";
import { motion } from "framer-motion";

const DashboardPreview = () => (
  <div className="w-full max-w-md p-6 space-y-6">
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
    >
      <p className="text-sm text-indigo-200">Total Links Created</p>
      <p className="text-3xl font-bold text-white">189,374</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
    >
      <p className="text-sm text-indigo-200">Total Clicks This Month</p>
      <p className="text-3xl font-bold text-white">1.2 Million</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
    >
      <p className="text-sm text-indigo-200">Top Performing Link</p>
      <p className="text-xl font-semibold text-white truncate">
        linklytics.io/q4-promo
      </p>
    </motion.div>
  </div>
);

const LoginPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const { setToken } = useStoreContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "", password: "" },
    mode: "onTouched",
  });

  const loginHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post("/api/auth/public/login", data);
      setToken(response.token);
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
      toast.success("Login Successful!");
      reset();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2 ">
      <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-2 mb-6 focus:outline-none"
            >
              <img
                src="/images/linkforge-logo.png"
                alt="LinkForge Logo"
                className="h-8 w-8"
              />
              <h2 className="text-2xl font-bold text-gray-900">LinkForge</h2>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="mt-2 text-gray-500">
              Enter your credentials to access your dashboard.
            </p>
          </motion.div>

          <form
            onSubmit={handleSubmit(loginHandler)}
            className="mt-8 space-y-6"
          >
            <TextField
              label="Username"
              id="username"
              type="text"
              placeholder="Enter your username"
              register={register}
              errors={errors}
              required
              message="*Username is required"
              className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <TextField
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your password"
              register={register}
              errors={errors}
              required
              min={6}
              message="*Password is required"
              className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="remember-me" className="text-gray-600">
                  Remember Me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="font-medium text-blue-600 hover:underline"
              >
                Forgot Your Password?
              </Link>
            </div>

            <button
              disabled={loader}
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200 disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              {loader ? "Signing In..." : "Log In"}
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800 p-16">
        <div className="text-left text-white max-w-md">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold"
          >
            Effortlessly manage your links and operations.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-indigo-200"
          >
            Log in to access your powerful dashboard, track performance, and
            manage your links all in one place.
          </motion.p>
          <DashboardPreview />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
