import React from "react";
import { DropDownItems } from "./DropDownItems";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

export const DropDown = () => {
  const variantDrop = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };
  return (
    <motion.div variants={variantDrop} initial="hidden" animate="show">
      <ul className="dropdown-container">
        {DropDownItems.map((item, index) => {
          return (
            <li key={index} className="li-drop">
              <Link to={item.path} className="dropdown-link">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
