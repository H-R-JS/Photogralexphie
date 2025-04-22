import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Contact = () => {
  const variPageC = {
    init: {
      display: "none",
      opacity: 0,
    },

    open: {
      display: "block",
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.main
      variants={variPageC}
      initial="init"
      animate="open"
      exit="hidden"
      className="contact-page"
    >
      <section className="contact-content">
        <aside className="contact-background one" />
        <article className="contact-text">
          <h2>Un Shooting vous intéresse ? </h2>
          <p>
            Si vous souhaitez me contactez, il suffit de m'envoyer un message
            privée sur mon compte instagram.
            <br />
            Me situant à l'ouest de Toulouse vers le Gers, le shooting se
            situera dans les horizons .
          </p>
          <Link
            to="https://www.instagram.com/photogralexphie/"
            className="icon-container"
          >
            <span className="icon-insta"></span>
          </Link>
        </article>
        <aside className="contact-background two" />
      </section>
    </motion.main>
  );
};
