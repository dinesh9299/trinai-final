import React, { useState } from "react";
import {
  useParams,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import products from "../components/Mainproducts";
// import pdf from "DGS-F1006P-E.pdf";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Viewer } from "@react-pdf-viewer/core";

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
  const [preview, setPreview] = useState(false);

  const HandlePreview = () => {
    // alert("kjhgfd");
    setPreview(true);
  };

  return (
    <div className="p-6 lg:mt-20 bg-white text-gray-500 ">
      {/* <h1 className="text-3xl font-bold">{product.productType}</h1>

      {/* Clickable image for navigation (if needed) */}

      {/* Main product image */}
      <img
        src={product.picture}
        alt={product.model}
        className="w-full md:w-1/2 mx-auto rounded-lg shadow-lg mt-4"
      />

      <p className="text-lg text-gray-700 mt-4">{product.brand}</p>
      <h2 className="text-xl font-semibold mt-4">Key Features:</h2>
      <ul className="list-disc ml-6">
        {product.keyFeatures.map((feature, index) => (
          <li key={index} className="text-gray-600">
            {feature}
          </li>
        ))}
      </ul>
      <div>
        <div>PDF Document</div>

        <div className=" flex gap-6 p-5 bg-slate-200 my-5 rounded-md">
          <div
            className={` cursor-pointer" onClick={HandlePreview} ${
              preview ? "bg-white" : ""
            } `}
          >
            Show Preview
          </div>
          <div className=" cursor-pointer">Download</div>
        </div>

        {preview && (
          <div className=" border overflow-hidden w-full">
            <Viewer fileUrl={product.document} className="border" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cameraproductsdetails;
