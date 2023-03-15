import React from "react";
import { ArrayPortfImg } from "./PortfImg/ArrayPortfImg";

export const Portfolio = () => {
  return (
    <section className="portf-page">
      <div className="grid-test">
        <div className="test"></div>
        <div className="test-bleu"></div>
      </div>
    </section>
  );
};
/**{ArrayPortfImg.map((item, index) => {
          return <img key={index} src={item.src} className="portf-img" />;
        })} */
