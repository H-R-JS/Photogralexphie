import React, { useEffect, useState } from "react";
import { Navbar } from "./Nav/Navbar";
import { NavbarPhone } from "./Nav/NavbarPhone";
import Media from "react-media";

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
      <Media query="(max-width: 1100px)">
        {(matches) => (matches ? <NavbarPhone /> : <Navbar />)}
      </Media>
    </header>
  );
};
