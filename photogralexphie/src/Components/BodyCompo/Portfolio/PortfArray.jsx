import React, { useState, useEffect, useRef } from "react";
import { ArrayImg } from "../PortfImg/ArrayImg";
import { motion } from "framer-motion";

export const PortfArray = () => {
  const [width1, setWidth1] = useState();
  const [width2, setWidth2] = useState();
  const [width3, setWidth3] = useState();
  const [width4, setWidth4] = useState();

  const arrayState = [width1, width2, width3, width4];

  const refCarousel = useRef([]);

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

  return (
    <motion.section>
      {ArrayImg.map((array, index) => {
        return (
          <motion.article key={index}>
            <h2 className="carousel-h2" id={array.id}>
              {array.title}
            </h2>
            <motion.section
              ref={(el) => (refCarousel.current[index] = el)}
              className="carousel"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.figure
                drag="x"
                dragConstraints={{ right: 0, left: -arrayState[index] }}
                className="inner-carousel"
              >
                {array.array.map((item, index) => {
                  return (
                    <motion.figure key={index} className={item.class}>
                      <img
                        src={item.src}
                        alt="Photo de photogralexphie"
                        className="portf-img"
                      />
                    </motion.figure>
                  );
                })}
              </motion.figure>
            </motion.section>
          </motion.article>
        );
      })}
    </motion.section>
  );
};
