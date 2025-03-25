import React, { useEffect } from "react";
import mainproducts from "../components/Mainproducts";
import { useNavigate } from "react-router-dom";

function Viewproducts() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-12  bg-white">
      <div className="main_container mt-11">
        <div
          className="p-6 bg-white 
        "
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Available Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mainproducts.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition duration-300"
              >
                {/* Image container with fixed size and centered image */}
                <div className="image_container w-60 h-40 mx-auto overflow-hidden flex justify-center items-center mb-4">
                  <img
                    src={product.picture}
                    alt={product.model}
                    className="w-60 h-30 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                    onClick={() =>
                      navigate(
                        `/cemaradetails?query=${encodeURIComponent(product.id)}`
                      )
                    }
                  />
                </div>
                <div className="second_container">
                  <h3 className="text-lg text-gray-500 font-semibold mt-2">
                    {product.model}
                  </h3>
                  <p className="text-gray-600">{product.brand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewproducts;
