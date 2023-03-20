import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  const instaIcon = require("./insta_icon.png");

  return (
    <section className="about-page">
      <div className="about-content">
        <div className="about-img" />
        <div className="about-text">
          <Link>
            <img src={instaIcon} className="insta-logo" />
          </Link>
          <p>
            Je me présente je suis phototgraphe, et j'ai la passion de la
            photographi car j'aime les photos. Je me présente je suis
            phototgraphe, et j'ai la passion de la photographi car j'aime les
            photos.Je me présente je suis phototgraphe, et j'ai la passion de la
            photographi car j'aime les photos.Je me présente je suis
            phototgraphe, et j'ai la passion de la photographi car j'aime les
            photos.Je me présente je suis phototgraphe, et j'ai la passion de la
            photographi car j'aime les photos.Je me présente je suis
            phototgraphe, et j'ai la passion de la photographi car j'aime les
            photos.Je me présente je suis phototgraphe, et j'ai la passion de la
            photographi car j'aime les photos.Je me présente je suis
            phototgraphe,
            <br /> <br />
            et j'ai la passion de la photographi car j'aime les photos.Je
            <br /> et j'ai la passion de la photographi car j'aime les photos.Je
            me présente je suis phototgraphe, et j'ai la passion de la
            photographi car j'aime les photos. et j'ai la et j'ai la passion de
            la photographi car j'aime les photos. passion de et j'ai la passion
            de la photographi car j'aime les photos. la et j'ai la passion de la
            photographi car j'aime les photos. photographi car et j'ai la
            passion de la photographi car j'aime les photos. j'aime les photos.
          </p>
        </div>
      </div>
    </section>
  );
};
