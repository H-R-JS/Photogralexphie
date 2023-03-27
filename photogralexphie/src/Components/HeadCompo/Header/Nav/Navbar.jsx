import React, { useState } from "react";
import { NavItems } from "./NavItems";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { DropDown } from "./DropDown/DropDown";

export const Navbar = () => {
  const [menuDown, setMenuDown] = useState(false);

  return (
    <nav>
      <ul className="ul-menu">
        {NavItems.map((item, index) => {
          if (item.id === "1") {
            console.log();
            return (
              <li
                key={index}
                onMouseEnter={() => setMenuDown(true)}
                onMouseLeave={() => setMenuDown(false)}
              >
                <Link to={item.path} className="link-menu">
                  {item.title}
                </Link>
                {menuDown && <DropDown />}
              </li>
            );
          }

          return (
            <li key={index}>
              <Link to={item.path} className="link-menu">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
/**<li key={index} onMouseEnter={() => setMenuDown(true)}  onMouseLeave={() => setMenuDown(false)}}>
                  <Link to={item.path} className="link-menu">
                    {item.title}
                  </Link>
                </li> */
