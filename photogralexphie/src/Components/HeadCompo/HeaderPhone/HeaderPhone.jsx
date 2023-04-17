import React from "react";
import { Navbar } from "../Header/Nav/Navbar";
import { motion, useAnimation } from "framer-motion";

export const Header = () => {
  return (
    <header className="header-container">
      <h1>Photogralexphie</h1>
      <Navbar />
    </header>
  );
};
