import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route } from "react-router-doms";
import { Home } from "../BodyCompo/Home";

export const PHTGRouter = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};
