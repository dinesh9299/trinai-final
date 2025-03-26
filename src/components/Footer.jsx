import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div>
        <hr />
      </div>
      <div className="max-w-screen-xl mx-auto px-4 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a company dedicated to providing excellent service to our
              customers.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 ">
              <li>
                <button className="hover:text-cyan-400 hover:translate-x-3 my-2 transition-transform duration-300 ease-in-out">
                  Home
                </button>
              </li>

              <li>
                <button className="hover:text-cyan-400 hover:translate-x-3 my-2 transition-transform duration-300 ease-in-out">
                  Services
                </button>
              </li>
              <li>
                <button className="hover:text-cyan-400   hover:translate-x-3 my-2 transition-transform duration-300 ease-in-out">
                  {" "}
                  About
                </button>
              </li>
              <li>
                <button className="hover:text-cyan-400 hover:translate-x-3 my-2 transition-transform duration-300 ease-in-out">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400">Email: info@trinai.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
            <div className=" flex my-7 gap-4">
              <div className=" bg-white text-black  hover:text-white p-3 rounded-full hover:bg-slate-500 hover:cursor-pointer">
                <a href="https://www.facebook.com/profile.php?id=61574150717517">
                  <FaFacebookSquare className=" " size={20} />
                </a>
              </div>
              <div className=" bg-white text-black  hover:text-white p-3 rounded-full hover:bg-slate-500 hover:cursor-pointer">
                <a href="https://x.com/TRINAI557289">
                  <FaTwitter className=" " size={20} />
                </a>
              </div>

              <div className=" bg-white text-black  hover:text-white p-3 rounded-full hover:bg-slate-500 hover:cursor-pointer">
                <a href="https://www.instagram.com/trinai_official/">
                  {" "}
                  <FaInstagram className=" " size={20} />
                </a>
              </div>
              <div className=" bg-white text-black  hover:text-white p-3 rounded-full hover:bg-slate-500 hover:cursor-pointer">
                <a href="https://www.linkedin.com/company/106424439">
                  <FaLinkedinIn className=" " size={20} />
                </a>
              </div>
              <div className=" bg-white text-black  hover:text-white p-3 rounded-full hover:bg-slate-500 hover:cursor-pointer">
                <a href="https://in.pinterest.com/trinai_official/">
                  <FaPinterestSquare className=" " size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
      </div>
      <hr />
      <div className="text-center mt-8 text-gray-400">
        <p>&copy; 2025 Trinai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
