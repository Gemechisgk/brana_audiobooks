import email from "../../assets/images/email.png";
import telephone from "../../assets/images/telephone-call.png";
import placeholder from "../../assets/images/placeholder.png";
import clock from "../../assets/images/clock.png";
import React from "react";

function ContactUs() {
  return (
    <div name="contactus" className="contactUs">
      <div className="contact">
        <div className="contactUs-top">
          <h1>CONTACT US</h1>
          <p>
            Thank you for visiting our website. We value your feedback and would
            love to hear from you. If you have any questions, comments, or
            concerns about our item exchange service, please contact us. We are
            available to answer your questions and provide assistance.
          </p>
        </div>
        <div className="contact-info">
          <div className="all-info-sec ">
            <div className="email-sec info-sec">
              <div className="info-icons">
                <img src={email} />
              </div>
              <div className="email-info inside-sec">
                <h2>EMAIL</h2>
                <span>mmmabdulahi954@yahoo.com</span>
                <span>mabdulahi954@gamil.com</span>
              </div>
            </div>
            <div className="addess-sec info-sec">
              <div className="info-icons">
                <img src={placeholder} />
              </div>
              <div className="address-info inside-sec">
                <h2>ADDRESS</h2>
                <span>Arbaminch university, Lemat, Arba minch.</span>
              </div>
            </div>
          </div>
          <div className="all-info-sec ">
            <div className="phone-sec info-sec">
              <div className="info-icons">
                <img src={telephone} />
              </div>
              <div className="phone-info inside-sec">
                <h2>PHONE</h2>
                <span>Mobile: (+251) 913-70-15-96 </span>
                <span>Mobile: (+251) 779-35-45-65 </span>
              </div>
            </div>
            <div className="opening-sec info-sec">
              <div className="info-icons">
                <img src={clock} />
              </div>
              <div className="opening-info inside-sec">
                <h2>OPENING HOURS</h2>
                <span>Monday to Friday 8:00AM - 6:00PM </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="getIn">
        <h2>GET IN TOUCH</h2>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your email" />
        <input type="text" placeholder="Your phone" />
        <textarea placeholder="Your message" />
        <button type="button" className="btn3">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactUs;
