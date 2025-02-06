// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un évènement sur la fenêtre (window) puis animer la position de ces ronds (top, left injecter "e")

// Donner un style de transparence aux ronds (mix-blend-mode)

// Quand on passe sur les liens ils deviennent "clicables" = plus gros en z-index +1

// --------------------------------------------------------------------------------------------

// On va chercher les cercles pour faire notre evenement "mousemove" dessus :
const mousemoveSmall = document.querySelector(".mousemove_small");
const mousemoveMiddle = document.querySelector(".mousemove_middle");
const mousemoveLarge = document.querySelector(".mousemove_large");

// On va chercher des data sur l'event "mousemove"
// window.addEventListener ('mousemove', (e) => {
//   console.log(e);
// });
// A noter que JS reconnaît directement les "id", on ne sera pas obligé d'aller les récupérer dans le DOM, donc il vaut mieux identifier les éléments en HTML par des "id" !

// window.addEventListener("mousemove", (e) => {
//   mousemoveSmall.style.left = e.pageX + "px";
//   mousemoveSmall.style.top = e.pageY + "px";
//   mousemoveMiddle.style.left = e.pageX + "px";
//   mousemoveMiddle.style.top = e.pageY + "px";
//   mousemoveLarge.style.left = e.pageX + "px";
//   mousemoveLarge.style.top = e.pageY + "px";
// });

// Optimisation du code avec "forEach":
const allMouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  allMouses.forEach((mouse) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
  });
});
