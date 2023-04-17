import React, { useState } from "react";
import { NavItems } from "./NavItems";
import { NavLink, Link } from "react-router-dom";
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
                <NavLink to={item.path} className="link-menu">
                  {item.title}
                </NavLink>
                {menuDown && <DropDown />}
              </li>
            );
          }

          return (
            <li key={index}>
              <NavLink to={item.path} className="link-menu">
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
