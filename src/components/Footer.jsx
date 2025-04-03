import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import blogo from "../images/highbtlogo.png";

import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  pb-8">
      <div className="  bg-slate-100 py-10 text-xl text-gray500 md:flex px-5 lg:flex justify-center items-center gap-10">
        <img src={blogo} className=" w-52 align-middle"></img>
        <div className=" text-black mt-3 font-serif">
          Trinai is a dedicated unit of Brihaspathi Technologies Limited,
          specializing in camera products.
        </div>
      </div>
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
                <Link to="/">
                  <button className="hover:text-cyan-400 hover:translate-x-3 my-2 transition-transform duration-300 ease-in-out">
                    Home
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/solutions">
                  <button className="hover:text-cyan-400 hover:translate-x-3 my-2 transition-transform duration-300 ease-in-out">
                    Solutions
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <button className="hover:text-cyan-400   hover:translate-x-3 my-2 transition-transform duration-300 ease-in-out">
                    {" "}
                    About
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <button className="hover:text-cyan-400 hover:translate-x-3 my-2 transition-transform duration-300 ease-in-out">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400">Email: trinai@brihaspathi.com</p>
            <p className="text-gray-400">Phone:+91 98858 88835</p>
            <div className=" flex my-7 gap-4">
              <div className=" bg-white text-black  hover:text-white p-3 rounded-full hover:bg-slate-500 ">
                <a
                  className="hover:cursor-pointer"
                  target="_Blank"
                  href="https://www.facebook.com/profile.php?id=61574150717517"
                >
                  <FaFacebookSquare className=" " size={20} />
                </a>
              </div>
              <div className=" bg-white text-black  hover:text-white p-3 rounded-full hover:bg-slate-500 ">
                <a
                  className="hover:cursor-pointer"
                  target="_Blank"
                  href="https://x.com/TRINAI557289"
                >
                  <FaTwitter className=" " size={20} />
                </a>
              </div>

              <div className=" bg-white text-black  hover:text-white p-3 rounded-full hover:bg-slate-500 ">
                <a
                  className="hover:cursor-pointer"
                  target="_Blank"
                  href="https://www.instagram.com/trinai_official/"
                >
                  {" "}
                  <FaInstagram className=" " size={20} />
                </a>
              </div>
              <div className=" bg-white text-black  hover:text-white p-3 rounded-full hover:bg-slate-500 ">
                <a
                  className="hover:cursor-pointer"
                  target="_Blank"
                  href="https://www.linkedin.com/company/106424439"
                >
                  <FaLinkedinIn className=" " size={20} />
                </a>
              </div>
              <div className=" bg-white text-black  hover:text-white p-3 rounded-full hover:bg-slate-500 ">
                <a
                  className="hover:cursor-pointer"
                  target="_Blank"
                  href="https://in.pinterest.com/trinai_official/"
                >
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
