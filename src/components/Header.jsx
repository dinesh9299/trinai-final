import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../images/trinai-02.png";
import logo1 from "../images/trinai white 1 (1).png";
import gpu from "../images/gpu.png";

const categories = [
  //   "HD CCTV Camera",
  //   "IP Cameras",
  "Bullet Cameras",
  "Eyeball Cameras",
  "Dome Cameras",
  "PTZ Cameras",
  "Network Video Recorder",
  "Network Switches",
  "Server",
  "Smart GPU with AI Camera",
  //   "WiFi Smart",
];

// "WiFi Smart": [
//   //     "WiFi Smart Indoor Camera",
//   //     "WiFi Smart Outdoor Camera",
//   //     "WiFi Doorbell Camera",
//   //   ],

const productsByCategory = {
  "Bullet Cameras": [
    {
      name: "2MP HD Bullet Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
    {
      name: "3MP HD Bullet Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
    {
      name: "4MP HD Bullet Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
    {
      name: "5MP HD Bullet Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
    {
      name: "8MP HD Bullet Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
  ],
  "Eyeball Cameras": [
    {
      name: "4MP EyeBall Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
    {
      name: "8MP EyeBall Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
    {
      name: "5MP EyeBall Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
    {
      name: "2MP EyeBall Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
  ],
  "Dome Cameras": [
    {
      name: "2MP Dome Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
  ],

  "PTZ Cameras": [
    {
      name: "2MP PTZ Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
    {
      name: "4MP PTZ Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
  ],
  "Network Video Recorder": [
    {
      name: "16/32-Channel Input NVR",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
    {
      name: "16/32/64-channel input NVR",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
  ],
  "Network Switches": [
    {
      name: "8 Port PoE Switch",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
    {
      name: "16 Port PoE Switch",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
    {
      name: "24 Port Gigabit Switch",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
  ],
  Server: [
    {
      name: "Server",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
  ],

  "Smart GPU with AI Camera": [
    {
      name: "Smart GPU with AI Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
  ],
  "WiFi Smart": [
    {
      name: "WiFi Smart Indoor Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
    {
      name: "WiFi Smart Outdoor Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
    {
      name: "WiFi Doorbell Camera",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/13/cctv-camera-security-surveillance-system-vector-20943213.jpg",
    },
  ],
};

const categoryImages = {
  "Bullet Cameras":
    "https://img.freepik.com/free-vector/small-surveillance-camera-realistic-icon-white-background-vector-illustration_1284-66711.jpg?uid=P7856354&ga=GA1.1.1780034646.1729582102&semt=ais_hybrid",
  "EyeBall Cameras":
    "https://img.freepik.com/free-psd/modern-white-security-cctv-camera-isolated-transparent-background_84443-26526.jpg?uid=P7856354&ga=GA1.1.1780034646.1729582102&semt=ais_hybrid",
  "Dome Cameras":
    "https://img.freepik.com/free-psd/modern-white-security-cctv-camera-isolated-transparent-background_84443-26526.jpg?uid=P7856354&ga=GA1.1.1780034646.1729582102&semt=ais_hybrid",
  "Network PTZ Cameras": "http://trinai.in/Images/PTZ_1.png",
  "Network Video Recorder": "http://trinai.in/Images/NVR.png",
  "Network Switches":
    "http://trinai.in/Images/Poe%20Switches/4%20port%20poe.png",
  "Smart GPU with AI Camera": gpu,
  "WiFi Smart":
    "https://img.freepik.com/free-psd/router-isolated-transparent-background_191095-24268.jpg?uid=P7856354&ga=GA1.1.1780034646.1729582102&semt=ais_hybrid",
};

const Header = () => {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const location = useLocation();
  console.log("path", location.pathname);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // onClick={() =>
  //   navigate(
  //     `/categories?query=${encodeURIComponent(
  //       product.name
  //     )}`
  //   )
  // }

  const HandleClick = (id) => {
    navigate(`/categories?query=${encodeURIComponent(id)}`);
    setIsCategoriesOpen(false);
  };

  return (
    <header
      className={`${
        isScrolled || isCategoriesOpen
          ? "bg-white shadow-lg text-black fixed top-0 left-0 right-0 "
          : "bg-transparent text-white fixed top-0 left-0 right-0 "
      } w-full px-4 transition-all duration-300 z-50 flex items-center justify-around pt-5`}
    >
      {/* Mega menu section */}
      {isCategoriesOpen && (
        <div
          className="absolute left-0 top-full w-full bg-white shadow-2xl border-t pt-6 pb-8 px-8 z-50"
          onMouseEnter={() => setIsCategoriesOpen(true)}
          onMouseLeave={() => setIsCategoriesOpen(false)}
        >
          <div className="flex gap-8 ">
            {/* Left navigation column */}
            <div className="w-1/4 border-r pr-6 space-y-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`block text-left text-black w-full font-semibold ${
                    selectedCategory === category
                      ? "text-blue-700 "
                      : "hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Right dynamic product list */}
            <div className="w-3/4">
              {" "}
              <div className=" grid grid-cols-3  gap-10 text-gray-700">
                {productsByCategory[selectedCategory]?.map((product, index) => (
                  // <Link to="#" key={index} className="hover:text-blue-600">
                  //   {product.name}
                  // </Link>
                  <div key={index}>
                    <div
                      className=" cursor-pointer hover:text-blue-500"
                      onClick={() => {
                        HandleClick(product.name);
                      }}
                    >
                      {product.name}
                    </div>
                  </div>
                ))}
                <div
                  onClick={() => {
                    HandleClick(selectedCategory);
                  }}
                  className="text-blue-700 font-semibold  cursor-pointer hover:text-orange-600"
                >
                  See More Products →
                </div>
              </div>
              <div className=" mt-10 text-black">
                <hr></hr>
                <div className=" flex justify-between py-10 pe-10">
                  <div>
                    <div className=" text-orange-600 text-xl font-bold">
                      Trinai Security Solutions
                    </div>
                    <div className=" mt-5 text-xl text-gray-500">
                      Experience next-level protection with advanced AI
                      technology.
                    </div>
                  </div>
                  <div>
                    <img
                      src={categoryImages[selectedCategory]}
                      alt={selectedCategory}
                      className=" w-auto h-24"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Company Logo */}
      <div
        className="flex items-center justify-center "
        style={{ marginTop: "-18px" }}
      >
        <Link to="/">
          <img
            src={isScrolled || isCategoriesOpen ? logo : logo1}
            alt="Company Logo"
            className="h-16 w-auto"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-12">
        <Link
          to="/"
          className={`hover:text-orange-600  text-xl font-bold ${
            location.pathname === "/" ? "text-orange-600" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`hover:text-orange-600  text-xl font-bold ${
            location.pathname === "/about" ? "text-orange-600" : ""
          }`}
        >
          About Us
        </Link>

        {/* Categories Hover Trigger */}
        <div
          className="relative group pb-10"
          onMouseEnter={() => setIsCategoriesOpen(true)}
          onMouseLeave={() => setIsCategoriesOpen(false)}
        >
          <div
            className={`hover:text-orange-600 cursor-pointer text-xl font-bold ${
              location.pathname === "/categories" ? "text-orange-600" : ""
            }`}
          >
            Categories
          </div>
        </div>

        <Link
          to="/solutions"
          className={`hover:text-orange-600 cursor-pointer text-xl font-bold ${
            location.pathname === "/solutions" ? "text-orange-600" : ""
          }`}
        >
          Solutions
        </Link>
        <Link
          to="/contact"
          className={`hover:text-orange-600 cursor-pointer text-xl font-bold ${
            location.pathname === "/contact" ? "text-orange-600" : ""
          }`}
        >
          Contact
        </Link>
      </nav>

      {/* Mobile hamburger menu */}
      {/* Hamburger button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden text-black"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Off-canvas menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-2xl z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-6">
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-600"
          >
            About Us
          </Link>
          <Link
            to="/categories"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Categories
          </Link>
          <Link
            to="/solutions"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Solutions
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {/* <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 right-0 bg-gray-800 p-4 space-y-4`}
      >
        <a href="#aboutus" className="text-white hover:text-gray-400">
          About Us
        </a>
        <a href="#categories" className="text-white hover:text-gray-400">
          Categories
        </a>
        <a href="#solutions" className="text-white hover:text-gray-400">
          Solutions
        </a>
        <a href="#contact" className="text-white hover:text-gray-400">
          Contact
        </a>
      </div> */}
    </header>
  );
};

export default Header;
