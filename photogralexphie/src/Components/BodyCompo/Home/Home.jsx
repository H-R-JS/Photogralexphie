import React from "react";
import { motion } from "framer-motion";
import { ArrayHome } from "./ArrayHome";

export const Home = () => {
  const variHomeContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.25,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      variants={variHomeContainer}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="home-section"
    >
      <ArrayHome />
    </motion.section>
  );
};
