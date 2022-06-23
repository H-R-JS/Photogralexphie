/// CHANGEMENT DE L IMAGE DE BIENVENUE ///

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var i = 0;
var booo = true;

var flechele = document.getElementById("flleft");
var flecheri = document.getElementById("flright");

//// Prechargement de l'image avant d'être draw, avec l'objet Image et en lui appliquant directement une source. ///

var image0 = new Image();

image0.src = "image/Btop.jpeg";

////Le draw de l'image une fois precharger avec l'event "load", pour charger l'image et
//le dessiner avec "drawImage" dans le canvas . ///

image0.addEventListener(
  "load",
  function () {
    context.drawImage(image0, 0, 0, 1200, 850);
  },
  false
);

//// Initialisation des sources ///

var src00 = "image/Btop.jpeg";
var src11 = "image/Btop22.jpeg";
var src22 = "image/Btop333.jpeg";
var src33 = "image/Btop444.jpeg";

/// Change d'image avec la fleche droite ///

flecheri.addEventListener("click", change0);

function change0() {
  if (i == 0 && booo == true) {
    canvas.style.opacity = "0";
    booo = false;
    setTimeout(function () {
      canvas.style.opacity = "1";
      image0.src = src11;
      i++;
    }, 1000);
    setTimeout(function () {
      booo = true;
    }, 1200);
  } else if (i == 1 && booo == true) {
    canvas.style.opacity = "0";
    booo = false;
    setTimeout(function () {
      canvas.style.opacity = "1";
      image0.src = src22;
      i++;
    }, 1000);
    setTimeout(function () {
      booo = true;
    }, 1200);
  } else if (i == 2 && booo == true) {
    canvas.style.opacity = "0";
    booo = false;
    setTimeout(function () {
      canvas.style.opacity = "1";
      image0.src = src33;
      i++;
    }, 1000);
    setTimeout(function () {
      booo = true;
    }, 1200);
  } else if (i == 3 && booo == true) {
    canvas.style.opacity = "0";
    booo = false;
    setTimeout(function () {
      canvas.style.opacity = "1";
      image0.src = src00;
      i = 0;
    }, 1050);
    setTimeout(function () {
      booo = true;
    }, 1250);
  }
}

/// Change d'image avec la fleche gauche ///

flechele.addEventListener("click", change1);

function change1() {
  if (i == 3 && booo == true) {
    canvas.style.opacity = "0";
    booo = false;
    setTimeout(function () {
      canvas.style.opacity = "1";
      image0.src = src22;
      i--;
    }, 1000);
    setTimeout(function () {
      booo = true;
    }, 1200);
  } else if (i == 2 && booo == true) {
    canvas.style.opacity = "0";
    booo = false;
    setTimeout(function () {
      canvas.style.opacity = "1";
      image0.src = src11;
      i--;
    }, 1000);
    setTimeout(function () {
      booo = true;
    }, 1200);
  } else if (i == 1 && booo == true) {
    canvas.style.opacity = "0";
    booo = false;
    setTimeout(function () {
      canvas.style.opacity = "1";
      image0.src = src00;
      i--;
    }, 1000);
    setTimeout(function () {
      booo = true;
    }, 1200);
  } else if (i == 0 && booo == true) {
    canvas.style.opacity = "0";
    booo = false;
    setTimeout(function () {
      canvas.style.opacity = "1";
      image0.src = src33;
      i = 3;
    }, 1000);
    setTimeout(function () {
      booo = true;
    }, 1200);
  }
}

/// Aparition des fleches lorsque la sourie passe dans le champ du div "alltop" ///

var opac = document.getElementById("alltop");

opac.addEventListener("mouseover", function () {
  flechele.style.opacity = "1";
  flecheri.style.opacity = "1";
});

opac.addEventListener("mouseout", function () {
  flechele.style.opacity = "0";
  flecheri.style.opacity = "0";
});

/// CHANGEMENT D'IMAGE A COTE DE L EXPERIENCE ///

/// Apparition du changement d'image, à côté de la flèche ///

var textch = document.getElementById("changimag");
var change = document.getElementById("changtext");
var img = document.getElementById("photo1");
var context2 = img.getContext("2d");
var a = 0;
var boo = true;

var img1 = new Image();
img1.src = "image/photo1.jpeg";

var img2 = new Image();
img2.src = "image/photo1bis.jpeg";

img1.addEventListener(
  "load",
  function () {
    context2.drawImage(img1, 0, 0, 600, 870);
  },
  false
);

textch.addEventListener("mouseover", function () {
  change.style.opacity = "1";
});

textch.addEventListener("mouseout", function () {
  change.style.opacity = "0";
});

textch.addEventListener("click", function () {
  if (a == 0 && boo == true) {
    photo1.style.opacity = "0";
    boo = false;
    setTimeout(function () {
      photo1.style.opacity = "1";
      img1.src = "image/photo1bis.jpeg";
      a++;
    }, 800);
    setTimeout(function () {
      boo = true;
    }, 1000);
  } else if (a == 1 && boo == true) {
    photo1.style.opacity = "0";
    boo = false;
    setTimeout(function () {
      photo1.style.opacity = "1";
      img1.src = "image/photo1.jpeg";
      a--;
    }, 800);
    setTimeout(function () {
      boo = true;
    }, 1000);
  }
});
