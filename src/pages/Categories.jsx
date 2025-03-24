import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import mainproducts from "../components/Mainproducts";
import { Viewer } from "@react-pdf-viewer/core";

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
            backgroundImage:
              "url(https://www.shutterstock.com/image-photo/modern-cctv-camera-on-wall-600nw-784897093.jpg)",
          }}
        ></div>

        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Optional heading or text content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">{id}'s</h1>
        </div>
      </div>
      {id.startsWith("Smart") ? (
        <div className=" flex justify-center items-center">
          <Viewer fileUrl="/DGS-F1006P-E.pdf" />;
        </div>
      ) : (
        <div>
          <div className=" bg-slate-50 text-gray-500 grid lg:grid-cols-4 gap-7 p-5">
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
    </div>
  );
};

export default Categories;
