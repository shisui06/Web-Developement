
// JavaScript pour générer la grille et gérer les évènements
const grille = [];
const taille = 100; // taille du tableau (10x10)
const long = 10; // longueur de chaque ligne

// Génération de la grille
const tableau = document.getElementById('tableau');

for (let i = 0; i < taille; i++) {
    const caseElement = document.createElement('div');
    caseElement.classList.add('case');
    caseElement.id = 'case' + (i + 1); // ids de case1 à case100

    // Gestion de clic sur les cases
    caseElement.addEventListener('click', function() {
        bombe(this.id);
    });

    tableau.appendChild(caseElement);
    grille.push(0); // initialisation avec 0
}

// Fonction pour placer les mines aléatoirement
function tirage() {
    let minesPlaces = 0;
    while (minesPlaces < 10) {
        const index = Math.floor(Math.random() * taille);
        if (grille[index] !== 'x') {
            grille[index] = 'x';
            minesPlaces++;
        }
    }
}

// Fonction pour gérer l'évènement de clic sur une case
function bombe(idCase) {
    const numeroCase = parseInt(idCase.substring(4)) - 1; // numéro de 0 à 99

    if (grille[numeroCase] === 'x') {
        alert('Boom! Vous avez touché une mine!');
        // Gérer la fin du jeu ici
    } else {
        // Afficher le nombre de mines adjacentes ou laisser vide
        const nbMinesAdjacentes = calculerMinesAdjacentes(numeroCase);
        document.getElementById(idCase).innerText = nbMinesAdjacentes !== 0 ? nbMinesAdjacentes : '';
        document.getElementById(idCase).style.backgroundColor = '#fff'; // Révéler la case
    }
}

// Fonction pour calculer le nombre de mines adjacentes à une case
function calculerMinesAdjacentes(index) {
    let nbBombe = 0;
    if (grille[index] !== 'x') {
        if (index >= long && grille[index - long] === 'x')
            nbBombe++;
        if (index >= long && (index + 1) % long !== 0 && grille[index - long + 1] === 'x')
            nbBombe++;
        if ((index + 1) % long !== 0 && grille[index + 1] === 'x')
            nbBombe++;
        if (index <= taille - long - 1 && (index + 1) % long !== 0 && grille[index + long + 1] === 'x')
            nbBombe++;
        if (index <= taille - long - 1 && grille[index + long] === 'x')
            nbBombe++;
        if (index <= taille - long - 1 && index % long !== 0 && grille[index + long - 1] === 'x')
            nbBombe++;
        if (index % long !== 0 && grille[index - 1] === 'x')
            nbBombe++;
        if (index >= long && index % long !== 0 && grille[index - long - 1] === 'x')
            nbBombe++;
    }
    return nbBombe;
}

// Initialisation du jeu au chargement de la page
tirage();
