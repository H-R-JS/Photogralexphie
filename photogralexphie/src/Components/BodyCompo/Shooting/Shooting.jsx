import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Shooting = () => {
  const variShooting = {
    hidden: {},

    show: {},
  };

  return (
    <section className="shooting-page">
      <div className="shooting-descript-container">
        <p className="shooting-descript">
          Je propose 2 types de shooting avec un prix différent, pour plus de
          précision n'hésitez à pas à me contacter sur mon{" "}
          <Link
            to="https://www.instagram.com/photogralexphie/"
            className="shooting-link"
          >
            Instagram
          </Link>{" "}
          .
        </p>
      </div>

      <div className="shooting-text-container">
        <motion.div
          className="shooting-text normal"
          variants={variShooting}
          initial="hidden"
          animate="visible"
        >
          <p>
            Shooting Normal :<br />
            <br />
            <span className="span-price">30 €</span>
          </p>
          <span
            className="material-symbols-outlined arrow-hover"
            id="arrow-hover"
          >
            arrow_selector_tool
          </span>
          <div className="shooting-img-container-one">
            <div className="shooting-img-all event-one" />
            <div className="shooting-img-all event-two" />
            <div className="shooting-img-all event-three" />
          </div>
        </motion.div>
        <div className="shooting-text event">
          <p>
            Shooting Evenement :<br />
            <br />
            <span className="span-price">100 €</span>
          </p>
          <span className="material-symbols-outlined arrow-hover">
            arrow_selector_tool
          </span>
          <div className="shooting-img-container-two">
            <div className="shooting-img-all one" />
            <div className="shooting-img-all two" />
            <div className="shooting-img-all three" />
          </div>
        </div>
      </div>
    </section>
  );
};

/**<div className="shooting-container normal">
        {ArrayImgShootingN.map((item, index) => {
          console.log(item.img);
          return (
            <div
              key={index}
              className="shooting-img normal"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
          );
        })}
      </div>
      <div className="shooting-container event">
        {ArrayImgShootingE.map((item, index) => {
          console.log(item.img);
          return (
            <div
              key={index}
              className="shooting-img event"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
          );
        })}
      </div> */
