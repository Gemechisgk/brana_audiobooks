import Home_page_header from "./Home_page_header";
import Search_menu from "./Search_menu";
import HomePage_section1 from "./HomePage_section1";
import HomePage_section2 from "./HomePage_section2";
import Footer from "../LandingPage/Footer";

function FullHomepage() {
  return (
    <div className="fullHomePage-root">
      <Home_page_header />
      <Search_menu />
      <HomePage_section1 />
      <HomePage_section2 />
      <Footer />
    </div>
  );
}

export default FullHomepage;
