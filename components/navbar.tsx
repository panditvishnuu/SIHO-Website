"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Loader from "./Loader";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State for loader
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (path: string) => {
    setIsLoading(true); // Show loader when a link is clicked

    router.push(path); // Use router.push for navigation
    setIsSidebarOpen(false);

    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false); // Hide loader when navigation completes
    }, 1000); // Adjust the timeout to match your actual load time
  };

  return (
    <>
      {/* Loader */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <div className="loader">
            <Loader />
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <nav className="bg-[#F4F6FF] fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 z-50 font-medium h-20">
        {/* Company Logo */}
        <div
          className="flex items-start flex-col ml-3 mt-1 cursor-pointer"
          onClick={() => handleNavigation("/home")}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-500">
            SIHO Research
          </h2>
          <p className="text-sm md:text-md font-thin text-blue-600">
            Simplify Investing
          </p>
        </div>

        <ul className="hidden md:flex space-x-8 transition-transform duration-500 ease-in-out hover:scale-[103%]">
          <li
            className="text-lg font-medium hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => handleNavigation("/home")}
          >
            Home
          </li>
          <li
            className="text-lg font-medium hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => handleNavigation("/about")}
          >
            About
          </li>
          <li
            className="text-lg font-medium hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => handleNavigation("/research")}
          >
            Research
          </li>
          <li
            className="text-lg font-medium hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => handleNavigation("/ai")}
          >
            AI Platform
          </li>
          <li
            className="text-lg font-medium hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => handleNavigation("/webinar")}
          >
            Webinar
          </li>
        </ul>

        {/* Contact Us Button */}
        <div className="hidden md:flex">
          <button
            className="bg-[#030413] text-white px-6 py-2 rounded-full hover:bg-[#292828] transition-colors duration-300"
            onClick={() => handleNavigation("/contact")}
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#F4F6FF] py-4 px-4 md:hidden flex justify-between items-center z-50">
        <div
          className="flex items-start flex-col text-center ml-4 mt-1 cursor-pointer"
          onClick={() => handleNavigation("/home")}
        >
          <h2 className="text-2xl font-semibold text-blue-500">
            SIHO Research
          </h2>
          <p className="text-xs font-thin text-blue-600">Simplify Investing</p>
        </div>

        <button
          onClick={toggleSidebar}
          aria-label="Toggle menu"
          className="mr-4"
        >
          <AiOutlineMenu size={28} />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-3/4 bg-[#F4F6FF] z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} aria-label="Close menu">
            <AiOutlineClose size={28} />
          </button>
        </div>

        <ul className="flex flex-col items-start space-y-6 p-6">
          <li
            className="text-lg font-medium hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => handleNavigation("/home")}
          >
            Home
          </li>
          <li
            className="text-lg font-medium hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => handleNavigation("/about")}
          >
            About
          </li>
          <li
            className="text-lg font-medium hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => handleNavigation("/research")}
          >
            Research
          </li>
          <li
            className="text-lg font-medium hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => handleNavigation("/ai")}
          >
            AI Platform
          </li>
          <li
            className="text-lg font-medium hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => handleNavigation("/webinar")}
          >
            Webinar
          </li>
          <li
            className="text-lg font-medium hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => handleNavigation("/contact")}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
