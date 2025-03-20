import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
