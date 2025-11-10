// Déclaration des variable / const //

const questionA = document.getElementById("downQuestionA");
const questionB = document.getElementById("downQuestionB");
const questionC = document.getElementById("downQuestionC");

const reponseA = document.getElementById("reponseA");
const reponseB = document.getElementById("reponseB");
const reponseC = document.getElementById("reponseC");

// Déclaration des variable / const //

questionA.addEventListener("click", function (e) {
  reponseA.classList.toggle("hidden");
});

questionB.addEventListener("click", function (e) {
  reponseB.classList.toggle("hidden");
});

questionC.addEventListener("click", function (e) {
  reponseC.classList.toggle("hidden");
});
