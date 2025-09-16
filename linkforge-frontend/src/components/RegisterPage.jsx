import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import toast from "react-hot-toast";
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
  </div>
);

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const registerHandler = async (data) => {
    setLoader(true);
    try {
      await api.post("/api/auth/public/register", data);
      reset();
      navigate("/login");
      toast.success("Registration Successful!");
    } catch (error) {
      console.log(error);
      toast.error("Registration Failed!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16">
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
            <h1 className="text-3xl font-bold text-gray-900">
              Create an Account
            </h1>
            <p className="mt-2 text-gray-500">
              Get started by filling out the information below.
            </p>
          </motion.div>

          <form
            onSubmit={handleSubmit(registerHandler)}
            className="mt-8 space-y-6"
          >
            <TextField
              label="Username"
              id="username"
              type="text"
              placeholder="Choose a username"
              register={register}
              errors={errors}
              required
              message="*Username is required"
            />
            <TextField
              label="Email"
              id="email"
              type="email"
              placeholder="Enter your email address"
              register={register}
              errors={errors}
              required
              message="*Email is required"
            />
            <TextField
              label="Password"
              id="password"
              type="password"
              placeholder="Create a strong password"
              register={register}
              errors={errors}
              required
              min={6}
              message="*Password is required"
            />

            <button
              disabled={loader}
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200 disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              {loader ? "Creating Account..." : "Create Account"}
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Log In
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
            Unlock powerful features for free.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-indigo-200"
          >
            Sign up to access your personal dashboard, create unlimited short
            links, and track their performance with our detailed analytics.
          </motion.p>
          <DashboardPreview />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
