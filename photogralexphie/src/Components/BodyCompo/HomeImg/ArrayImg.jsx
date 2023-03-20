const image1 = require("../../BodyCompo/HomeImg/Section_animal_phone.jpg");
const image2 = require("../../BodyCompo/HomeImg/Section_seul.jpg");
const image3 = require("../../BodyCompo/HomeImg/Section_couple_phone.jpg");
const image4 = require("../../BodyCompo/HomeImg/Section_event_phone.jpg");

export const ArrayImg = [
  {
    title: "Animaux",
    offset: 0,
    class: "home-img one",
    marge: { margin: "500px 140px" },
  },
  {
    title: "Portrait Seul",
    offset: 1,
    class: "home-img two",
    marge: { margin: "600px 140px" },
  },
  /*{
    title: "Portrait Couple",
    class: "home-img section-couple",
    src: require("./Section_couple_phone.jpg"),
    offset: 1,
    style: {
      backgroundImage: `url(${image3})`,
      backgroundSize: "395px 600px",
      textAlign: "center",
      height: "72vh",
    },
    marge: { margin: "600px 140px" },
  },
  {
    title: "Portrait Événement",
    class: "home-img section-event",
    src: require("./Section_event_phone.jpg"),
    offset: 1.7,
    style: {
      backgroundImage: `url(${image4})`,
      backgroundSize: "395px 700px",
      textAlign: "center",
      height: "72vh",
    },
    marge: { margin: "680px 130px" },
  },*/
];
