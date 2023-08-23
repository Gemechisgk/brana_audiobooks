import React from "react";
import AboutUs from "./LandingPage/AboutUs";
import ContactUs from "./LandingPage/ContactUs";
import Footer from "./LandingPage/Footer";
import Landing_Page from "./LandingPage/Landing_Page";
import LastSec from "./LandingPage/LastSec";
import Section1 from "./LandingPage/Section1";
import Section2 from "./LandingPage/Section2";
import Testimonial from "./LandingPage/Testimonial";
import BackToTop from "./LandingPage/BackToTop";
const index = () => {

    return (
        <>
        <BackToTop />
      <Landing_Page />
      <Section1 />
      <Section2 />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <LastSec />
      <Footer />
        </>

    );
}

export default index;