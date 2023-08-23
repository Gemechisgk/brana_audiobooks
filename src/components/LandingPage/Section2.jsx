import teamyoung from "../../assets/images/teamyoung.avif"
import connect from "../../assets/images/connect.png";
import delivery from "../../assets/images/delivery2.png";
import waste from "../../assets/images/waste.png";
import variety from "../../assets/images/variety.png";
import React, { useRef, useEffect } from "react";

function Section2() {
  const fadeIns = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      fadeIns.current.forEach((fadeIn) => {
        const fadeInPosition = fadeIn.offsetTop;

        if (scrollPosition > fadeInPosition - windowHeight / 1) {
          fadeIn.classList.add("active");
        } else {
          fadeIn.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div name="why-lewach" className="page3-cards">
      <div>
        <h2>WHY LEWACH</h2>
      </div>
      <div
        className="page3-card card-1 fade-in"
        ref={(el) => (fadeIns.current[0] = el)}
      >
        <div className="page3-text">
          <h2>Build a community of like minded people</h2>
          <p>
            Connect with others who share your value and interests through items
            exchange, creating a community centered around sustainability and
            reducing waste
          </p>
        </div>
        <img src={teamyoung} />
      </div>
      <div
        className="page3-card card-2 fade-in"
        ref={(el) => (fadeIns.current[1] = el)}
      >
        <div className="page3-text">
          <h2>Connect with your community</h2>
          <p>
            Lewach helps with you connect with your local community by
            exchanging items with people nearby. Support small businesses and
            meet new people without leaving the comfort of your own home
          </p>
        </div>
        <img src={connect} />
      </div>
      <div
        className="page3-card card-3 fade-in"
        ref={(el) => (fadeIns.current[2] = el)}
      >
        <div className="page3-text">
          <h2>REDUCE WASTE</h2>
          <p>
            By exchanging items with others, you can reduce waste and help the
            environment. Lewach encourages sustainability and supports the
            sharing economy.
          </p>
        </div>
        <img src={waste} />
      </div>
      <div
        className="page3-card card-4 fade-in"
        ref={(el) => (fadeIns.current[3] = el)}
      >
        <div className="page3-text">
          <h2>Convenient delivery service</h2>
          <p>
            Our delivery service makes it easy to exchange items with others in
            your community. You can arrange for pick-up and delivery of items,
            saving you time and hassle.
          </p>
        </div>
        <img src={delivery} />
      </div>
      <div
        className="page3-card card-5 fade-in"
        ref={(el) => (fadeIns.current[4] = el)}
      >
        <div className="page3-text">
          <h2>increase variety in your life</h2>
          <p>
            Find new items to enjoy and explore through item exchange, including
            unique and interesting pieces that might not have otherwise
            discovered.
          </p>
        </div>
        <img src={variety} />
      </div>
    </div>
  );
}

export default Section2;
