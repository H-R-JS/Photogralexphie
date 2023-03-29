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
      <div className="portf-container" id="animals">
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
      <div className="portf-container" id="solo">
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
      <div className="portf-container" id="couple">
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
      <div className="portf-container" id="event">
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
