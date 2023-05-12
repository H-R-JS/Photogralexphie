import React from "react";
import { useAnimation, motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      to: "/portfolio",
      img: require("./HomeImg/Section_animal_h.jpg"),
      animation: control1,
    },
    {
      to: "/portfolio",
      img: require("./HomeImg/Section_seul_h.jpg"),
      animation: control2,
    },
    {
      to: "/portfolio",
      img: require("./HomeImg/Section_couple_h.jpg"),
      animation: control3,
    },
    {
      to: "/portfolio",
      img: require("./HomeImg/Section_event_h.jpg"),
      animation: control4,
    },
  ];

  return (
    <div className="home-container">
      {ArrayHome.map((item, index) => {
        return (
          <motion.div key={index} variants={variHomeChildren}>
            <motion.div className="home-container-box">
              <Link to="/contact">
                <div
                  className="box-container"
                  style={{ backgroundImage: `url(${item.img})` }}
                  onMouseEnter={() => item.animation.start("visible")}
                  onMouseLeave={() => item.animation.start("hidden")}
                />
              </Link>
              <motion.div
                variants={variHChildrenBox2}
                animate={item.animation}
                className="box-container second"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <motion.div
                variants={variHChildrenBox3}
                animate={item.animation}
                className="box-container third"
                style={{ backgroundImage: `url(${item.img})` }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};
