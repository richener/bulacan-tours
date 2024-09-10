import React from "react";
import Title from "./Title";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="sevices" />
      <div className="section-center services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span className="service-icon">
                <i className={item.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{item.title}</h4>
                <p className="service-text">{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
