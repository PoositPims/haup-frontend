import React, { useState } from "react";
import { Collapse, Nav, NavItem, NavLink } from "react-bootstrap";
import classes from "./SideBar.module.css";
import Card from "react-bootstrap/Card";

function Sidebar({ isOpen }) {
  return (
    <div>
      <div id="example-collapse-text">
        <Card body>
          <Nav className="d-flex flex-column">
            <NavItem>
              <NavLink href="/">All Car</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/available-car">Available</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/not-available">Not available</NavLink>
            </NavItem>
          </Nav>
        </Card>
      </div>
    </div>
  );
}

export default Sidebar;
