import React from "react";
import { motion } from "framer-motion";

export const ContainerImgNormal = () => {
  const variImg = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <figure className="shooting-box-img">
      <motion.img
        src={require("../PortfImg/4Event/Section_event2.jpg")}
        variants={variImg}
        className="box-img"
      />
      <motion.img
        src={require("../PortfImg/4Event/Section_event1.jpg")}
        className="box-img"
        variants={variImg}
      />
      <motion.img
        src={require("../PortfImg/4Event/Section_event4.jpg")}
        className="box-img"
        variants={variImg}
      />
    </figure>
  );
};

export const ContainerImgEvent = () => {
  const variImg = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <figure className="shooting-box-img">
      <motion.img
        src={require("../PortfImg/1Animals/Section_animal15.jpg")}
        className="box-img"
        variants={variImg}
      />
      <motion.img
        src={require("../PortfImg/3Solo/Section_solo16.jpg")}
        className="box-img"
        variants={variImg}
      />
      <motion.img
        src={require("../PortfImg/2Couple/Section_couple0.jpg")}
        className="box-img"
        variants={variImg}
      />
    </figure>
  );
};
