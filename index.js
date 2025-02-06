// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un évènement sur la fenêtre (window) puis animer la position de ces ronds (top, left injecter "e")

// Donner un style de transparence aux ronds (mix-blend-mode)

// Quand on passe sur les liens ils deviennent "clicables" = plus gros en z-index +1

// --------------------------------------------------------------------------------------------

// On va chercher les cercles pour faire notre evenement "mousemove" dessus :
const mousemoveSmall = document.querySelector(".mousemove_small");
const mousemoveMiddle = document.querySelector(".mousemove_middle");
const mousemoveLarge = document.querySelector(".mousemove_large");
// console.log(mousemoveSmall);
// console.log(mousemoveMiddle);
// console.log(mousemoveLarge);

// On va chercher les liens de navigations pour les rendre cliquables:
const helium = document.querySelector("h3");
const navLink = document.querySelector("ul");

// On va chercher des data sur l'event "mousemove"
// window.addEventListener ('mousemove', (e) => {
//   console.log(e);
// });

window.addEventListener("mousemove", (e) => {
  mousemoveSmall.style.left = e.pageX + "px";
  mousemoveSmall.style.top = e.pageY + "px";
  mousemoveMiddle.style.left = e.pageX + "px";
  mousemoveMiddle.style.top = e.pageY + "px";
  mousemoveLarge.style.left = e.pageX + "px";
  mousemoveLarge.style.top = e.pageY + "px";
});

// Liens cliquables:
// helium.addEventListener("mouseover", (event) => {
//   event.target.style.color = "blue";

//  });
// helium.addEventListener("mouseout", (event) => {
//   event.target.style.color = "white";

//  });


