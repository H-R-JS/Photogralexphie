import React from "react";
import { ContainerImgEvent, ContainerImgNormal } from "./ContainerImg";

export const Icon = () => {
  return (
    <span className="material-symbols-outlined arrow-hover">
      arrow_selector_tool
    </span>
  );
};

export const ShootingBox = [
  {
    title: "Shooting Normal",
    price: "30 €",
    text: "Tel que les portraits d'animaux, personne seul ou en couple, au total de 20 photos par shooting .",
    container: <ContainerImgNormal />,
    containerPhone: <ContainerImgEvent />,
  },
  {
    title: "Shooting Evenement",
    price: "100 €",
    text: "Tel que les mariages, baptêmes ou anniversaires, au total de 25 photos par shooting .",
    container: <ContainerImgEvent />,
    containerPhone: <ContainerImgNormal />,
  },
];
