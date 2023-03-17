import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../BodyCompo/Home";
import { Portfolio } from "../BodyCompo/Portfolio";
import { About } from "../BodyCompo/About/About";
import { Shooting } from "../BodyCompo/Shooting/Shooting";

export const PHTGRouter = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/shooting" element={<Shooting />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};
