/*import React, { useState, useEffect, useRef } from "react";
import {
  ArrayPortfImg1,
  ArrayPortfImg2,
  ArrayPortfImg3,
  ArrayPortfImg4,
} from "../PortfImg/ArrayPortfImg";
import { motion } from "framer-motion";

export const PortfArray = () => {
  const [width, setWidth] = useState();
  const carousel = useRef();
  // const widthCr = carousel.current;

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    console.log(carousel.current.scrollWidth);
    console.log(carousel.current.style.width);
  }, []);

  return (
    <section>
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
      <motion.div
        drag="x"
        dragConstraints={{ right: 0 }}
        className="carousel"
        id="solo"
      >
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
        <motion.div className="inner-carousel">
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
        <motion.div className="inner-carousel">
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
    </section>
  );
};
*/
