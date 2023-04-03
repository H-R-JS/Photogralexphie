import React, { useEffect, useState } from "react";
import { Navbar } from "./Nav/Navbar";
import { NavbarPhone } from "../HeaderPhone/NavPhone/NavbarPhone";

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

  const media600 = window.matchMedia("(maw-width:600px)");

  return (
    <header className={nav ? "header-container active" : "header-container"}>
      <h1>Photogralexphie</h1>
      {() => {
        if (media600) {
          console.log("yeah");
          return <NavbarPhone />;
        } else {
          return <Navbar />;
        }
      }}
    </header>
  );
};
