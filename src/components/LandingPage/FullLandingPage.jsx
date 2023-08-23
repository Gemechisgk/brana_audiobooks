import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Landing_Page from "./Landing_Page";
import LastSec from "./LastSec";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Testimonial from "./Testimonial";
import BackToTop from "./BackToTop";
import "./FullLandingPage.css";

function FullLandingPage() {
  return (
    <div>
      <BackToTop />
      <Landing_Page />
      <Section1 />
      <Section2 />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <LastSec />
      <Footer />
    </div>
  );
}

export default FullLandingPage;
