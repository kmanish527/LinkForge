import React from "react";
import { motion } from "framer-motion";

const FounderSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32">
      {" "}
      {/* Light background gradient */}
      <div className="container mx-auto px-6 lg:px-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 leading-tight">
              Behind the LinkForge
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              In a digital world overflowing with information, clarity is key.
              LinkForge was born from a simple idea: that sharing a link should
              be easy, clean, and measurable. Our mission is to provide a fast,
              reliable, and user-friendly tool that transforms long, unwieldy
              web addresses into short, shareable links, helping you make a
              bigger impact with every click.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 lg:mt-0 flex flex-col items-center lg:items-end text-center lg:text-right"
          >
            <div className="max-w-xs ">
              <div className="mt-8 relative w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/images/founder.png"
                  alt="[Your Founder's Name], CEO & Founder of LinkForge"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-1 mr-12 mt-2">
                [K Manish]
              </h3>
              <p className="text-md text-gray-600 mr-20">Creator</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
