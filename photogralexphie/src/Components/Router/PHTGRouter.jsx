import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../BodyCompo/Home";
import { Portfolio } from "../BodyCompo/Portfolio";

export const PHTGRouter = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};
