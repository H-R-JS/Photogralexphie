import React from "react";
import { ShootingBox } from "./ArrayImgShooting";
import { Link } from "react-router-dom";

export const ShootingPhone = () => {
  return (
    <main className="shooting-page">
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
      <section className="shooting-box-container">
        {ShootingBox.map((item, index) => {
          return (
            <article key={index} className="shooting-box">
              <p className="shooting-box-content">
                <h3>{item.title}</h3>
                <span>{item.price}</span>
                {item.text}
              </p>

              <aside style={{ pointerEvents: "none" }}>
                {item.containerPhone}
              </aside>
            </article>
          );
        })}
      </section>
    </main>
  );
};

/*<p className="shooting-box-content-text"></p>*/
