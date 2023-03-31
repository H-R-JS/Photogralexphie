import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { ShootingBox } from "./ArrayImgShooting";

export const Shooting = () => {
  const imgNormalControls = useAnimation();
  const imgEventControls = useAnimation();

  const variPageP = {
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

  const variShooting = {
    hidden: { opacity: 0 },
    show: {
      display: "flex",
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const variImg = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  useEffect(() => {
    imgNormalControls.start("hidden");
    imgEventControls.start("hidden");
  }, [imgNormalControls, imgEventControls]);

  return (
    <motion.section
      variants={variPageP}
      initial="init"
      animate="open"
      exit="hidden"
      className="shooting-page"
    >
      <div className="shooting-descript-container">
        <p className="shooting-descript">
          Je propose 2 types de shooting avec un prix différent, pour plus de
          précision n'hésitez à pas à me contacter sur mon{" "}
          <Link
            to="https://www.instagram.com/photogralexphie/"
            className="shooting-link"
          >
            Instagram
          </Link>{" "}
          .
        </p>
      </div>
      <div className="shooting-box-container">
        {ShootingBox.map((item, index) => {
          return (
            <div key={index} className="shooting-box">
              <div className="shooting-box-content">
                <h3>{item.title}</h3>
                <span>{item.price}</span>
              </div>
              <motion.div className="shooting-box-content-text">
                {item.icon}
                <p className="content-text">{item.text}</p>
              </motion.div>
              <motion.div className="shooting-box-img">
                <div
                  className="box-img one"
                  style={{ backgroundImage: `url(${item.img1})` }}
                />
                <div
                  className="box-img two"
                  style={{ backgroundImage: `url(${item.img2})` }}
                />
                <div
                  className="box-img three"
                  style={{ backgroundImage: `url(${item.img3})` }}
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};
/** <div
          className="shooting-text normal"
          onMouseEnter={() => {
            imgNormalControls.start("show");
          }}
          onMouseLeave={() => {
            imgNormalControls.start("hidden");
          }}
        >
          <div className="in-text">
            <p>
              Shooting Normal :<br />
              <br />
              <span className="span-price">30 €</span>
            </p>
            <span
              className="material-symbols-outlined arrow-hover"
              id="arrow-hover"
            >
              arrow_selector_tool
            </span>
          </div>

          <motion.div
            className="content-text normal"
            variants={variImg}
            animate={imgNormalControls}
          >
            Tel que les portraits, d'animaux, seul ou en couple, au total de 20
            photos par shooting .
          </motion.div>
          <motion.div
            className="shooting-img-container-one"
            variants={variShooting}
            animate={imgEventControls}
          >
            <motion.div
              className="shooting-img-all event-one"
              variants={variImg}
            />
            <motion.div
              className="shooting-img-all event-two"
              variants={variImg}
            />
            <motion.div
              className="shooting-img-all event-three"
              variants={variImg}
            />
          </motion.div>
        </div>
        <motion.div
          className="shooting-text event"
          onMouseEnter={() => {
            imgEventControls.start("show");
          }}
          onMouseLeave={() => {
            imgEventControls.start("hidden");
          }}
        >
          <div className="in-text">
            <p>
              Shooting Evenement :<br />
              <br />
              <span className="span-price">100 €</span>
            </p>
            <span className="material-symbols-outlined arrow-hover">
              arrow_selector_tool
            </span>
          </div>

          <motion.div
            className="content-text event"
            variants={variImg}
            animate={imgEventControls}
          >
            Tel que les mariages, baptêmes ou anniversaires, au total de 25
            photos par shooting .
          </motion.div>
          <motion.div
            className="shooting-img-container-two"
            variants={variShooting}
            animate={imgNormalControls}
          >
            <motion.div className="shooting-img-all one" variants={variImg} />
            <motion.div className="shooting-img-all two" variants={variImg} />
            <motion.div className="shooting-img-all three" variants={variImg} />
          </motion.div>
        </motion.div>yuèuè */
