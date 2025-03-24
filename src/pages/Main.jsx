import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className=" overflow-hidden  ">
      <div className=" w-full">
        <Header></Header>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
