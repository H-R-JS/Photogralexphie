import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../BodyCompo/Home/Home";
import { Portfolio } from "../BodyCompo/Portfolio/Portfolio";
import { Contact } from "../BodyCompo/Contact/Contact";
import { Shooting } from "../BodyCompo/Shooting/Shooting";

export const PHTGRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/shooting" element={<Shooting />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};
