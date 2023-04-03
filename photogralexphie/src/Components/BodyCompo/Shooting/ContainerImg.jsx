import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const ContainerImgNormal = () => {
  const variImg = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div className="shooting-box-img">
      <motion.div
        variants={variImg}
        className="box-img"
        style={{
          backgroundImage: `url(${require("../PortfImg/4Event/Section_event2.jpg")})`,
        }}
      />
      <motion.div
        className="box-img"
        variants={variImg}
        style={{
          backgroundImage: `url(${require("../PortfImg/4Event/Section_event1.jpg")})`,
        }}
      />
      <motion.div
        className="box-img"
        variants={variImg}
        style={{
          backgroundImage: `url(${require("../PortfImg/4Event/Section_event4.jpg")})`,
        }}
      />
    </div>
  );
};

export const ContainerImgEvent = () => {
  const variImg = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div className="shooting-box-img">
      <motion.div
        className="box-img"
        variants={variImg}
        style={{
          backgroundImage: `url(${require("../PortfImg/1Animals/Section_animal15.jpg")})`,
        }}
      />
      <motion.div
        className="box-img"
        variants={variImg}
        style={{
          backgroundImage: `url(${require("../PortfImg/3Solo/Section_solo16.jpg")})`,
        }}
      />
      <motion.div
        className="box-img"
        variants={variImg}
        style={{
          backgroundImage: `url(${require("../PortfImg/2Couple/Section_couple0.jpg")})`,
        }}
      />
    </div>
  );
};
