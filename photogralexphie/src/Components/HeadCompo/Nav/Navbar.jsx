import React from "react";
import { NavItems } from "./NavItems";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export const Navbar = () => {
  const menuToggle = useAnimation();
  const arrowToggleDown = useAnimation();
  const arrowToggleUp = useAnimation();

  //const displayToggle

  return (
    <nav>
      <motion.span
        class="material-symbols-outlined"
        id="arrow-menu-down"
        animate={arrowToggleDown}
        onClick={() => {
          menuToggle.start({
            display: "flex",
          });
          arrowToggleDown.start({
            display: "none",
          });
          arrowToggleUp.start({
            display: "flex",
          });
        }}
      >
        arrow_drop_down
      </motion.span>
      <motion.span
        class="material-symbols-outlined"
        id="arrow-menu-up"
        animate={arrowToggleUp}
        onClick={() => {
          menuToggle.start({
            display: "none",
          });
          arrowToggleDown.start({
            display: "flex",
          });
          arrowToggleUp.start({
            display: "none",
          });
        }}
      >
        arrow_drop_up
      </motion.span>
      <motion.ul className="ul-menu" animate={menuToggle}>
        {NavItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} className="link-menu">
                {item.title}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};
