import UserDetails from "../component/Details";
import React from "react";
import SalesList from "../component/SalesList";
import SideBar from "../component/SideBar";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="rightSideContainer">
        <div className="saleList">
          <SalesList />
        </div>
        <div className="details">
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
