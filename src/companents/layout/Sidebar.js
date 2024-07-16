import React from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import classes from "./SideBar.module.css";
import Card from "react-bootstrap/Card";

function Sidebar() {
  return (
    <div tyle={{ minHeight: "100vh" }}>
      <Card
        style={{ marginTop: "20px", borderRadius: "20px", minHeight: "100vh" }}
      >
        <div>
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
        </div>
      </Card>
    </div>
  );
}

export default Sidebar;
