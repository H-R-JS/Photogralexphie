import React, { useState, useEffect, useRef, useCallback } from "react";

import { ArrayImg } from "../PortfImg/ArrayImg";
import { motion } from "framer-motion";

export const PortfArray = () => {
  const [width1, setWidth1] = useState();
  const [width2, setWidth2] = useState();
  const [width3, setWidth3] = useState();
  const [width4, setWidth4] = useState();

  const arrayState = [width1, width2, width3, width4];

  /*const handleRect = useCallback((node) => {
    setWidth1(node.scrollWidth - node.offsetWidth);
    setWidth2(node.scrollWidth - node.offsetWidth);
    setWidth3(node.scrollWidth - node.offsetWidth);
    setWidth4(node.scrollWidth - node.offsetWidth);
    console.log(node.scrollWidth);
  }, []);*/

  useEffect(() => {
    setWidth1(
      refCarousel.current[0].scrollWidth - refCarousel.current[0].offsetWidth
    );
    setWidth2(
      refCarousel.current[1].scrollWidth - refCarousel.current[0].offsetWidth
    );
    setWidth3(
      refCarousel.current[2].scrollWidth - refCarousel.current[0].offsetWidth
    );
    setWidth4(
      refCarousel.current[3].scrollWidth - refCarousel.current[0].offsetWidth
    );
  }, []);

  const refCarousel = useRef([]);
  console.log(arrayState[3]);
  return (
    <motion.div>
      {ArrayImg.map((array, index) => {
        return (
          <motion.div key={index} className="carousel-container">
            <h2 className="carousel-h2" id={array.id}>
              {array.title}
            </h2>
            <motion.div
              ref={(el) => (refCarousel.current[index] = el)}
              className="carousel"
            >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -arrayState[index] }}
                className="inner-carousel"
              >
                {array.array.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      style={{ backgroundImage: `url(${item.src})` }}
                      className={item.class}
                    />
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

/*
export const PortfArray = () => {
  const [width, setWidth] = useState();
  const carousel = useRef();
  // const widthCr = carousel.current;

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    console.log(carousel.current.scrollWidth);
    console.log(carousel.current.style.width);
  }, []);

  return ()
    
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
