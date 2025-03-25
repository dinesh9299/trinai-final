import React, { useEffect, useState } from "react";
import sollutionbanner from "../images/cctv-security-online-camera-indoor (2).jpg";
import solutionsByIndustry from "../components/sollutionbyindustry";
import { Image } from "antd";
import Senario from "../components/Secondsollution";
import Solutionfunction from "../components/Thirdsollution";
import { ScrollTop } from "primereact/scrolltop";

function Solutions() {
  const [selectedIndustry, setSelectedIndustry] = useState(
    solutionsByIndustry[0]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sollution_maincontainer text-gray-500">
      <div className="relative w-full">
        <img
          className="w-full h-[250px] md:h-[500px] lg:h-[700px] object-cover"
          src={sollutionbanner}
          alt="dfgh"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/50">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Our Solutions
          </h1>
          <p className="text-white text-base md:text-lg">
            Comprehensive surveillance solutions for all applications
          </p>
        </div>
      </div>

      <div className="Solution_by_insustry bg-slate-200 h-full">
        <div className="main_heading text-center py-6">
          <h1 className="font-bold text-4xl">Solutions by Industry</h1>
        </div>

        <div className="container mx-auto p-5">
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {solutionsByIndustry.map((industry, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 border rounded-md ${
                  selectedIndustry.industry === industry.industry
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {industry.industry}
              </button>
            ))}
          </div>

          {/* Display Selected Industry Solutions */}
          <div className="p-4 border rounded-lg shadow-lg bg-white">
            <img
              src={selectedIndustry.image}
              alt={selectedIndustry.industry}
              className="w-[600px] mx-auto h-60 object-cover rounded-md"
            />

            <h2 className="text-xl font-semibold mt-2">
              {selectedIndustry.industry}
            </h2>
            <p className="text-sm text-gray-600">
              {selectedIndustry.description}
            </p>

            <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedIndustry.solutions.map((solution, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 p-3 border rounded-md shadow-sm bg-gray-100"
                >
                  <Image
                    src={solution.image}
                    alt={solution.name}
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <h3 className="text-md font-semibold">{solution.name}</h3>
                    <p className="text-xs text-gray-500">
                      {solution.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="solutionsenario">
        <Senario />
      </div>
      <div className="sollution_function">
        <Solutionfunction />
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

export default Solutions;
