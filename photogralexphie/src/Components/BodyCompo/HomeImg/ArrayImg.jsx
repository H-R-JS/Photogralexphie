const image1 = require("../../BodyCompo/HomeImg/Section_animal_phone.jpg");
const image2 = require("../../BodyCompo/HomeImg/Section_seul.jpg");
const image3 = require("../../BodyCompo/HomeImg/Section_couple_phone.jpg");
const image4 = require("../../BodyCompo/HomeImg/Section_event_phone.jpg");

export const ArrayImg = [
  {
    title: "Animaux",
    class: "home-img section-animals",
    src: require("./Section_animal_phone.jpg"),
    offset: 0,
    style: {
      backgroundImage: `url(${image1})`,
      backgroundSize: "395px 600px",
      width: "100vw",
      height: "72vh",
    },
    marge: { margin: "500px 140px" },
  },
  {
    title: "Portrait Seul",
    class: "home-img section-solo",
    src: require("./Section_seul.jpg"),
    offset: 0.71,
    style: {
      backgroundImage: `url(${image2})`,
      backgroundSize: "395px 700px",
      textAlign: "center",
      height: "80vh",
    },
    marge: { margin: "600px 140px" },
  },
  {
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
  },
];
