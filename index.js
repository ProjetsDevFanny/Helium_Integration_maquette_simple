// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un évènement sur la fenêtre (window) puis animer la position de ces ronds (top, left injecter "e")

// Quand on passe sur les liens ils deviennent "clicables" = plus gros en z-index +1

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// --------------------------------------------------------------------------------------------

const mousemoveSmall = document.querySelector(".mousemove_small");
const mousemoveMiddle = document.querySelector(".mousemove_middle");
const mousemoveLarge = document.querySelector(".mousemove_large");
// console.log(mousemoveSmall);
// console.log(mousemoveMiddle);
// console.log(mousemoveLarge);

// On va chercher des data sur l'event "mousemove"
// window.addEventListener ('mousemove', (e) => {
//   console.log(e);
// });

window.addEventListener("mousemove", (e) => {
  mousemoveSmall.style.left = e.pageX + "px";
  mousemoveSmall.style.top = e.pageY + "px";
});

window.addEventListener("mousemove", (e) => {
  mousemoveMiddle.style.left = e.pageX + "px";
  mousemoveMiddle.style.top = e.pageY + "px";
});

window.addEventListener("mousemove", (e) => {
 mousemoveLarge.style.left = e.pageX + "px";
 mousemoveLarge.style.top = e.pageY + "px";
});
