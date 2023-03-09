import React from "react";
import { NavItems } from "./NavItems";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul>
      {NavItems.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
