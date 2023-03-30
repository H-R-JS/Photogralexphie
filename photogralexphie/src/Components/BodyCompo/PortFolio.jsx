import React from "react";
import {
  ArrayPortfImg1,
  ArrayPortfImg2,
  ArrayPortfImg3,
  ArrayPortfImg4,
} from "./PortfImg/ArrayPortfImg";
import { motion } from "framer-motion";

export const Portfolio = () => {
  const variPageP = {
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
      variants={variPageP}
      initial="init"
      animate="open"
      exit="hidden"
      className="portf-page"
    >
      <div className="portf-container" id="animals">
        {ArrayPortfImg1.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.src})` }}
              className={item.class}
            />
          );
        })}
        <div className="ligne-portf" />
      </div>
      <div className="portf-container" id="solo">
        {ArrayPortfImg2.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.src})` }}
              className={item.class}
            />
          );
        })}
        <div className="ligne-portf" />
      </div>
      <div className="portf-container" id="couple">
        {ArrayPortfImg3.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.src})` }}
              className={item.class}
            />
          );
        })}
        <div className="ligne-portf" />
      </div>
      <div className="portf-container" id="event">
        {ArrayPortfImg4.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.src})` }}
              className={item.class}
            />
          );
        })}
      </div>
    </motion.section>
  );
};
