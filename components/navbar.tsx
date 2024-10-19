"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-[#F4F6FF] fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 z-50 font-medium h-20">
        {/* Company Logo */}
        <Link href="/home">
          <div className="flex items-start flex-col ml-3 mt-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-500">
              SIHO Research
            </h2>
            <p className="text-sm md:text-md font-thin text-blue-600">
              Simplify Investing
            </p>
          </div>
        </Link>

        <ul className="hidden md:flex space-x-8 transition-transform duration-500 ease-in-out hover:scale-[103%]">
          <li className="text-lg font-medium hover:text-blue-500 transition-colors duration-300">
            <Link href="/home">Home</Link>
          </li>
          <li className="text-lg font-medium hover:text-blue-500 transition-colors duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="text-lg font-medium hover:text-blue-500 transition-colors duration-300">
            <Link href="/research">Research</Link>
          </li>
          <li className="text-lg font-medium hover:text-blue-500 transition-colors duration-300">
            <Link href="/ai">AI Platform</Link>
          </li>
          <li className="text-lg font-medium hover:text-blue-500 transition-colors duration-300">
            <Link href="/webinar">Webinar</Link>
          </li>
        </ul>

        {/* Contact Us Button */}
        <div className="hidden md:flex">
          <Link href="/contact">
            <button className="bg-[#030413] text-white px-6 py-2 rounded-full hover:bg-[#292828] transition-colors duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#F4F6FF] py-4 px-4 md:hidden flex justify-between items-center z-50">
        {/* Company Logo for Mobile */}
        <Link href="/home">
          <div className="flex items-start flex-col text-center ml-4 mt-1">
            <h2 className="text-2xl font-semibold text-blue-500">
              SIHO Research
            </h2>
            <p className="text-xs font-thin text-blue-600">
              Simplify Investing
            </p>
          </div>
        </Link>
        {/* Mobile Hamburger Icon */}
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
        {/* Close Button Inside Sidebar */}
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} aria-label="Close menu">
            <AiOutlineClose size={28} />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col items-start space-y-6 p-6">
          <li className="text-lg font-medium hover:text-blue-500 transition-colors duration-300">
            <Link href="/home" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li className="text-lg font-medium hover:text-blue-500 transition-colors duration-300">
            <Link href="/about" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          <li className="text-lg font-medium hover:text-blue-500 transition-colors duration-300">
            <Link href="/research" onClick={toggleSidebar}>
              Research
            </Link>
          </li>
          <li className="text-lg font-medium hover:text-blue-500 transition-colors duration-300">
            <Link href="/ai" onClick={toggleSidebar}>
              AI Platform
            </Link>
          </li>
          <li className="text-lg font-medium hover:text-blue-500 transition-colors duration-300">
            <Link href="/webinar" onClick={toggleSidebar}>
              Webinar
            </Link>
          </li>
          <li className="text-lg font-medium hover:text-blue-500 transition-colors duration-300">
            <Link href="/contact" onClick={toggleSidebar}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
