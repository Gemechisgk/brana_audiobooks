import React from "react";

function UserNavTopSection({ header, countNumber }) {
  return (
    <div className="userMessage-top">
      <h3>{header}</h3>
      <div className="userMessage-counter-top">
        <span>{countNumber}</span>
      </div>
    </div>
  );
}

export default UserNavTopSection;
