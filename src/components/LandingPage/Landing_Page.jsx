import sideimage from "../../assets/images/landingsofa.png";
import Header from "./Header";
import React from "react";

function Landing_Page()
{
  const handleButtonClick = () => {
    window.location.href = "/login"; 
  };
  return (
    <div className="landing-root">
      <div className="first-page">
        <Header />
        <div className="body-center">
          <div className="landing-body-text">
            <p className="landing-body-text-first">
              <span className="green-span">SELL</span> AND BUY - FIND YOUR
              PERFECT <span className="green-span">DELIVERY!</span>
            </p>
            <p className="landing-body-text-second">
              Trade your treasures, find new pleasures - Exchange with ease on
              our website
            </p>
            <button className="btn" onClick={handleButtonClick}>
              REGISTER NOW
            </button>
          </div>
          <div className="landing-body-images">
            <img src={landingsofa} width="600px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing_Page;
