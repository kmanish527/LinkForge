import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white py-8 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">LinkForge</h2>
          <p>Simplifying URL shortening for efficient sharing</p>
        </div>

        <p className="mt-4 lg:mt-0">
          &copy; 2025 LinkForge. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a
            href="mailto:kgpmaish527@gmail.com"
            className="hover:text-gray-200"
          >
            <IoMail size={24} />
          </a>
          <a href="https://www.kmanish.me" className="hover:text-gray-200">
            <CgProfile size={24} />
          </a>
          <a
            href="https://github.com/kmanish527/LinkForge"
            className="hover:text-gray-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/k-manish527/"
            className="hover:text-gray-200"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
