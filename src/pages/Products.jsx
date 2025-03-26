import React, { useEffect } from "react";
import bgpng from "../images/acam.png";
import bullet from "../images/security-camera.png";
import dom from "../images/cctv (2).png";
import eyeball from "../images/cctv-camera.png";
import ptz from "../images/cctv.png";
import nvr from "../images/dvr.png";
import poe from "../images/hub.png";
import server from "../images/servers.png";
import adnvr from "../images/dvr (1).png";
import { useNavigate } from "react-router-dom";
import { ScrollTop } from "primereact/scrolltop";
import Extra from "../components/Extra";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className=" bg-slate-100 ">
      <Extra>
        <div className="pb-20">
          <div>
            <img src={bgpng} height={600} width={600}></img>
          </div>
        </div>
      </Extra>
      <div className="relative  z-2 -mt-44 lg:p-20 md:p-10 p-5">
        <div className="  grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 gap-10 p-5 bg-white lg:p-20 rounded-lg">
          <div
            className=" shadow-md hover:scale-105 p-5  cursor-pointer"
            onClick={() => {
              navigate(
                `/categories?query=${encodeURIComponent("Bullet Cameras")}`
              );
            }}
          >
            <div className=" flex justify-center items-center">
              <img className=" text-center" src={bullet}></img>
            </div>
            <div className=" text-gray-500 font-semibold flex justify-center items-center">
              Bullet Cameras
            </div>
          </div>
          <div
            className=" shadow-md hover:scale-105 p-5 cursor-pointer "
            onClick={() => {
              navigate(
                `/categories?query=${encodeURIComponent("Dome Cameras")}`
              );
            }}
          >
            <div className=" flex justify-center items-center">
              <img className=" text-center" src={dom}></img>
            </div>
            <div className=" text-gray-500 font-semibold flex justify-center items-center">
              Dome Cameras
            </div>
          </div>
          <div
            className=" shadow-md hover:scale-105 p-5 cursor-pointer "
            onClick={() => {
              navigate(
                `/categories?query=${encodeURIComponent("Eyeball Cameras")}`
              );
            }}
          >
            <div className=" flex justify-center items-center">
              <img className=" text-center" src={eyeball}></img>
            </div>
            <div className=" text-gray-500 flex justify-center font-semibold items-center">
              Eyeball Cameras
            </div>
          </div>
          <div
            className=" shadow-md p-5 cursor-pointer hover:scale-105 "
            onClick={() => {
              navigate(
                `/categories?query=${encodeURIComponent("PTZ Cameras")}`
              );
            }}
          >
            <div className=" flex justify-center items-center">
              <img className=" text-center" src={ptz}></img>
            </div>
            <div className=" text-gray-500 font-semibold flex justify-center items-center">
              PTZ Cameras
            </div>
          </div>
          <div
            className=" shadow-md hover:scale-105 p-5 cursor-pointer "
            onClick={() => {
              navigate(
                `/categories?query=${encodeURIComponent(
                  "Network Video Recorder"
                )}`
              );
            }}
          >
            <div className=" flex justify-center items-center">
              <img className=" text-center" src={nvr}></img>
            </div>
            <div className=" text-gray-500 flex justify-center items-center">
              Network Video Recorder
            </div>
          </div>
          {/* <div className=" shadow-md hover:scale-105 p-5 cursor-pointer ">
            <div className=" flex justify-center items-center">
              <img className=" text-center" src={poe}></img>
            </div>
            <div className=" text-gray-500 flex justify-center items-center">
              POE Switches
            </div>
          </div> */}
          <div
            className=" shadow-md hover:scale-105 p-5  cursor-pointer"
            onClick={() => {
              navigate(`/categories?query=${encodeURIComponent("Server")}`);
            }}
          >
            <div className=" flex justify-center items-center">
              <img className=" text-center" src={server}></img>
            </div>
            <div className=" text-gray-500 flex justify-center items-center">
              Server
            </div>
          </div>
          <div className=" shadow-md hover:scale-105 p-5 cursor-pointer ">
            <div className=" flex justify-center items-center">
              <img className=" text-center" src={adnvr}></img>
            </div>
            <div className=" text-gray-500 flex text-center  mt-2 justify-center items-center">
              Hybrid Video Recorder
            </div>
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

export default Products;
