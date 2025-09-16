import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import { useStoreContext } from "../contextApi/ContextApi";

const Card = ({ title, desc }) => {
  return (
    <div
      className="
        bg-white p-8 rounded-2xl shadow-lg
        border border-gray-100 flex flex-col h-full
        font-sans
      "
    >
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
};

const features = [
  {
    title: "Simple URL Shortening",
    desc: "Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle.",
  },
  {
    title: "Powerful Analytics",
    desc: "Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies.",
  },
  {
    title: "Enhanced Security",
    desc: "Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure.",
  },
  {
    title: "Fast and Reliable",
    desc: "Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users.",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();

  const dashBoardNavigateHandler = () => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] lg:px-14 sm:px-8 px-4 ">
      <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
            Simplifies URL Shortening For Efficient Sharing.
          </motion.h1>
          <p className="text-slate-700 text-sm my-5">
            LinkForge streamlines the process of URL shortening, making sharing
            links effortless and efficient. With its user-friendly interface,
            LinkForge allows you to generate concise, easy-to-share URLs in
            seconds. Simplify your sharing experience with LinkForge today.
          </p>
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="bg-blue-600 hover:bg-blue-700 w-40 text-white rounded-md py-2 transition-colors"
            >
              Manage Links
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              onClick={dashBoardNavigateHandler}
              className="border-blue-600 border w-40 text-blue-600 rounded-md py-2 hover:bg-blue-50 transition-colors"
            >
              Create Short Link
            </motion.button>
          </div>
        </div>
        <div className="flex-1 flex justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[400px] object-cover rounded-md"
            src="/images/img2.png"
            alt="URL Shortener Illustration"
          />
        </div>
      </div>
      <div className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
        >
          Trusted by individuals and teams at the world's best companies
        </motion.p>

        <div className="pt-4 pb-7 grid lg:gap-8 gap-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }} 
            >
              <Card title={feature.title} desc={feature.desc} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
