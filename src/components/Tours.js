import React from "react";
import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
  const GoToMaps = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />
      <div className="section-center featured-center">
        {tours.map((item, index) => {
          return (
            <article key={index} className="tour-card">
              <div className="tour-img-container">
                <img src={item.image} className="tour-img" alt="" />
                <p className="tour-date">{item.location}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{item.title}</h4>
                </div>
                <p>{item.info}</p>
                <div className="tour-footer">
                  <button
                    className="tour-maps"
                    onClick={() => {
                      GoToMaps(item.googleMaps);
                    }}
                  >
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    Maps
                  </button>
                  <p>{item.duration}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
