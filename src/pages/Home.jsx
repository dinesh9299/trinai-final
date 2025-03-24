import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";
import { ScrollTop } from "primereact/scrolltop";
import { BsEmojiSmile } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { BsAward } from "react-icons/bs";
import CountUp from "react-countup";
import carousel1 from "../images/triani-image-1.jpg";
import carousel2 from "../images/new-2-01.jpg";

import { AntDesignOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Space } from "antd";
import { createStyles } from "antd-style";
const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const Home = () => {
  const { styles } = useStyle();

  const contentStyle = {
    margin: 0,
    height: "100vh",
    width: "100vw",
    color: "#fff",
    lineHeight: "160px",

    textAlign: "center",
    background: "#364d79",
  };

  const logos = [
    "https://brihaspathi.com/assets-bt/img/logo/1.png",
    "https://brihaspathi.com/assets-bt/img/logo/2.png",
    "https://brihaspathi.com/assets-bt/img/logo/3.png",
    "https://brihaspathi.com/assets-bt/img/logo/4.png",
    "https://brihaspathi.com/assets-bt/img/logo/5.png",
    "https://brihaspathi.com/assets-bt/img/logo/6.png",
    // "https://brihaspathi.com/assets-bt/img/logo/7.png",
    // "https://brihaspathi.com/assets-bt/img/logo/8.png",
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After 3 seconds, loading becomes false
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      //     <div id="loading">
      //       <div id="loader" className="loading--theme">
      //         <div className="cssload-spinner"></div>
      //       </div>
      //     </div>

      <div className="flex flex-col justify-center items-center h-screen bg-gray-400">
        {/* CCTV Camera GIF */}
        <div className=" flex">
          {" "}
          <img
            src="https://media.tenor.com/kh1ED9iY26UAAAAm/cam-camera.webp"
            width={200}
            height={200}
            alt="CCTV Loader"
            className="w-auto h-auto object-contain"
          />
          {/* <img
            src="https://media.tenor.com/zd_zrArvOtsAAAAi/camera.gif"
            // width={200}
            // height={200}
            alt="CCTV Loader"
            className="w-32 h-32 object-contain"
          /> */}
        </div>
        {/* Loading Text */}
        <p className="text-white text-lg mt-4 animate-pulse">
          Scanning... Please wait
        </p>
      </div>
    );
  }

  return (
    <div
      className="  w-full  bg-white "
      //   style={{ background: "linear-gradient(to bottom, #4568DC, #B06AB3)" }}
    >
      {/*Carousel */}
      <div className="">
        <Carousel
          autoplay
          autoplaySpeed={3000}
          dotPosition="bottom"
          arrows
          infinite
        >
          <div className="">
            <img
              src={carousel1}
              alt="Slide 1"
              className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover "
            />
          </div>
          <div>
            <img
              src="http://trinai.in/Images/cctv%203.jpg"
              alt="Slide 2"
              className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover "
            />
          </div>
          <div>
            <img
              src={carousel2}
              alt="Slide 3"
              className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover"
            />
          </div>
        </Carousel>
      </div>
      {/*carousel end */}
      {/* */}
      <div className=" bg-slate-50 p-5">
        <div className=" lg:px-10 pt-10 lg:grid  grid-cols-2 lg:my-8 ">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="text-orange-600 text-xl font-bold mb-2 ms-1">
              Abouot Us
            </div>
            <div className=" text-4xl  font-serif text-gray-500">
              Innovative security, powered by precision.
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className=" mt-2 text-gray-500"
          >
            At Trinai, we specialize in providing cutting-edge security
            solutions and data communication technologies designed to meet the
            evolving needs of modern industries. With a strong focus on
            integrated surveillance systems, data storage, and communication
            infrastructure, we are committed to offering innovative and reliable
            services that protect what matters most.
          </motion.div>
        </div>
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
                <img
                  className=" rounded-md"
                  src="http://trinai.in/Images/NewspageImages/city.jpg"
                ></img>
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
                Trinai is a Security Solutions Provider, We specialize in total
                integrated surveillance, Data Communication and Storage
                Solutions Trinai is a Security Solutions Provider, We specialize
                in total integrated surveillance, Data Communication and Storage
                Solutions
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

      <div className=" bg-slate-50">
        <div
          className="lg:grid 
        
           rounded-md grid-cols-2 p-8"
        >
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="text-orange-600 text-xl font-bold my-2 ms-1">
              Our Services
            </div>
            <div className=" text-gray-500 font-serif font-bold text-2xl m-1 ">
              Surveillance Systems
            </div>

            <div className=" text-start  mt-5 text-gray-500 text-xl">
              "From CCTV cameras to smart monitoring systems, we offer a range
              of solutions for real-time monitoring and enhanced security."
            </div>
            <div className=" mt-7 text-gray-500 font-serif font-bold text-2xl m-1 ">
              Data Communication Solutions
            </div>

            <div className=" text-start  mt-5 text-gray-500 text-xl">
              "Trinai specializes in seamless and secure data communication
              systems, ensuring that your network infrastructure is always
              protected and up-to-date."
            </div>
          </motion.div>

          <div className="lg:px-20 lg:pb-20">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img
                className=" rounded-md"
                src="http://trinai.in/Images/SolutionImages/airport.jpg"
              ></img>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="lg:grid rounded-md grid-cols-2 p-8 shadow shadow-white border">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src="http://trinai.in/Images/DOME%20(2).png"></img>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className=" "
          >
            <div className=" text-gray-500 font-serif font-bold text-2xl m-2 ">
              VELOCITY SERIES
            </div>
            <div className=" text-gray-500 font-serif font-bold text-2xl m-2 ">
              NETWORK CAMERAS
            </div>
            <div className=" text-start mx-2 mt-5 text-gray-700 text-xl">
              Trinai AI CCTV cameras are network IP cameras that deliver
              advanced analytical functions like vehicle detection, Face
              recognition, Face detection, people counting.
            </div>
            <div className=" mx-2 my-10">
              <ConfigProvider
                button={{
                  className: styles.linearGradientButton,
                }}
              >
                <Space>
                  <Button
                    type="primary"
                    size="large"
                    icon={<AntDesignOutlined />}
                  >
                    View more
                  </Button>
                  {/* <Button size="large">Button</Button> */}
                </Space>
              </ConfigProvider>
            </div>
          </motion.div>
        </div>
      </div>

      {/**lkjhc */}

      <div
      //   className="
      //    bg-slate-50"
      >
        <div className="lg:p-10 bg-slate-50">
          <div className="lg:grid mt-4   rounded-md grid-cols-2 p-8 ">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="  "
            >
              <div className=" text-gray-500 font-serif font-bold text-2xl m-2 ">
                PROTECT YOUR LOVED ONES
              </div>
              <div className=" text-gray-500 font-serif font-bold text-2xl m-2 ">
                SMART IP CAMERAS
              </div>
              <div className=" text-start mx-2 mt-5 text-gray-700 text-xl">
                A smart home allows homeowners to control appliances,
                thermostats, lights, and other devices remotely using a
                smartphone or tablet through an internet connection.
              </div>
              <div className=" mx-2 my-10">
                <ConfigProvider
                  button={{
                    className: styles.linearGradientButton,
                  }}
                >
                  <Space>
                    <Button
                      type="primary"
                      size="large"
                      icon={<AntDesignOutlined />}
                      className="bg-green-500 text-white hover:bg-green-700 border-none"
                    >
                      View more
                    </Button>
                    {/* <Button size="large">Button</Button> */}
                  </Space>
                </ConfigProvider>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img src="http://trinai.in/Images/Bullet_1%20(4).png"></img>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="  flex justify-center items-center pb-10 ">
        <div
          className=" h-auto  w-full "
          style={{
            // backgroundImage: `url("https://i.pinimg.com/1200x/a1/23/35/a12335713917dc975cf740a18ade5e3a.jpg")`,
            backgroundSize: "cover",
            width: "100vw",
            backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",

            // You can adjust the height to fit your layout
            //   filter: "sepia(1) contrast(1.2) brightness(0.9) saturate(1.5)", // Vintage effect
          }}
        >
          <div className=" lg:grid grid-cols-2 pt-16 px-10 pb-10">
            {" "}
            <div className="h-full flex items-center justify-start">
              <div className="flex flex-col justify-center items-center mb-2 ms-1 ">
                <div className=" flex flex-col gap-4">
                  <div className=" text-orange-600 font- text-xl font-bold">
                    Our Stats
                  </div>
                  <div className=" text-gray-400 text-xl">
                    Innovating Security with Cutting-Edge Technology
                  </div>
                  <div className=" text-gray-400 text-xl">
                    Trinai is at the forefront of providing advanced security
                    solutions, revolutionizing surveillance systems, and
                    ensuring unmatched protection for businesses and homes
                    across the globe.
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex  justify-around">
              {/* <BsEmojiSmile /> */}
              <div className=" flex flex-col gap-3 justify-center items-start">
                <div>
                  <BsEmojiSmile color="gray" size={60} />{" "}
                </div>
                <div className="text-orange-600 text-4xl font-mono relative">
                  <CountUp start={0} end={200} duration={8} separator="," />
                  <div className="absolute top-0 left-16 text-lg text-orange-600">
                    +
                  </div>
                </div>

                <div className=" text-gray-500  text-2xl font-bold">
                  Happy clients
                </div>
              </div>
              <div className=" flex flex-col gap-3 justify-center items-start">
                <div>
                  <FiActivity color="gray" size={60} />{" "}
                </div>
                <div className="text-orange-600 text-4xl font-mono relative">
                  <CountUp start={0} end={130} duration={8} separator="," />
                  <div className="absolute top-0 left-16 text-lg text-orange-600">
                    +
                  </div>
                </div>
                <div className=" text-gray-500  text-2xl font-bold">
                  Projects Done
                </div>
              </div>
              <div className=" flex flex-col gap-3 justify-center items-start">
                <div>
                  <BsAward color="gray" size={60} />{" "}
                </div>
                <div className="text-orange-600 text-4xl font-mono relative">
                  <CountUp start={0} end={60} duration={8} separator="," />
                  <div className="absolute top-0 left-11 text-lg text-orange-600">
                    +
                  </div>
                </div>
                <div className=" text-gray-500  text-2xl font-bold">
                  Awards Won
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" bg-slate-50 p-10"></div> */}

      {/* <div className=" p-5">
        <div className=" text-6xl font-thin font-semibold">Products</div>
        <div className=" text-2xl mt-2 text-gray-700">
          Organizations can discover the ideal solution here. Explore our three
          core offerings.
        </div>
      </div> */}
      {/* <div className="p-5">
        <div className=" font-mono text-5xl text-orange-600">Our Clients</div>
        <div className=" text-gray-500 text-4xl font-extralight">
          Your Success, Our Reputation
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full py-4 bg-white">
          <div className="inline-block animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="inline-flex items-center bg-slate-400 py-7"
              >
                {logos.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`logo-${index}`}
                    className="h-36 w-36 mx-8" // control height, keep auto width, and add margin between
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div> */}

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

export default Home;
