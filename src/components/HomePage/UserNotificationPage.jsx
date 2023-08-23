import React from "react";
import chat from "../../assets/images/chat.png";
import "./NotificationPage.css";
import Home_page_header from "./Home_page_header";
import Footer from "../LandingPage/Footer";
import UserNavTopSection from "./UserNavTopSection";

function UserNotificationPage() {
  const notification = [
    {
      id: 1,
      image: `${chat}`,
      title: "Gelila wants exchange",
      text: "You bitch give my Tv back, you fucking bastard. you tricked me in to this",
    },

    {
      id: 2,
      image: `${chat}`,
      title: "New request",
      text: "Deliver request for um dolor sit, amet consec met consectetur adipisicing elit.Possi  idem quasi, porro nisi iure min",
    },
    {
      id: 3,
      image: `${chat}`,
      title: "Alem wants exchange",
      text: "onsec met consecteturDeliver request for um dolor sit, amet c adipisicing elit.Possi  idem quasi, porro nisi iure min",
    },
    {
      id: 4,
      image: `${chat}`,
      title: "New request",
      text: "Deliver request for um dolor sit, amet consec met consectetur adipisicing elit.Possi  idem quasi, porro nisi iure min",
    },
    {
      id: 5,
      image: `${chat}`,
      title: "New request",
      text: "Deliver request for um dolor sit, amet consec met consectetur adipisicing elit.Possi  idem quasi, porro nisi iure min",
    },
    {
      id: 6,
      image: `${chat}`,
      title: "New request",
      text: "Deliver request for um dolor sit, amet consec met consectetur adipisicing elit.Possi  idem quasi, porro nisi iure min",
    },
    {
      id: 7,
      image: `${chat}`,
      title: "New request",
      text: "Deliver request for um dolor sit, amet consec met consectetur adipisicing elit.Possi  idem quasi, porro nisi iure min",
    },
    {
      id: 8,
      image: `${chat}`,
      title: "New request",
      text: "Deliver request for um dolor sit, amet consec met consectetur adipisicing elit.Possi  idem quasi, porro nisi iure min",
    },
  ];
  return (
    <div className="userNotification-root">
      <Home_page_header />
      <UserNavTopSection header="Notification" countNumber="7" />
      {notification.map(({ id, image, title, text }) => (
        <div key={`notification-${id}`} className="notification-card">
          <img src={image} alt="Image chat" />
          <div className="notification-main">
            <h2>{title}</h2> <span>{text}</span>
          </div>
        </div>
      ))}
      <div className="load-more">
        <span>
          <a>Load more ...</a>
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default UserNotificationPage;
