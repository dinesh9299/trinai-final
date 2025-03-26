import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import mainproducts from "../components/Mainproducts";
import { Viewer } from "@react-pdf-viewer/core";
import background from "../images/triani-image-1.jpg";
import first from "../images/2.png";
import second from "../images/3.png";
import third from "../images/4.png";
import fourth from "../images/5.png";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { ScrollTop } from "primereact/scrolltop";
import trinai5 from "../images/trinai-5.jpg";

const Categories = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("query");
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const name = id.split(" ")[0];

    if (id.endsWith("ras") || id.endsWith("Recorder")) {
      // alert(name);
      const filteredProducts = mainproducts
        .filter((product) => product.cameraType === name) // Filter by cameraType
        .sort((a, b) => a.mp - b.mp); // Sort by type in ascending order

      setProducts(filteredProducts);
    } else {
      const products = mainproducts.filter((product) => product.name === id);
      setProducts(products);
    }
  }, [id, mainproducts]); // Add dependencies to avoid unnecessary re-renders

  console.log("producst", products);
  return (
    <div>
      <div className="relative h-[50vh] w-full overflow-hidden">
        {/* Background image with fixed effect */}
        <div
          className="absolute inset-0 bg-fixed bg-center  bg-cover"
          style={{
            backgroundImage: `url(${trinai5})`,
          }}
        ></div>

        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Optional heading or text content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">
            {id}
            {id.endsWith("ras") ||
            id.startsWith("Smart") ||
            id.startsWith("Server")
              ? ""
              : "'s"}
          </h1>
        </div>
      </div>
      {id.startsWith("Smart") ? (
        <div className="  bg-slate-50 text-gray-500 p-10   ">
          {/* <div className=" flex justify-center font-bold mb-10 text-orange-600 items-center text-7xl">
            SMART GPU WITH<span className=" text-black ms-4"> AI CAMERA</span>
          </div>
          <div className="px-10">
            <div className=" text-sky-500 font-bold text-5xl mt-5 ">
              Understanding CCTV with DVR
            </div>
            <div className=" text-xl text-black font-semibold mt-4">
              CCTV (Closed-Circuit Television) cameras with DVR (Digital Video
              Recorder) are a popular surveillance solution for homes. Here’s
              how they work
            </div>
          </div>
          <div className=" p-20">
            <div className="  grid grid-cols-2 gap-20 ">
              <div>
                <img className="" src={first}></img>
              </div>
              <div>
                <img src={second}></img>
              </div>
              <div>
                <img src={third}></img>
              </div>
              <div>
                <img src={fourth}></img>
              </div>
            </div>
            <div>
              <div className=" text-xl text-sky-600 font-semibold">
                Benefits for Home Use
              </div>
              <div className=" text-xl text-sky-600 font-semibold">
                Benefits for Home Use
              </div>
            </div>
          </div> */}
          <div className="w-full -mt-40 bg-red-50  items-center flex justify-center">
            <Viewer fileUrl="/smartgpu.pdf" className="w-full h-screen" />
          </div>
        </div>
      ) : (
        <div>
          <div className=" bg-white  text-gray-500 grid lg:grid-cols-4 gap-7 p-5">
            {products.map((product, index) => (
              <div
                key={index}
                className=" border p-2 rounded-lg font-semibold "
              >
                {/* <div className=" text-center">{product.model}</div> */}
                <div className=" min-h-52 flex justify-center items-center">
                  {" "}
                  <img
                    onClick={() =>
                      navigate(
                        `/cemaradetails?query=${encodeURIComponent(product.id)}`
                      )
                    }
                    src={product.picture}
                    className=" text-center  hover:scale-105 transition  cursor-pointer"
                  ></img>
                </div>
                <hr />
                <div className="bg-white text-orange-600 p-2">
                  {!id.endsWith("NVR") &&
                    !id.endsWith("Recorder") &&
                    !id.startsWith("Server") && <span>{product.mp}MP</span>}
                  <span className="text-gray-500 ms-3 text-center">
                    {product.model}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
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

export default Categories;
