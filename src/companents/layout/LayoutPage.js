import React, { useState } from "react";
import MainNavbar from "./MainNavbar";
import Sidebar from "./Sidebar";

function LayoutPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <MainNavbar />
      <button className="btn btn-primary" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default LayoutPage;
