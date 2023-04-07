import React, { useRef, useEffect } from "react";
import { NavItems } from "./NavItems";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export const NavbarPhone = () => {
  const menuToggle = useAnimation();
  const iconToggle = useAnimation();

  const variantsPhoneMenu = {
    hidden: {
      x: 0,
      display: "none",
      opacity: 0,
    },
    show: {
      x: -150,
      display: "flex",
      opacity: 1,
    },
  };

  let ref = useRef();

  useEffect(() => {
    menuToggle.start("hidden");
    const ClickOutTarget = (e) => {
      if (!ref.current.contains(e.target)) {
        menuToggle.start("hidden");
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
          menuToggle.start("show");
          iconToggle.start({
            display: "none",
          });
        }}
      >
        menu
      </motion.span>
      <motion.ul
        className="ul-menu"
        variants={variantsPhoneMenu}
        animate={menuToggle}
      >
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
