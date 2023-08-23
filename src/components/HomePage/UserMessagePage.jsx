import Home_page_header from "./Home_page_header";
import variety from "../../assets/images/variety.png";
import testimonial from "../../assets/images/testimonial.jpg";
import Footer from "../LandingPage/Footer";
import "./UserMessagePage.css";
import UserNavTopSection from "./UserNavTopSection";

function UserMessagePage() {
  const message = [
    {
      id: 1,
      image: `${variety}`,
      userName: "Allie",
      text: " Lorem ipsum dolor sit amet, consectetu",
    },
    {
      id: 2,
      image: `${testimonial}`,
      userName: "Gelila",
      text: "dolor sit amet, consectetu Lorem ipsum ",
    },
    {
      id: 3,
      image: `${variety}`,
      userName: "Allie",
      text: " Lorem ipsum dolor sit amet, consectetu",
    },
    {
      id: 4,
      image: `${testimonial}`,
      userName: "Allie",
      text: " Lorem ipsum dolor sit amet, consectetu",
    },
    {
      id: 5,
      image: `${variety}`,
      userName: "Allie",
      text: " Lorem ipsum dolor sit amet, consectetu",
    },
    {
      id: 6,
      image: `${variety}`,
      userName: "Allie",
      text: " Lorem ipsum dolor sit amet, consectetu",
    },
    {
      id: 7,
      image: `${testimonial}`,
      userName: "Allie",
      text: " Lorem ipsum dolor sit amet, consectetu",
    },
  ];
  return (
    <div className="userMessage-root">
      <Home_page_header />
      <UserNavTopSection header="Message" countNumber="7" />
      {message.map(({ id, image, userName, text }) => (
        <div className="userMessage-card" key={`message-${id}`}>
          <div className="img-main-wrapper">
            <img src={image} alt="" />
            <div className="userMessage-main">
              <h2>{userName}</h2>
              <span>{text}</span>
            </div>
          </div>
          <div className="userMessage-counter-bottom">
            <span>1</span>
          </div>
        </div>
      ))}
      <div className="load-more">
        <span>
          <a>Load more ...</a>
        </span>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default UserMessagePage;
