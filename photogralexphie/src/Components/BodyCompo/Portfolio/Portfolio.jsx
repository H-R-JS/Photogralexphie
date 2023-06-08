import React from "react";
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

  return (
    <motion.main
      variants={variPageP}
      initial="init"
      animate="open"
      exit="hidden"
      className="portf-page"
    >
      <PortfArray />
    </motion.main>
  );
};
