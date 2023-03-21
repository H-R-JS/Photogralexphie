import React from "react";
import { ArrayImgShootingN, ArrayImgShootingE } from "./ArrayImgShooting";
import { Link } from "react-router-dom";

export const Shooting = () => {
  return (
    <section className="shooting-page">
      <p className="shooting-descript">
        Je propose 2 types de shooting avec un prix différent, pour plus de
        précision n'hésitez à pas à me contacter sur mon{" "}
        <Link
          to="https://www.instagram.com/photogralexphie/"
          className="shooting-link"
        >
          Instagram
        </Link>
        .
      </p>
      <div className="shooting-container normal">
        {ArrayImgShootingN.map((item, index) => {
          console.log(item.img);
          return (
            <div
              key={index}
              className="shooting-img normal"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
          );
        })}
      </div>
      <div className="shooting-text normal">
        Shooting
        <br /> Normal :<br /> 30 €
      </div>
      <div className="shooting-container event">
        {ArrayImgShootingE.map((item, index) => {
          console.log(item.img);
          return (
            <div
              key={index}
              className="shooting-img event"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
          );
        })}
      </div>
      <div className="shooting-text event">
        Shooting
        <br /> Evenement :<br /> 100 €
      </div>
    </section>
  );
};
