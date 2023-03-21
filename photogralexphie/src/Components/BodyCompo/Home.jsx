import React from "react";
import { ArrayImg } from "./HomeImg/ArrayImg";

const image = require("../BodyCompo/HomeImg/Section_animal_phone.jpg");

export const Home = () => {
  return (
    <section>
      <div className="home-container">
        <div className="home-img-container one">
          <div className="home-img one" />
          <div className="home-img two" />
          <div className="box-color" />
        </div>
      </div>
    </section>
  );
};
/** <ParallaxLayer speed={0.2}>
                <h2 style={item.marge}>{item.title}</h2>
              </ParallaxLayer> */
