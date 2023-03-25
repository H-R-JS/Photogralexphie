import React, { useRef, useEffect } from "react";
import { NavItems } from "./NavItems";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export const Navbar = () => {
  return (
    <nav>
      <ul className="ul-menu">
        {NavItems.map((item, index) => {
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
