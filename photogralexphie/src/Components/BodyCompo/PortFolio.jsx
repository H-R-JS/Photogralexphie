import React from "react";
import {
  ArrayPortfImg1,
  ArrayPortfImg2,
  ArrayPortfImg3,
  ArrayPortfImg4,
} from "./PortfImg/ArrayPortfImg";

export const Portfolio = () => {
  return (
    <section className="portf-page">
      <div className="portf-container">
        {ArrayPortfImg1.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.src})` }}
              className={item.class}
            />
          );
        })}
        <div className="ligne-portf" />
      </div>
      <div className="portf-container">
        {ArrayPortfImg2.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.src})` }}
              className={item.class}
            />
          );
        })}
        <div className="ligne-portf" />
      </div>
      <div className="portf-container">
        {ArrayPortfImg3.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.src})` }}
              className={item.class}
            />
          );
        })}
        <div className="ligne-portf" />
      </div>
      <div className="portf-container">
        {ArrayPortfImg4.map((item, index) => {
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
