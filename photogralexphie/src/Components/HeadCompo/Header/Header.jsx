import React, { useState } from "react";
import { Navbar } from "./Nav/Navbar";
import { motion, useAnimation } from "framer-motion";

export const Header = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNav(true);
    } else {
      setNav(false);
    }
    console.log(nav);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header className={nav ? "header-container active" : "header-container"}>
      <h1>Photogralexphie</h1>
      <Navbar />
    </header>
  );
};
