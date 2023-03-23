import React, { useRef, useEffect } from "react";
import { NavItems } from "./NavItems";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export const Navbar = () => {
  const menuToggle = useAnimation();
  const iconToggle = useAnimation();
  let ref = useRef();

  useEffect(() => {
    const ClickOutTarget = (e) => {
      if (!ref.current.contains(e.target)) {
        menuToggle.start({
          display: "none",
        });
        iconToggle.start({
          display: "block",
        });
        console.log("clicked Outside");
      } else {
        console.log("clicked Inside");
      }
    };
    document.addEventListener("click", ClickOutTarget);
    return () => {
      document.removeEventListener("click", ClickOutTarget);
    };
  }, []);

  return (
    <nav ref={ref}>
      <motion.span
        class="material-symbols-outlined"
        id="menu-down"
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
