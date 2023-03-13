import React from "react";
import { ArrayImg } from "./HomeImg/ArrayImg";

export const Home = () => {
  return (
    <div className="home-img-container">
      {ArrayImg.map((item, index) => {
        return <div key={index} className={item.class}></div>;
      })}
    </div>
  );
};
