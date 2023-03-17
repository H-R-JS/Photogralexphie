import React, { useRef } from "react";
import { NavItems } from "./NavItems";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export const Navbar = () => {
  const menuToggle = useAnimation();
  const iconToggle = useAnimation();
  let ref = useRef();

  //const displayToggle

  return (
    <nav>
      <motion.span
        class="material-symbols-outlined"
        id="arrow-menu-down"
        animate={iconToggle}
        onClick={() => {
          menuToggle.start({
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          });
          iconToggle.start({
            display: "none",
          });
        }}
      >
        menu
      </motion.span>
      <motion.ul className="ul-menu" animate={menuToggle} ref={ref}>
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
