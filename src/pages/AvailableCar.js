import React from "react";
import MainNavbar from "../companents/layout/MainNavbar";
import classes from "./Homepahe.module.css";
import Sidebar from "../companents/layout/Sidebar";
import LayoutPage from "../companents/layout/LayoutPage";

function AvailableCar() {
  return (
    <div>
      <LayoutPage />
      <div className={classes.contaciner}>
        <h4>Company car</h4>
      </div>
    </div>
  );
}

export default AvailableCar;
