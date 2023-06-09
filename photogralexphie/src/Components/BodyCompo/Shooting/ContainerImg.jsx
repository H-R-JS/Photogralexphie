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
        alt="Photo de photogralexphie"
        variants={variImg}
        className="box-img"
      />
      <motion.img
        src={require("../PortfImg/4Event/Section_event1.jpg")}
        alt="Photo de photogralexphie"
        className="box-img"
        variants={variImg}
      />
      <motion.img
        src={require("../PortfImg/4Event/Section_event3.jpg")}
        alt="Photo de photogralexphie"
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
        src={require("../PortfImg/1Animals/Section_animal2.jpg")}
        className="box-img"
        variants={variImg}
      />
      <motion.img
        src={require("../PortfImg/3Solo/Section_solo3.jpg")}
        className="box-img"
        variants={variImg}
      />
      <motion.img
        src={require("../PortfImg/2Couple/Section_couple1.jpg")}
        className="box-img"
        variants={variImg}
      />
    </figure>
  );
};
