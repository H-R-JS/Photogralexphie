import React, { useEffect, useState } from "react";
import { Navbar } from "./Nav/Navbar";
import { NavbarPhone } from "./Nav/NavbarPhone";
import { motion } from "framer-motion";
import Media from "react-media";

export const Header = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  const variHeader = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 0.1,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };
  /**hidden: { y: -100 },
    visible: { y: 0, transition: { duration: 0.8 } }, */

  const variHeaderChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  window.addEventListener("scroll", changeBackground);

  const media600 = window.matchMedia("(maw-width:600px)");

  return (
    <motion.div variants={variHeader} initial="hidden" animate="visible">
      <header className={nav ? "header-container active" : "header-container"}>
        <motion.h1 variants={variHeaderChildren}>Photogralexphie</motion.h1>
        <motion.div variants={variHeaderChildren}>
          <Media query="(max-width: 1100px)">
            {(matches) => (matches ? <NavbarPhone /> : <Navbar />)}
          </Media>
        </motion.div>
      </header>
    </motion.div>
  );
};
