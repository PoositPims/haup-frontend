import React, { useState } from "react";
import { Collapse, Nav, NavItem, NavLink } from "react-bootstrap";
import classes from "./SideBar.module.css";
import Card from "react-bootstrap/Card";

function Sidebar({ closeSideBar, isOpen, toggleSidebar }) {
  const [close, setClose] = useState(true);

  function handleCloseSidebar() {
    closeSideBar(false);
  }
  return (
    <div>
      <Collapse in={isOpen} dimension="width" style={{ position: "absolute" }}>
        <div id="example-collapse-text">
          <Card body style={{ width: "400px" }}>
            <Nav className="d-flex flex-column">
              <NavItem>
                <NavLink href="#">Item 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Item 2</NavLink>
              </NavItem>
            </Nav>
          </Card>
        </div>
      </Collapse>
    </div>
  );
}

export default Sidebar;
