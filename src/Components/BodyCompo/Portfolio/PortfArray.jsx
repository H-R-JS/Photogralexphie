import React, { useState, useEffect, useRef } from "react";
import {
  ArrayImg1,
  ArrayImg2,
  ArrayImg3,
  ArrayImg4,
  ArrayImg5,
} from "../PortfImg/ArrayImg";
import { motion } from "framer-motion";

export const PortfArray = () => {
  return (
    <motion.section className="portf-section">
      <div className="portf-container">
        {ArrayImg1.map((item, index) => {
          return (
            <div className={`portf-img`}>
              <img key={index} src={item.src} alt="photogralexphie" />
            </div>
          );
        })}
      </div>
      <div className="portf-container">
        {ArrayImg2.map((item, index) => {
          return (
            <div className={`portf-img even`}>
              <img key={index} src={item.src} alt="photogralexphie" />
            </div>
          );
        })}
      </div>

      <div className="portf-container">
        {ArrayImg3.map((item, index) => {
          return (
            <div className={`portf-img`}>
              <img key={index} src={item.src} alt="photogralexphie" />
            </div>
          );
        })}
      </div>

      <div className="portf-container">
        {ArrayImg4.map((item, index) => {
          return (
            <div className={`portf-img even`}>
              <img key={index} src={item.src} alt="photogralexphie" />
            </div>
          );
        })}
      </div>

      <div className="portf-container">
        {ArrayImg5.map((item, index) => {
          return (
            <div className={`portf-img`}>
              <img key={index} src={item.src} alt="photogralexphie" />
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};
