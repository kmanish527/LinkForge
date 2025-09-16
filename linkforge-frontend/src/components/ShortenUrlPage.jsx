import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const ShortenUrlPage = () => {
  const { url } = useParams();
  const redirectDelay = 3000;

  useEffect(() => {
    if (url) {
      const timer = setTimeout(() => {
        window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}`;
      }, redirectDelay);
      return () => clearTimeout(timer);
    }
  }, [url, redirectDelay]);

  const loadingBarVariants = {
    animate: {
      width: "100%",
      transition: {
        duration: redirectDelay / 1000,
        ease: "linear",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col lg:flex-row items-center justify-center p-6 overflow-hidden">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:w-1/2 p-4 md:p-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-bold text-gray-800 mb-4"
        >
          Hold on tight!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-600 mb-8"
        >
          We're redirecting your short link...
        </motion.p>

        <div className="w-64 h-2 bg-blue-200 rounded-full overflow-hidden">
          <motion.div
            variants={loadingBarVariants}
            initial={{ width: "0%" }}
            animate="animate"
            className="h-full bg-blue-500 rounded-full"
          ></motion.div>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 flex items-center justify-center min-h-[400px] lg:min-h-screen p-4">
        <DotLottieReact
          src="https://lottie.host/d553e4d4-a52e-406b-ba7f-34f9ac929b74/hHz9EDtYtc.lottie"
          loop
          autoplay
          style={{ width: "80%", maxWidth: "400px" }}
        />
      </div>
    </div>
  );
};

export default ShortenUrlPage;
