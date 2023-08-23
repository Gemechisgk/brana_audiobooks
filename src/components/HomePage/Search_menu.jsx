import phoneMenu from "../../assets/images/phone-sidebar.png";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import HomePage_sidebar from "./HomePage_sidebar";
import Upload from "./Upload";
import HomePageSideBar from "./HomePageSideBar";

function Search_menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function handler() {
    setIsOpen(!isOpen);
    document.body.classList.add("no-scroll");
  }

  function handleClose() {
    setIsOpen(!isOpen);
    document.body.classList.remove("no-scroll");
  }

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="search-menu">
      <div>
        {/* <div className="search-menu-img">
          <img src={phoneMenu} onClick={handler} />
        </div> */}
        <HomePageSideBar />
        {isOpen && (
          <div className="home-overlay">
            <div>
              <HomePage_sidebar handleClose={handleClose} />
            </div>
          </div>
        )}
      </div>
      <div className="search-section">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          name="search"
        />
        {windowSize < 650 ? (
          <button className="search-btn">
            <FaSearch />
          </button>
        ) : (
          <button className="search-btn">
            <FaSearch /> Search
          </button>
        )}
      </div>
      <Upload />
    </div>
  );
}

export default Search_menu;
