// 🧵 Configuration du carousel 🧵

const carousel = document.getElementById("carousel");
const totalItems = carousel.children.length;
const itemsVisible = 3;
let index = 0;

// 🧵 Configuration du carousel 🧵

// 🥼 L'auto scroll pour le carousel des partenaire 🥼

function getItemVisible() {
  // 1 pour petit ecrant sinon 3
  return window.innerWidth < 640 ? 1 : 3;
}

function updateCarousel() {
  const itemsVisible = getItemVisible();
  const translateX = -(index * (100 / itemsVisible));
  carousel.style.transform = `translateX(${translateX}%)`;
}

function autoScroll() {
  index++;
  if (index > totalItems - itemsVisible) {
    index = 0;
  }
  updateCarousel();
}

// 🥼 L'auto scroll pour le carousel des partenaire 🥼

// 👔 Interval toutes les 3 seconde (3000ms) pour le changement de partenaire 👔

setInterval(() => {
  autoScroll();
}, 3000);

// 👔 Interval toutes les 3 seconde (3000ms) pour le changement de partenaire 👔

// 👕 Mise à jour quand on redimensionne la fenêtre 👕

window.addEventListener("resize", updateCarousel);

// 👕 Mise à jour quand on redimensionne la fenêtre 👕
