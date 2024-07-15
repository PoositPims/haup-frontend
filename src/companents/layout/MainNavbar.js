import React from "react";
import classes from "./MainNavbar.module.css";
import { NavLink } from "react-bootstrap";

function MainNavbar() {
  return (
    <header>
      <div className={classes.header}>
        <div className={classes.headerText}>
          <NavLink href="/">
            <h2>CarSharing Back office</h2>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default MainNavbar;
