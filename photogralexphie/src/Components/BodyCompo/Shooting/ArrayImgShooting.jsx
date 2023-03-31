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
    price: "30€",
    icon: <Icon />,
    text: "Tel que les portraits, d'animaux, seul ou en couple, au total de 20 sphotos par shooting .",

    img1: require("../PortfImg/4Event/Section_event2.jpg"),
    img2: require("../PortfImg/4Event/Section_event1.jpg"),
    img3: require("../PortfImg/4Event/Section_event4.jpg"),
  },
  {
    title: "Shooting Evenement",
    price: "100€",
    icon: <Icon />,
    text: "Tel que les mariages, baptêmes ou anniversaires, au total de 25 photos par shooting .",
    img1: require("../PortfImg/1Animals/Section_animal15.jpg"),
    img2: require("../PortfImg/3Solo/Section_solo16.jpg"),
    img3: require("../PortfImg/2Couple/Section_couple0.jpg"),
  },
];
