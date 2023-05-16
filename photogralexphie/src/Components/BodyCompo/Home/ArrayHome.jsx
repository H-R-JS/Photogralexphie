import React from "react";
import { useAnimation, motion } from "framer-motion";
import { NavHashLink } from "react-router-hash-link";

export const ArrayHome = () => {
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();

  const variHomeChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  };

  const variHChildrenBox2 = {
    hidden: { x: 10, y: 0 },
    visible: {
      x: 30,
      y: -10,
      transition: { duration: 0.1, transtionTimingFunction: "easeInOut" },
    },
  };

  const variHChildrenBox3 = {
    hidden: { x: 10, y: 0 },
    visible: {
      x: 50,
      y: -10,
      transition: { duration: 0.2, transtionTimingFunction: "easeInOut" },
    },
  };

  const ArrayHome = [
    {
      to: "/portfolio#animals",
      img: require("./HomeImg/Section_animal_h.jpg"),
      img1: require("./HomeImg/Section_animal_h1.jpg"),
      img2: require("./HomeImg/Section_animal_h2.jpg"),
      animation: control1,
    },
    {
      to: "/portfolio#solo",
      img: require("./HomeImg/Section_solo_h.jpg"),
      img1: require("./HomeImg/Section_solo_h1.jpg"),
      img2: require("./HomeImg/Section_solo_h2.jpg"),
      animation: control2,
    },
    {
      to: "/portfolio#couple",
      img: require("./HomeImg/Section_couple_h.jpg"),
      img1: require("./HomeImg/Section_couple_h1.jpg"),
      img2: require("./HomeImg/Section_couple_h2.jpg"),
      animation: control3,
    },
    {
      to: "/portfolio#event",
      img: require("./HomeImg/Section_event_h.jpg"),
      img1: require("./HomeImg/Section_event_h1.jpg"),
      img2: require("./HomeImg/Section_event_h2.jpg"),
      animation: control4,
    },
  ];

  return (
    <div className="home-container">
      {ArrayHome.map((item, index) => {
        return (
          <motion.div key={index} variants={variHomeChildren}>
            <motion.div className="home-container-box">
              <NavHashLink to={item.to}>
                <div
                  className="box-container"
                  style={{ backgroundImage: `url(${item.img})` }}
                  onMouseEnter={() => item.animation.start("visible")}
                  onMouseLeave={() => item.animation.start("hidden")}
                />
              </NavHashLink>
              <motion.div
                variants={variHChildrenBox2}
                animate={item.animation}
                className="box-container second"
                style={{ backgroundImage: `url(${item.img1})` }}
              />
              <motion.div
                variants={variHChildrenBox3}
                animate={item.animation}
                className="box-container third"
                style={{ backgroundImage: `url(${item.img2})` }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};
