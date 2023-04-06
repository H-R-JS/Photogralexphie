import React from "react";
import { ShootingBoxPhone } from "./ArrayImgShooting";
import { Link } from "react-router-dom";

export const ShootingPhone = () => {
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
      <div className="shooting-box-container">
        {ShootingBoxPhone.map((item, index) => {
          return (
            <div key={index} className="shooting-box">
              <div className="shooting-box-content">
                <h3>{item.title}</h3>
                <span>{item.price}</span>
              </div>

              <div className="shooting-box-content-text">
                <div className="content-text">{item.text}</div>
              </div>
              <div style={{ pointerEvents: "none" }}>{item.container}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
