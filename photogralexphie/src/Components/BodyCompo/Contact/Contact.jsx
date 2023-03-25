import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-content">
        <div className="contact-background one" />
        <div className="contact-text">
          <h2>Un Shooting vous intéresse ? </h2>
          <p>
            Si vous souhaitez me contactez, il suffit de m'envoyer un message
            privée sur mon compte instagram.
            <br />
            Me situant à l'ouest de Toulouse vers le Gers, le shooting se
            situera dans les horizons .{" "}
          </p>
          <Link
            to="https://www.instagram.com/photogralexphie/"
            className="icon-container"
          >
            <span className="icon-insta"></span>
          </Link>
        </div>
        <div className="contact-background two" />
      </div>
    </section>
  );
};

/**<p>
            Je me présente je suis phototgraphe, et j'ai la passion de la
            photographi car j'aime les photos. Je me présente je suis
            phototgraphe, et j'ai la passion de la photographi car j'aime les
            photos.Je me présente je suis phototgraphe, et j'ai la passion de la
            photographi car j'aime les photos.Je me présente je suis
            phototgraphe, et j'ai la passion de la photographi car j'aime les
            photos.Je me présente je suis phototgraphe, et j'ai la passion de la
            photographi car j'aime les photos.Je me présente je suis
            phototgraphe, et j'ai la passion de la photographi car j'aime les
            photos.Je me présente je suis phototgraphe, et j'ai la passion de la
            photographi car j'aime les photos.Je me présente je suis
            phototgraphe,
            <br /> <br />
            et j'ai la passion de la photographi car j'aime les photos.Je
            <br /> et j'ai la passion de la photographi car j'aime les photos.Je
            me présente je suis phototgraphe, et j'ai la passion de la
            photographi car j'aime les photos. et j'ai la et j'ai la passion de
            la photographi car j'aime les photos. passion de et j'ai la passion
            de la photographi car j'aime les photos. la et j'ai la passion de la
            photographi car j'aime les photos. photographi car et j'ai la
            passion de la photographi car j'aime les photos. j'aime les photos.
          </p> */
