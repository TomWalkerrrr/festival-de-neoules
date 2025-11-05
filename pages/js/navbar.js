// ======= 🧨 Déclaration 🧨 ========= \\

const openMenu = document.getElementById("openMenu");
const ulMenu = document.getElementById("ulMenu");

// ======= 🧨 Déclaration  🧨========= \\

openMenu.addEventListener("click", () => {
  ulMenu.classList.toggle("hidden");
  console.log("Test");
});
