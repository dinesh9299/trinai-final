import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image, Button, ConfigProvider, Carousel, Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { GiCctvCamera } from "react-icons/gi";
import { BsHddNetworkFill } from "react-icons/bs";
import { BsPcDisplay } from "react-icons/bs";
import { SlCamrecorder } from "react-icons/sl";
import { LuRouter } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import makeinindia from "../images/india/image (8).jpg";
import workflow from "../images/india/image.jpg";
import workflow2 from "../images/india/image (2).jpg";
import workflow3 from "../images/india/image (4).jpg";
import image1 from "../images/india/image (10).jpg";
import image2 from "../images/india/image (11).jpg";
import image3 from "../images/india/image (12).jpg";

import { motion } from "framer-motion";
import { ScrollTop } from "primereact/scrolltop";

const About = () => {
  // const { styles } = useStyle();
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const features = [
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fhd-camera_1731581599675_cf3898084427.png&w=96&q=75",
      heading: "HD Camera",
      description:
        "A high-definition surveillance camera provides crystal-clear video for enhanced security monitoring.",
      icon: <GiCctvCamera size={40} />,
    },
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fwifi-smart_1731581622608_3f0dc5045a9e.png&w=96&q=75",
      heading: "WiFi Smart",
      description:
        "Smart WiFi-enabled security system with mobile integration for remote monitoring and control.",
      icon: <LuRouter size={40} />,
    },
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Finteractive-display_1731581646212_8facec83168a.png&w=96&q=75",
      heading: "Network Switches",
      description:
        "Efficient network switches optimizing connectivity for large-scale security system deployments.",
      icon: <BsHddNetworkFill size={40} />,
    },
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fvideo-recorder_1731581653628_74d3cc9237f5.png&w=96&q=75",
      heading: "Interactive Display",
      description:
        "Touch-enabled display with real-time interaction, ideal for control and security monitoring systems.",
      icon: <BsPcDisplay size={40} />,
    },
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fvideo-recorder_1731581653628_74d3cc9237f5.png&w=96&q=75",
      heading: "Video Recorder",
      description:
        "Cloud-based storage solutions for secure and scalable video archiving.",
      icon: <SlCamrecorder size={40} />,
    },
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fwifi-router_1731581662021_324c72ef6e8a.png&w=96&q=75",
      heading: "WiFi Router",
      description:
        "Seamless integration with smart home automation systems for better security management.",
      icon: <LuRouter size={40} />,
    },
  ];

  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  const groupedFeatures = chunkArray(features, 4);

  const contentStyle = {
    height: "150px",
    color: "#000000",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#D5E5D5",
    fontSize: "16px",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };

  const images = [
    {
      src: "https://assets.agentfire3.com/uploads/sites/860/2023/02/The-top-5-Smart-Home-Security-Systems.jpg",
      label: "Smart Home Security",
    },
    {
      src: "https://lh3.googleusercontent.com/hMocN5AmKXj8bZF96zINiX8hfZRW-fcsEe0cMHP1ir6cogNe4sbzYspw0WweNm7w7ZWwtdwicDoxZmxoswA-GLMnYOfJQneYSQ=w3840-h2160-c-rw-v3",
      label: "Smart Home Security - II",
    },
    {
      src: "https://i0.wp.com/alarmsys.com/wp-content/uploads/2024/01/Blog-9.png?fit=1024%2C576&ssl=1",
      label: "24/7 Alarm Monitoring",
    },
    {
      src: "https://m.media-amazon.com/images/I/51j3Z1fkUOL._AC_UF1000,1000_QL80_.jpg",
      label: "Doorbell Video Cameras",
    },
  ];

  const services = [
    "Smart Home Security",
    "Doorbell Video Cameras",
    "Smart Home Security - II",
    "24/7 Alarm Monitoring",
  ];

  return (
    <div className="w-full bg-white text-black">
      {/* Banner Section */}
      <div className="w-full">
        <img
          src="http://trinai.in/Images/Capture.JPG"
          alt="Banner"
          className="w-full h-[250px] md:h-[500px] lg:h-[400px] object-cover"
        />
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=" flex justify-center text-gray-500 items-center font-thin text-3xl p-3 font-bold "
      >
        TRINAI is a comprehensive surveillance ecosystem that integrates:
      </motion.div>

      <div className="lg:p-10">
        <div className="p-5">
          <div
            className="lg:grid border shadow shadow-whit10
                
                   rounded-md grid-cols-2 p-8 "
          >
            <div className=" lg:px-20">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img className=" rounded-md" src={makeinindia}></img>
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="text-orange-600 text-xl font-bold my-2 ms-1">
                Make In INDIA
              </div>
              <div className=" text-gray-500 font-serif font-bold text-2xl m-2 ">
                Innovative Security and Data Solutions by Trinai
              </div>

              <div className=" text-start mx-2 mt-5 text-gray-500 text-xl">
                <p>
                  ✅ 100% Make in India – Designed, developed, and manufactured
                  locally.
                </p>
                <p>
                  ✅ AI & IoT-Powered Security – Smart automation for efficient
                  surveillance.
                </p>
                <p>
                  ✅ No Import Dependency – Faster service, lower costs, and
                  reliable performance.
                </p>
                <p>
                  ✅ Customizable & Scalable – Flexible to adapt to unique
                  security needs.
                </p>
                <p>
                  ✅ Industry-Leading Performance – A blend of AI, IoT, and
                  next-gen surveillance technology.
                </p>
              </div>
              <div className=" mt-20  grid grid-cols-2 gap-7">
                <div className=" flex">
                  <div>
                    <TiTick color="" className=" text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">Expertise</div>
                </div>
                <div className=" flex">
                  <div>
                    <TiTick color="" className=" text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">Innovation</div>
                </div>
                <div className=" flex">
                  <div>
                    <TiTick color="" className=" text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">Dependability</div>
                </div>
                <div className=" flex">
                  <div>
                    <TiTick color="" className=" text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">Customer-Centric</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className=" p-5 "></div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" flex justify-center text-gray-500 items-center font-thin text-3xl p-3 font-bold "
        >
          ADVANCED SECURITY AND SURVEILLANCE SOLUTIONS
        </motion.div>
      </div>

      <div className="lg:p-10">
        <div className="p-5">
          <div
            className="lg:grid border shadow shadow-whit10
                
                   rounded-md grid-cols-2 p-8 "
          >
            <div className=" lg:px-20">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className=" space-y-4 grid grid-cols-2 space-x-4">
                  {" "}
                  <img className=" rounded-md " src={workflow}></img>
                  <img className=" rounded-md" src={workflow3}></img>
                  <img className=" rounded-md" src={workflow2}></img>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="text-orange-600 text-xl font-bold my-2 ms-1">
                Trinai Industries
              </div>
              <div className=" text-gray-500 font-serif font-bold text-2xl m-2 ">
                Innovative Security and Data Solutions by Trinai
              </div>

              <div className=" text-start mx-2 mt-5 text-gray-500 text-xl">
                <div className="flex">
                  <div>
                    <TiTick color="" className="text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">
                    100% Make in India – Designed, developed, and manufactured
                    locally.
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <TiTick color="" className="text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">
                    AI & IoT-Powered Security – Smart automation for efficient
                    surveillance.
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <TiTick color="" className="text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">
                    No Import Dependency – Faster service, lower costs, and
                    reliable performance.
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <TiTick color="" className="text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">
                    Customizable & Scalable – Flexible to adapt to unique
                    security needs.
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <TiTick color="" className="text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">
                    Industry-Leading Performance – A blend of AI, IoT, and
                    next-gen surveillance technology.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className=" p-5 "></div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" flex justify-center text-gray-500 items-center font-thin text-3xl p-3 font-bold "
        >
          ADVANCED SECURITY AND SURVEILLANCE SOLUTIONS
        </motion.div>
      </div>

      <div className="lg:p-10">
        <div className="p-5">
          <div
            className="lg:grid border shadow shadow-whit10
                
                   rounded-md grid-cols-2 p-8 space-y-4 "
          >
            <div className=" lg:px-20">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img className=" rounded-md" src={image1}></img>
              </motion.div>
            </div>
            <div className=" lg:px-20">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img className=" rounded-md" src={image2}></img>
              </motion.div>
            </div>
            <div className=" lg:px-20">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img className=" rounded-md" src={image3}></img>
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="text-orange-600 text-xl font-bold my-2 ms-1">
                Why Choose Trinai?
              </div>
              <div className=" text-gray-500 font-serif font-bold text-2xl m-2 ">
                Innovative Security and Data Solutions by Trinai
              </div>

              <div className=" text-start mx-2 mt-5 text-gray-500 text-xl">
                <div className="flex">
                  <div>
                    <TiTick color="" className="text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">
                    TRINAI is a comprehensive surveillance ecosystem that
                    integrates
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <TiTick color="" className="text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">
                    Cloud & On-Premise Storage – Securely store footage with
                    flexible storage options.
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <TiTick color="" className="text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">
                    {" "}
                    Remote Access & Control – Monitor live feeds from anywhere,
                    anytime using web & mobile apps.
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <TiTick color="" className="text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">
                    {" "}
                    Smart Integration – Connect with IoT devices, alarms, and
                    security systems for an automated experience.
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <TiTick color="" className="text-orange-600" size={25} />
                  </div>
                  <div className="text-gray-500">
                    Industry-Leading Performance – A blend of AI, IoT, and
                    next-gen surveillance technology.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className=" p-5 "></div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" flex justify-center text-gray-500 items-center font-thin text-3xl p-3 font-bold "
        >
          Cutting-Edge Security & Intelligent Surveillance Solutions
        </motion.div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Left: Images Section */}
        <div className="flex flex-wrap gap-4 justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer w-32 md:w-48"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.label}
                className="w-full h-20 object-cover"
              />
              <div className="p-2 text-center">
                <p className="text-sm font-semibold">{image.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Content Section */}
        <div className="p-6 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Trinai</h1>
          <p className="text-lg md:text-xl leading-relaxed mt-4">
            We are leaders in advanced surveillance solutions, ensuring security
            and peace of mind.
          </p>
          <div className="mt-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 bg-gray-100 rounded-lg p-4 shadow-md"
                >
                  <span className="w-4 h-4 bg-blue-500 rounded-full inline-block animate-pulse"></span>
                  {service}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/viewproducts">
                <ConfigProvider theme={{ token: { colorPrimary: "#6253e1" } }}>
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                  >
                    View Products
                  </Button>
                </ConfigProvider>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="p-6 bg-slate-200">
        <Carousel autoplay dots={true}>
          {groupedFeatures.map((group, index) => (
            <div key={index} className="p-5">
              <Row gutter={[16, 16]} justify="center">
                {group.map((feature, idx) => (
                  <Col key={idx} xs={24} sm={12} md={6}>
                    <div className="relative w-full h-72 bg-white shadow-md rounded-lg p-5 text-center flex flex-col items-center transition duration-300 hover:bg-slate-500 hover:text-white group hover:cursor-pointer">
                      {/* Image & Icon Toggle on Hover */}
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        {/* Image (Hidden on Hover) */}
                        <img
                          src={feature.picture}
                          alt={feature.heading}
                          className="absolute w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                        />

                        {/* Icon (Visible on Hover) */}
                        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                          {feature.icon}
                        </div>
                      </div>

                      {/* Text */}
                      <h2 className="mt-3 text-lg font-bold">
                        {feature.heading}
                      </h2>
                      <p className="text-sm text-gray-600 group-hover:text-white">
                        {feature.description}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full md:w-1/2">
            <img
              src="https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fpikaso_texttoimage_cctv-image-in-public-where-focus-on-cctv--(1)_1729858339024_8bdb85c9db9b.png&w=384&q=75"
              alt=""
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fpikaso_texttoimage_cctv-image-in-public-where-focus-on-cctv--(2)_1729858350210_6727284604ed.png&w=384&q=75"
              alt=""
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        <div className="som_container grid grid-cols-1 md:grid-cols-2 gap-8 my-10 p-4">
          <div className="w-full">
            <img
              src="https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fpikaso_texttoimage_cctv-image-in-public-where-focus-on-cctv-_1729858389940_16243449d9c8.png&w=750&q=75"
              alt=""
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="w-full">
            <h1 className="text-2xl md:text-4xl font-bold">
              In House Manufacturing
            </h1>
            <p className="text-lg md:text-xl mt-2">
              Our CCTV cameras are meticulously crafted through in-house
              manufacturing with an eye for detail by the best engineers,
              enabling complete control over quality, innovation, and precision.
            </p>
          </div>
        </div>

        <div className="success_stories bg-slate-200 p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl font-bold">Success Stories</h1>
          <p className="text-lg md:text-xl">
            Experience comprehensive home security solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
            {[
              {
                src: "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fhi-focus-india-1440-x-540_esi-hospital-chennai-ayanavaram_1740391451467_4294683be726.jpg&w=1920&q=75",
                text: "Case Study: Guarding Every Minute at ESIC Hospital",
              },
              {
                src: "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fdesktop_1739452086102_fb4cc3f60203.jpg&w=1920&q=75",
                text: "Case Study: Enhancing Surveillance at Egmore Museum with Hifocus CCTV Solutions",
              },
              {
                src: "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fframe-295_1731565934475_3f4ad49d6c0c.png&w=1920&q=75",
                text: "Transforming Security at Suryoday Institute of Technology",
              },
              {
                src: "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fframe-286_1731565224527_6dcd3d083a82.png&w=1920&q=75",
                text: "Dhanvantar Securing University’s New Campus",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-40 object-cover rounded-md shadow-md"
                />
                <p className="mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-red-500">
        <ScrollTop
          target="window"
          threshold={100}
          className="w-3rem h-3rem border-round bg-orange-600"
          icon="pi pi-arrow-up text-white text-xl" // Apply orange color here
        />
      </div>
    </div>
  );
};

export default About;
