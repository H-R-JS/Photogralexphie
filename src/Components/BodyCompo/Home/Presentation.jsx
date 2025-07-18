import React from "react";
import { useAnimation, motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import home from "../imgs/home.jpeg";

export const Presentation = () => {
  return (
    <section className="home-container">
      <div className="home-figure"></div>
      <p className="home-text">
        <span>Alexandra Durant la photographie autrement...</span> réservez et
        faites vous plaisir !
      </p>
    </section>
  );
};
