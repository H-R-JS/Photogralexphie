import React from "react";
import { ArrayPortfImgH, ArrayPortfImgV } from "./PortfImg/ArrayPortfImg";

export const Portfolio = () => {
  return (
    <section className="portf-page">
      <div className="portf-container">
        {ArrayPortfImgH.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.src})` }}
              className={item.class}
            />
          );
        })}
      </div>
    </section>
  );
};
/**{ArrayPortfImgV.map((item, index) => {
          return (
            <div key={index} src={item.src} className="portf-img vertical" />
          );
        })} */
