import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrayPortfImg1,
  ArrayPortfImg2,
  ArrayPortfImg3,
  ArrayPortfImg4,
} from "../PortfImg/ArrayPortfImg";
import { motion } from "framer-motion";

export const Portfolio = () => {
  const variPageP = {
    init: {
      //display: "none",
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

  const [width, setWidth] = useState();
  const carousel = useRef();

  /*
  // other solution to useEffect
  const handleRect = useCallback((node) => {
    setWidth(node.scrollWidth - node.offsetWidth);
    console.log(node.scrollWidth);
  }, []);

  console.log(width);
  */

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel.current]);

  return (
    <React.Fragment>
      <motion.section
        variants={variPageP}
        initial="init"
        animate="open"
        exit="hidden"
        className="portf-page"
      >
        <motion.div ref={carousel} className="carousel" id="animals">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {ArrayPortfImg1.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  style={{ backgroundImage: `url(${item.src})` }}
                  className={item.class}
                />
              );
            })}
          </motion.div>
          <div className="ligne-portf" />
        </motion.div>
        <motion.div className="carousel" id="solo">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0 }}
            className="inner-carousel"
          >
            {ArrayPortfImg2.map((item, index) => {
              return (
                <motion.div>
                  <div
                    key={index}
                    style={{ backgroundImage: `url(${item.src})` }}
                    className={item.class}
                  />
                </motion.div>
              );
            })}
          </motion.div>
          <div className="ligne-portf" />
        </motion.div>
        <motion.div className="carousel" id="couple">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0 }}
            className="inner-carousel"
          >
            {ArrayPortfImg3.map((item, index) => {
              return (
                <motion.div>
                  <div
                    key={index}
                    style={{ backgroundImage: `url(${item.src})` }}
                    className={item.class}
                  />
                </motion.div>
              );
            })}
          </motion.div>
          <div className="ligne-portf" />
        </motion.div>
        <motion.div className="carousel" id="event">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0 }}
            className="inner-carousel"
          >
            {ArrayPortfImg4.map((item, index) => {
              return (
                <motion.div className="item">
                  <div
                    key={index}
                    style={{ backgroundImage: `url(${item.src})` }}
                    className={item.class}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          <div className="ligne-portf" />
        </motion.div>
      </motion.section>
    </React.Fragment>
  );
};
