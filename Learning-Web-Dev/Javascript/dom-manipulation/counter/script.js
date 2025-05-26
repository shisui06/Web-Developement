// On récupère les éléments HTML
const valeur = document.getElementById('valeur');
const boutonPlus = document.getElementById('incrementer');
const boutonMoins = document.getElementById('decrementer');
const boutonReset = document.getElementById('reset');

// Variable pour stocker le nombre
let compteur = 0;

// Quand on clique sur Incrémenter
boutonPlus.addEventListener('click', function () {
  compteur++;
  valeur.textContent = compteur;
});

// Quand on clique sur Décrémenter
boutonMoins.addEventListener('click', function () {
  compteur--;
  valeur.textContent = compteur;
});

// Quand on clique sur Réinitialiser
boutonReset.addEventListener('click', function () {
  compteur = 0;
  valeur.textContent = compteur;
});
