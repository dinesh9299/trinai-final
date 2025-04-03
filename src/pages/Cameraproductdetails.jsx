import React, { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import products from "../components/Mainproducts";
// import pdf from "DGS-F1006P-E.pdf";
import { FaHandPointRight } from "react-icons/fa";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Viewer } from "@react-pdf-viewer/core";
import { FaArrowRight } from "react-icons/fa";

import { Button } from "antd";
import { IoMdDownload } from "react-icons/io";
import { ScrollTop } from "primereact/scrolltop";

// Set the PDF worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Cameraproductsdetails() {
  //   const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const id = searchParams.get("query"); // Get the query parameter value

  // Debug logs for troubleshooting
  //   console.log("Received URL pathname:", location.pathname);
  const product = products.find((p) => p.id === parseInt(id));

  // Adjust conversion based on your data type:
  // If models are numbers, use parseInt; if strings, the current code works.
  //   const product = products.find((p) => p.id.toString() === id);

  console.log("Found product:", product);
  const [preview, setPreview] = useState(true);
  const [download, setDownload] = useState(false);

  const HandlePreview = () => {
    // alert("kjhgfd");
    setDownload(false);
    setPreview(true);
  };

  const HandleDownload = () => {
    setPreview(false);
    setDownload(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-6 pt-20 bg-white text-gray-500 ">
      {/* <h1 className="text-3xl font-bold">{product.productType}</h1>

      {/* Clickable image for navigation (if needed) */}

      {/* Main producyt image */}
      <div className=" lg:grid grid-cols-2 gap-10 h-full w-full ">
        <div className=" flex justify-center items-center h-full w-full">
          {" "}
          <img
            src={product.picture}
            alt={product.model}
            className="w-full md:w-1/2 mx-auto rounded-lg shadow-lg mt-4"
          />
        </div>

        <div className=" h-full w-full">
          {" "}
          <h2 className="text-xl font-semibold mt-4">Key Features:</h2>
          <ul className="list-disc ml-6 mt-5">
            {product.keyFeatures.map((feature, index) => (
              <li
                key={index}
                className="text-gray-600 
                "
              >
                {/* <div>
                  <FaArrowRight color="red" />
                </div> */}
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className=" text-black text-3xl font-bold mt-4">Details</div>

        <div className=" flex gap-6 pt-3 px-5 bg-slate-200 my-5 rounded-md">
          <div
            className={`${
              preview ? "bg-white text-orange-600" : ""
            }   h-10 p-2 rounded-t-md  font-semibold cursor-pointer`}
            onClick={HandlePreview}
          >
            Show Preview
          </div>
          <div
            onClick={HandleDownload}
            className={`${
              download ? "bg-white text-orange-600" : ""
            }   h-10 p-2 rounded-t-md  font-semibold cursor-pointer`}
          >
            Download
          </div>
          {/* <div>{product.document}</div> */}
        </div>

        {preview && !download && (
          <div className=" border overflow-hidden w-full">
            <Viewer fileUrl={product.document} className="border" />
          </div>
        )}
        {download && !preview && (
          <div className="overflow-hidden w-full flex justify-center items-center">
            <a href={product.document} download={`trinai-${product.model}`}>
              <Button className="px-20 py-5 font-bold text-xl flex gap-2 items-center">
                <IoMdDownload />
                Download
              </Button>
            </a>
          </div>
        )}
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
}

export default Cameraproductsdetails;
