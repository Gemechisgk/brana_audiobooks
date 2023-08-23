import React, { useState, useEffect } from "react";

function ScrollLine() {
  const [lineWidth, setLineWidth] = useState("10em");

  useEffect(() => {
    function handleScroll() {
      const newWidth = 100 + window.scrollY / 10;
      setLineWidth(`${newWidth}px`);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="scrollline"
      style={{
        width: lineWidth,
        height: "0.3em",
        backgroundColor: "#31c719",
        position: "relative",
        top: "0",
        left: "0",
      }}
    ></div>
  );
}
export default ScrollLine;
