import "./AdminPage.css";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartLine,
  faTruck,
  faUserCog,
  faBell,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import logoBlue from "../../assets/images/logoBlue.png";
import logoWhite from "../../assets/images/logoWhite.png";
import SearchBar from "./SearchBar";
import UploadModal from "../HomePage/UploadModal";
import AdminNotificationModalOne from "./AdminNotificationModalOne";
import UserProfileModal from "../HomePage/UserProfileModal";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
  const closeModal = () => setModalIsOpen(false);

  function ToggleSidebar() {
    setIsOpen(!isOpen);
  }

  const openIt = () => setNotificationModal(!notificationModal);
  const openUserProfile = () => setUserProfile(!userProfile);
  const closeIt = () => setNotificationModal(false);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="adminPage-sidebar">
      <div className="adminPage-header">
        <button onClick={ToggleSidebar} className="fab">
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        <div className="admin-notification-profile">
          <button className="notification-profile" onClick={openIt}>
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button className="notification-profile" onClick={openUserProfile}>
            <FontAwesomeIcon icon={faUserCircle} />
          </button>
        </div>
        {notificationModal && <AdminNotificationModalOne />}
        {userProfile && <UserProfileModal />}
      </div>
      <nav className={`admin-sideBar ${isOpen ? "open" : ""}`}>
        {windowSize < 1200 ? (
          <div className="sidebar-l1200 sidebar-Links">
            <div className="adminPage-sidebar-logo">
              <img src={logoWhite} />
            </div>
            <ul>
              <li>
                <Link to="/adminDashboard" onClick={ToggleSidebar}>
                  <FontAwesomeIcon icon={faChartLine} />
                  Dashbaord
                </Link>
              </li>
              <li>
                <Link to="/adminDeliveryRequest" onClick={ToggleSidebar}>
                  <FontAwesomeIcon icon={faTruck} />
                  Delivery request
                </Link>
              </li>
              <li>
                <Link to="/manageAccount" onClick={ToggleSidebar}>
                  <FontAwesomeIcon icon={faUserCog} />
                  Manage account
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="sidebar-g1200 sidebar-Links ">
            <div className="adminPage-sidebar-logo">
              <img src={logoWhite} />
            </div>
            <ul>
              <li>
                <Link to="/adminDashboard" onClick={ToggleSidebar}>
                  <FontAwesomeIcon icon={faChartLine} />
                </Link>
              </li>
              <li>
                <Link to="/adminDeliveryRequest" onClick={ToggleSidebar}>
                  <FontAwesomeIcon icon={faTruck} s />
                </Link>
              </li>
              <li>
                <Link to="/manageAccount" onClick={ToggleSidebar}>
                  <FontAwesomeIcon icon={faUserCog} />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {/* <UploadModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        hey
      </UploadModal> */}
    </div>
  );
}

export default Sidebar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleSidebar() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <>
//       <button className="fab" onClick={toggleSidebar}>
//         <FontAwesomeIcon icon={faBars} />
//       </button>
//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <ul>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/delivery-requests">Delivery Requests</Link>
//           </li>
//           <li>
//             <Link to="/manage-account">Manage Account</Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Sidebar;
