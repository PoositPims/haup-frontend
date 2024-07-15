import React, { useState } from "react";
import { Collapse, Nav, NavItem, NavLink } from "react-bootstrap";
import classes from "./SideBar.module.css";
import Card from "react-bootstrap/Card";

function Sidebar({ isOpen }) {
  return (
    <div>
      <Collapse in={isOpen} dimension="width" style={{ position: "absolute" }}>
        <div id="example-collapse-text">
          <Card body style={{ width: "400px" }}>
            <Nav className="d-flex flex-column">
              <NavItem>
                <NavLink href="/">All Car</NavLink>
              </NavItem>
              <NavItem>
                {/* <NavLink href="/availableCar">Available</NavLink> */}
                <NavLink href="/available-car">Available</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/not-available">Not available</NavLink>
              </NavItem>
            </Nav>
          </Card>
        </div>
      </Collapse>
    </div>
  );
}

export default Sidebar;
