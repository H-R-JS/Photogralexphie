import React from "react";
import { ArrayPortfImgH, ArrayPortfImgV } from "./PortfImg/ArrayPortfImg";

export const Portfolio = () => {
  return (
    <section className="portf-page">
      <div className="portf-container">
        {ArrayPortfImgH.map((item, index) => {
          return (
            <img key={index} src={item.src} className="portf-img-horizontal" />
          );
        })}
        {ArrayPortfImgV.map((item, index) => {
          return (
            <img key={index} src={item.src} className="portf-img-vertical" />
          );
        })}
      </div>
    </section>
  );
};
/** */
