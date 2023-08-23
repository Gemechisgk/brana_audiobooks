import aboutus from "../../assets/images/aboutus.jpg";
import React from "react";

function AboutUs() {
  return (
    <div name="aboutus" className="aboutus-root">
      <div className="aboutus-text">
        <h1>ABOUT US</h1>
        <p>
          We are a community-driven platform committed to offering a seamless
          and secure experience for buying and selling already pre-owned items,
          swapping industrial, electronic, and mechanical supplies. We take
          pride in our commitment to integrity, diversity, and innovation, and
          we’re always looking to improve our services to meet the evolving
          needs of our valued customers. Thank you for choosing us as your go-to
          exchange website, and we look forward to serving you.
        </p>
      </div>
      <div className="aboutus-img">
        <img src={aboutus} />
      </div>
    </div>
  );
}

export default AboutUs;
