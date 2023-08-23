import React from "react";
import Sidebar from "react-sidebar";
import { useState } from "react";
import FullHomepage from "./FullHomepage";
function TestPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={toggleSidebar}>☰ Open Sidebar</button>
      <Sidebar
        sidebar={
          <div>
            <a href="#" onClick={toggleSidebar}>
              Close Sidebar
            </a>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        }
        open={isOpen}
        onSetOpen={toggleSidebar}
        styles={{
          sidebar: {
            background: "white",
            width: "250px",
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            zIndex: 999,
            overflowY: "auto",
          },
          overlay: {
            zIndex: 998,
          },
        }}
      >
        <button onClick={toggleSidebar}>☰ Open Sidebar</button>
        <div>{<FullHomepage />}</div>
      </Sidebar>
    </div>
  );
}

export default TestPage;
