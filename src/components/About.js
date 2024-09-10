import React from "react";
import aboutImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subtitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Welcome to Bulacan Tours! We are passionate about showcasing the
            rich heritage and vibrant culture of Bulacan. Our expertly guided
            tours are designed to immerse you in the history and stories that
            make this region truly unique. From historic landmarks to cultural
            treasures, every stop on our tours is carefully selected to provide
            an unforgettable experience. Join us to explore the charm and legacy
            of Bulacan, where every corner reveals a piece of the past and a
            glimpse into the vibrant present.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
