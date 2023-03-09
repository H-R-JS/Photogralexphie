import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Nav/Navbar";

export const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  );
};
