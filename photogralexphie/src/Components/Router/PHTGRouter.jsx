import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../BodyCompo/Home";
import { Portfolio } from "../BodyCompo/Portfolio";
import { Contact } from "../BodyCompo/Contact/Contact";
import { Shooting } from "../BodyCompo/Shooting/Shooting";

export const PHTGRouter = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/shooting" element={<Shooting />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};
