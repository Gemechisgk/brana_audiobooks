import logo from "../../assets/images/logoWhite.png";
import { Link } from "react-scroll";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
    setShowCloseIcon(!showCloseIcon);
  };

  const handler = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="header">
      <div className="logo logo-section">
        <img src={logo} />
        <h2> LEWACH</h2>
      </div>
      <nav className={`nav ${showNav ? "show-nav" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link
              className="links"
              to="/"
              smooth={true}
              duration={1500}
              onClick={handler}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="links"
              to="services"
              smooth={true}
              duration={1500}
              onClick={handler}
            >
              SERVICES
            </Link>
          </li>

          <li>
            <Link
              className="links"
              to="aboutus"
              smooth={true}
              duration={1500}
              onClick={handler}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              className="links"
              to="testimonial"
              smooth={true}
              duration={1500}
              onClick={handler}
            >
              TESTIMONIAL
            </Link>
          </li>
          <li>
            <Link
              className="links"
              to="contactus"
              smooth={true}
              duration={1500}
              onClick={handler}
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {showCloseIcon && (
          <div className="close-icon" onClick={toggleNav}>
            <FaTimes />
          </div>
        )}
      </nav>
      <div className="login-section">
        <ul className="nav-links">
          <li>
            <a className="login-link links" href="/login">
              LOGIN
            </a>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleNav}>
        {showNav ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
