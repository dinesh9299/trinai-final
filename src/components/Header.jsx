import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu visibility

  // Detect scroll to add the background, fixed position, and adjust padding
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? "bg-slate-300 shadow-lg  fixed top-0 left-0 right-0 z-10"
          : "bg-transparent"
      } w-full p-4 transition-all duration-300 ease-in-out flex items-center justify-between ${
        isScrolled ? "py-6" : "py-6"
      }`}
    >
      {/* Left Side - Company Image */}
      <div className="flex items-center">
        <img
          src="path_to_your_company_logo.png" // Replace with your company logo URL
          alt="Company Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Right Side - Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <div className="hover:text-gray-400 transition duration-300 ease-in-out">
          <Link to="/about">About Us</Link>
        </div>
        <div
          //   href="#categories"
          className="hover:text-gray-400 transition duration-300 ease-in-out"
        >
          <Link to="/categories">Categories</Link>
        </div>
        <div
          //   href="#solutions"
          className="hover:text-gray-400 transition duration-300 ease-in-out"
        >
          <Link to="/solutions">Solutions</Link>
        </div>
        <div
          //   href="#contact"
          className="hover:text-gray-400 transition duration-300 ease-in-out"
        >
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Hamburger Menu (Visible on Small Screens) */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu (Visible when hamburger is clicked) */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 right-0 bg-gray-800 p-4 space-y-4`}
      >
        <a
          href="#aboutus"
          className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
        >
          About Us
        </a>
        <a
          href="#categories"
          className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
        >
          Categories
        </a>
        <a
          href="#solutions"
          className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
        >
          Solutions
        </a>
        <a
          href="#contact"
          className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
