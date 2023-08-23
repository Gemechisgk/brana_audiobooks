import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Overlay from "./Overlay";
import "../../logreg.css";

function Logreg() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const toggleSignUpActive = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  return (
    <section className={`container ${isSignUpActive ? "sign-out-panel-active" : ""}`}>
      <SignIn />
      <SignUp />
      <Overlay isSignUpActive={isSignUpActive} toggleSignUpActive={toggleSignUpActive} />
    </section>
  );
}

export default Logreg;