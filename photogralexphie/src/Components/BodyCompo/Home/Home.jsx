import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion, useAnimation } from "framer-motion";
import { ArrayHome } from "./ArrayHome";

export const Home = () => {
  const variHomeContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.25,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      variants={variHomeContainer}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="home-section"
    >
      <ArrayHome />
    </motion.section>
  );
};

/**<div className="home-container">
        {ArrayHome.map((item, index) => {
          return (
            <motion.div key={index} variants={variHomeChildren}>
              <div
                className="box-container"
                style={{ backgroundImage: `url(${item.img})` }}
                onMouseEnter={() => control.start("visible")}
                onMouseLeave={() => control.start("hidden")}
              />
              <motion.div
                variants={variHChildrenBox2}
                animate={control}
                className="box-container second"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <motion.div
                variants={variHChildrenBox3}
                animate={control}
                className="box-container third"
                style={{ backgroundImage: `url(${item.img})` }}
              />
            </motion.div>
          );
        })}
      </div> */

/**const variPageH = {
    init: {
      display: "none",
      opacity: 0,
    },

    open: {
      display: "flex",
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.section
      variants={variPageH}
      initial="init"
      animate="open"
      exit="hidden"
      className="home-page"
    >
      <div className="home-img-container ">
        <div className="home-img-home" />
      </div>
      <div className="home-content-down">
        <div className="home-content-part-one">
          <div className="part-one-text">
            <h2>Photographe Amatrice</h2>
            <p>
              Une passion depuis ma plus tendre enfance, la vie est une beauté
              qui doit être mit en valeur, à travers les couleurs, les regards,
              l'amour entre deux personnes, on peut voir la beauté dans chacune
              de ses facettes.
              <br />
              <br />
              Je propose des tarifs bas, du à mon titre d'amatrice, je n'en vie
              pas j'ai un travail à côté me permettant de stabiliser mes
              revenues, mes disponibilités se feront à fonction de mon temps
              libre.
            </p>
          </div>
          <div className="img-container-and-descript">
            <div className="part-one-img" />
            <span className="span-descript">( C'est moi )</span>
          </div>
        </div>
        <div className="home-content-part-two">
          <div className="part-two-text">
            <p>Faites un petit détour voir mon travail, si cela vous tente !</p>
            <Link to="/portfolio">
              <button className="part-two-button">Portfolio</button>
            </Link>
          </div>
          <div className="part-two-container-img">
            <div className="part-two-img one" />
            <div className="part-two-img two" />
            <div className="part-two-img three" />
          </div>
        </div>
      </div>
    </motion.section>
  ); */
