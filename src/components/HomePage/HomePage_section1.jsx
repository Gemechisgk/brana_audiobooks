import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import ItemsCard from "./ItemsCard";

function HomePage_section1() {
  return (
    <div className="homePage-section1">
      <FaChevronLeft size="2em" />
      <ItemsCard />
      <FaChevronRight size="2em" />
    </div>
  );
}

export default HomePage_section1;
