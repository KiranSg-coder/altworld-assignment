import React from "react";
import List from "../component/List";
import UserDetails from "../component/Details";
import SideBar from "../component/SideBar";

const MainPage = () => {
  return (
    <div className="homeContainer">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="rightSideContainer">
        <div className="saleList">
          <List />
        </div>
        <div className="details">
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
