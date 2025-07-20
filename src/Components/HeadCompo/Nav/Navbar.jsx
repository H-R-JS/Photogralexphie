import React, { useState } from "react";
import { NavItems } from "./NavItems";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul className="ul-menu">
        {NavItems.map((item, index) => {
          if (item.id === "1") {
            return (
              <li key={index}>
                <NavLink to={item.path} className="link-menu">
                  {item.title}
                </NavLink>
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
