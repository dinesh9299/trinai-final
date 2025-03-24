import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image, Button, ConfigProvider, Carousel, Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const features = [
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fhd-camera_1731581599675_cf3898084427.png&w=96&q=75",
      heading: "HD Camera",
      description:
        "A high-definition surveillance camera provides crystal-clear video for enhanced security monitoring.",
    },
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fwifi-smart_1731581622608_3f0dc5045a9e.png&w=96&q=75",
      heading: "WiFi Smart",
      description:
        "Smart WiFi-enabled security system with mobile integration for remote monitoring and control.",
    },
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Finteractive-display_1731581646212_8facec83168a.png&w=96&q=75",
      heading: "Network Switches",
      description:
        "Efficient network switches optimizing connectivity for large-scale security system deployments.",
    },
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fvideo-recorder_1731581653628_74d3cc9237f5.png&w=96&q=75",
      heading: "Interactive Display",
      description:
        "Touch-enabled display with real-time interaction, ideal for control and security monitoring systems.",
    },
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fvideo-recorder_1731581653628_74d3cc9237f5.png&w=96&q=75",
      heading: "Video Recorder",
      description:
        "Cloud-based storage solutions for secure and scalable video archiving.",
    },
    {
      picture:
        "https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fwifi-router_1731581662021_324c72ef6e8a.png&w=96&q=75",
      heading: "WiFi Router",
      description:
        "Seamless integration with smart home automation systems for better security management.",
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
          className="lg:h-[80vh] w-full object-cover sm:h-96"
        />
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Left: Images Section */}
        <div className="flex flex-wrap gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                width={250}
                src={image.src}
                alt={image.label}
                className="rounded-md"
              />
              <div className="p-2 text-center">
                <p className="text-sm font-semibold">{image.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Content Section */}
        <div className="p-6 flex flex-col justify-center">
          <h1 className="text-6xl font-bold">Welcome to Trinai</h1>
          <p className="text-xl leading-relaxed mt-4">
            We are pioneering leaders in advanced surveillance solutions
            designed to elevate security across diverse environments. Our
            commitment to excellence drives us to deliver cutting-edge
            technologies that ensure safety, efficiency, and peace of mind for
            our clients.
          </p>

          {/* Services List */}
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

            {/* View Products Button */}
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

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mt-20">
        <div className="p-6 bg-gray-100 rounded-xl shadow-md pt-56">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>
            Our mission is to create secure and safe environments that empower
            individuals and organizations to thrive. We are dedicated to
            providing innovative surveillance solutions that protect assets and
            foster peace of mind.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Ffreepik__candid-image-photography-natural-textures-highly-r__95134_1731581085890_998bc5cc08e0.png&w=640&q=75"
            alt="Medium_image"
            className="rounded-lg object-cover"
          />
        </div>

        <div className="p-6 bg-gray-100 rounded-xl shadow-md pt-56">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p>
            Our vision is to be the foremost provider of comprehensive security
            solutions, setting the standard for safety and innovation across all
            sectors.
          </p>
        </div>
      </div>

      {/* Core Business Section */}
      <div className="m-10 grid grid-cols-2 bg-slate-200 pt-10 pl-20 pr-20 space-x-6">
        <div>
          <h1 className="font-bold text-6xl">Our Core Business</h1>
          <p className="text-xl text-gray-600">
            Our core business revolves around advanced surveillance solutions
            for various environments, including commercial, educational, and
            public sectors.
          </p>
        </div>
        <img
          src="https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fhome-camera-cctv-monitoring-system-alarm-smart-house-video_1729858226691_590e1ba17b48.png&w=640&q=75"
          alt="Business"
        />
      </div>

      <div className="carousel_container p-10 bg-slate-200 m-10">
        <Carousel autoplay dots={true}>
          {groupedFeatures.map((group, index) => (
            <div key={index} className="p-5">
              <Row gutter={[16, 16]} justify="center">
                {group.map((feature, idx) => (
                  <Col key={idx} xs={24} sm={12} md={6}>
                    <div className="w-60 h-72 bg-white shadow-md rounded-lg p-5 text-center flex flex-col items-center">
                      <img
                        src={feature.picture}
                        alt={feature.heading}
                        className="w-16 h-16 mb-3 object-contain"
                      />
                      <h2 className="text-lg font-bold mb-2">
                        {feature.heading}
                      </h2>
                      <p className="text-sm text-gray-600 flex-grow">
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

      <div className="foundation_container  m-10 ">
        <div className="main_heading_container text-center pt-10">
          <h1 className="font-bold text-3xl">Our Solid Foundation</h1>
          <p>Built on Trust, Secured by Innovation.</p>
        </div>

        <div className="threecollum grid grid-cols-3 p-10 space-x-16">
          <div className="matter">
            <h1 className="font-bold text-2xl">Always Focus On Quality</h1>
            <p className="text-xl">
              Hi-Focus prioritizes quality by committing to excellence in all
              aspects of its operations. Leveraging advanced technology and
              rigorous testing, the company ensures that its products ranging
              from state of the art CCTV systems to integrated management
              software meet the highest industry standards.
            </p>
          </div>

          <div className="right_image">
            <img
              src="https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fpikaso_texttoimage_cctv-image-in-public-where-focus-on-cctv--(1)_1729858339024_8bdb85c9db9b.png&w=384&q=75"
              alt=""
            />
          </div>
          <div className="left_image">
            <img
              src="https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fpikaso_texttoimage_cctv-image-in-public-where-focus-on-cctv--(2)_1729858350210_6727284604ed.png&w=384&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="som_container grid grid-cols-2 space-x-8 m-10 p-10">
        <div className="left_container ">
          <img
            src="https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fpikaso_texttoimage_cctv-image-in-public-where-focus-on-cctv-_1729858389940_16243449d9c8.png&w=750&q=75"
            alt=""
          />
        </div>
        <div className="right_container">
          <h1 className="text-4xl font-bold">In House Manufactureing</h1>
          <p className="text-xl">
            Our CCTV cameras are meticulously crafted through in-house
            manufacturing with an eye for detail by the best engineers, enabling
            complete control over quality, innovation, and precision.
          </p>
        </div>
      </div>
      <div className="sucess_stories bg-slate-200 p-10">
        <h1 className="text-4xl font-bold">Success Stories</h1>
        <p className="text-xl">
          Experience comprehensive home security solutions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          <div>
            <img
              src="https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fhi-focus-india-1440-x-540_esi-hospital-chennai-ayanavaram_1740391451467_4294683be726.jpg&w=1920&q=75"
              alt="Image 1"
              className="w-full h-40 object-cover rounded-md shadow-md"
            />
            <p>Case Study: Guarding Every Minute at ESIC Hospital,</p>
          </div>
          <div>
            <img
              src="https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fdesktop_1739452086102_fb4cc3f60203.jpg&w=1920&q=75"
              alt="Image 2"
              className="w-full h-40 object-cover rounded-md shadow-md"
            />
            <p>
              Case Study: Enhancing Surveillance at Egmore Museum with Hifocus
              CCTV Solutions
            </p>
          </div>
          <div>
            <img
              src="https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fframe-295_1731565934475_3f4ad49d6c0c.png&w=1920&q=75"
              alt="Image 3"
              className="w-full h-40 object-cover rounded-md shadow-md"
            />
            <p>Transforming Security at Suryoday Institute of Technology</p>
          </div>
          <div>
            <img
              src="https://hifocuscctv.com/_next/image?url=https%3A%2F%2Fapi.hifocuscctv.com%2Fpublic%2Fcontent%2Fframe-286_1731565224527_6dcd3d083a82.png&w=1920&q=75"
              alt="Image 4"
              className="w-full h-40 object-cover rounded-md shadow-md"
            />
            <p>Dhanvantar Securing University’s New Campus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
