import React, { useState, useEffect, useRef, useCallback } from "react";

import { motion } from "framer-motion";
import { PortfArray } from "./PortfArray";

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

  //const [width, setWidth] = useState();
  // const carousel = useRef();

  /*
  // other solution to useEffect
  const handleRect = useCallback((node) => {
    setWidth(node.scrollWidth - node.offsetWidth);
    console.log(node.scrollWidth);
  }, []);

  console.log(width);
  */

  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, [carousel.current]);

  return (
    <motion.section
      variants={variPageP}
      initial="init"
      animate="open"
      exit="hidden"
      className="portf-page"
    >
      <PortfArray />
    </motion.section>
  );
};
