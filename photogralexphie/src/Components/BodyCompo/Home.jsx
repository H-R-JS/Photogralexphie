import React from "react";
import { ArrayImg } from "./HomeImg/ArrayImg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const image = require("../BodyCompo/HomeImg/Section_animal_phone.jpg");

export const Home = () => {
  return (
    <div>
      <Parallax pages={4} className="home-img-container">
        {ArrayImg.map((item, index) => {
          return (
            <ParallaxLayer key={index} offset={item.offset} speed={0}>
              <div className={item.class} />
            </ParallaxLayer>
          );
        })}
      </Parallax>
    </div>
  );
};
/** <ParallaxLayer speed={0.2}>
                <h2 style={item.marge}>{item.title}</h2>
              </ParallaxLayer> */
