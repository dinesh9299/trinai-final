import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPinterestSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import blogo from "../images/highbtlogo.png";
import Threads from "../pages/Threads";

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 text-white pb-8 overflow-hidden">
      {/* Background Threads */}
      <Threads
        className="absolute bottom-0 left-0 w-full h-96 z-0"
        color={[0.2, 0.6, 0.9]}
        amplitude={0.8}
        distance={0.4}
        enableMouseInteraction={false}
      />

      {/* Foreground content */}
      <div className="relative z-10">
        <div className="bg-slate-100 py-10 text-xl text-gray-500 md:flex px-5 lg:flex justify-center items-center gap-10">
          <img src={blogo} className="w-52 align-middle" alt="Logo" />
          <div className="text-black mt-3 font-serif">
            Trinai is a dedicated unit of Brihaspathi Technologies Limited,
            specializing in camera products.
          </div>
        </div>

        <hr />

        <div className="max-w-screen-xl mx-auto px-4 mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* About Us */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                We are a company dedicated to providing excellent service to our
                customers.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="text-gray-400">
                {["Home", "Solutions", "About", "Contact"].map((text) => (
                  <li key={text}>
                    <Link to={`/${text.toLowerCase()}`}>
                      <button className="hover:text-cyan-400 hover:translate-x-3 my-2 transition-transform duration-300 ease-in-out">
                        {text}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-400">Email: trinai@brihaspathi.com</p>
              <p className="text-gray-400">Phone: +91 98858 88835</p>
              <div className="flex my-7 gap-4">
                {[
                  {
                    icon: <FaFacebookSquare size={20} />,
                    href: "https://www.facebook.com/profile.php?id=61574150717517",
                  },
                  {
                    icon: <FaTwitter size={20} />,
                    href: "https://x.com/TRINAI557289",
                  },
                  {
                    icon: <FaInstagram size={20} />,
                    href: "https://www.instagram.com/trinai_official/",
                  },
                  {
                    icon: <FaLinkedinIn size={20} />,
                    href: "https://www.linkedin.com/company/106424439",
                  },
                  {
                    icon: <FaPinterestSquare size={20} />,
                    href: "https://in.pinterest.com/trinai_official/",
                  },
                ].map(({ icon, href }, index) => (
                  <div
                    key={index}
                    className="bg-white text-black hover:text-white p-3 rounded-full hover:bg-slate-500"
                  >
                    <a
                      className="hover:cursor-pointer"
                      target="_blank"
                      rel="noreferrer"
                      href={href}
                    >
                      {icon}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <hr /> */}

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-400">
          <p>&copy; 2025 Trinai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
