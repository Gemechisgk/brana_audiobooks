import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function HomePage_sidebar({ handleClose }) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handler = () => {
    setOpen(!open);
  };

  const handler2 = () => {
    setOpen2(!open2);
  };
  return (
    <>
      <div
        className={`sidebar side-bar-btns  ${open ? "open" : ""}`}
        ref={sidebarRef}
      >
        <span onClick={handler}>Location</span>

        {open && (
          <div className="HomepageSide-btns">
            <button onClick={handleClose}>Addis Ababa</button>
            <button>Adama</button>
            <button>Dire Dawa</button>
            <button>Hawassa</button>
            <button>SNNPR</button>
          </div>
        )}
        <span onClick={handler2}> Types of item</span>
        {open2 && (
          <div className="HomepageSide-btns">
            <button onClick={handleClose}>Addis Ababa</button>
            <button>Adama</button>
            <button>Dire Dawa</button>
            <button>Hawassa</button>
            <button>SNNPR</button>
          </div>
        )}
        <button onClick={handleClose}>Close Sidebar</button>
      </div>
      <div className="sidebar-overlay" onClick={handleClose}></div>
    </>
  );
}

export default HomePage_sidebar;

// import { useState, useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

// function HomePage_sidebar({ handleClose }) {
//   const [open, setOpen] = useState(false);
//   const [open2, setOpen2] = useState(false);
//   const sidebarRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setOpen(false);
//         setOpen2(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [sidebarRef]);

//   const handler = () => {
//     setOpen(!open);
//   };

//   const handler2 = () => {
//     setOpen2(!open2);
//   };

//   return (
//     <div className="side-bar-btns" ref={sidebarRef}>
//       <span onClick={handler}>Location</span>

//       {open && (
//         <div className="HomepageSide-btns">
//           <button>Addis Ababa</button>
//           <button>Adama</button>
//           <button>Dire Dawa</button>
//           <button>Hawassa</button>
//           <button>SNNPR</button>
//         </div>
//       )}
//       <span onClick={handler2}> Types of item</span>
//       {open2 && (
//         <div className="HomepageSide-btns">
//           <button>Addis Ababa</button>
//           <button>Adama</button>
//           <button>Dire Dawa</button>
//           <button>Hawassa</button>
//           <button>SNNPR</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default HomePage_sidebar;

// import { useState, useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

// function HomePage_sidebar({ handleClose }) {
//   const [open, setOpen] = useState(false);
//   const [open2, setOpen2] = useState(false);
//   const sidebarRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setOpen(false);
//         setOpen2(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [sidebarRef]);

//   const handler = () => {
//     setOpen(!open);
//     setOpen2(false);
//   };

//   const handler2 = () => {
//     setOpen2(!open2);
//     setOpen(false);
//   };

//   const handleSidebarClose = () => {
//     setOpen(false);
//     setOpen2(false);
//   };

//   return (
//     <div className="side-bar" ref={sidebarRef}>
//       <div className="side-bar-btns">
//         <span onClick={handler}>Location</span>

//         {open && (
//           <div className="HomepageSide-btns">
//             <button onClick={handleClose}>Addis Ababa</button>
//             <button>Adama</button>
//             <button>Dire Dawa</button>
//             <button>Hawassa</button>
//             <button>SNNPR</button>
//           </div>
//         )}
//         <span onClick={handler2}> Types of item</span>
//         {open2 && (
//           <div className="HomepageSide-btns">
//             <button onClick={handleClose}>Addis Ababa</button>
//             <button>Adama</button>
//             <button>Dire Dawa</button>
//             <button>Hawassa</button>
//             <button>SNNPR</button>
//           </div>
//         )}
//       </div>
//       {open || open2 ? (
//         <div className="side-bar-overlay" onClick={handleSidebarClose}></div>
//       ) : null}
//     </div>
//   );
// }

// export default HomePage_sidebar;
