import React from "react";
import MainNavbar from "./MainNavbar";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
function LayoutPage({ children }) {
  return (
    <div>
      <MainNavbar />
      <Row>
        <Col sm={2} style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
          <Sidebar />
        </Col>
        <Col sm={10} style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
          {children}
        </Col>
      </Row>
    </div>
  );
}

export default LayoutPage;
