document.addEventListener('DOMContentLoaded', function () {
  const taille = 100;
  const minesCount = 10;
  const tableau = new Array(taille).fill(0);

  // Génération du tableau HTML
  const table = document.getElementById('minesweeper');
  for (let i = 0; i < 10; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 10; j++) {
          const cell = document.createElement('td');
          const id = i * 10 + j;
          cell.id = 'case' + id;
          cell.addEventListener('click', function () {
              bombe(id);
          });
          row.appendChild(cell);
      }
      table.appendChild(row);
  }

  // Tirage aléatoire des mines
  function tirage() {
      let minesPlaced = 0;
      while (minesPlaced < minesCount) {
          const randomIndex = Math.floor(Math.random() * taille);
          if (tableau[randomIndex] !== 'x') {
              tableau[randomIndex] = 'x';
              minesPlaced++;
          }
      }
  }

  // Calcul des mines adjacentes
  function calculMinesAdjacentes() {
      const long = 10; // Longueur d'une ligne
      for (let i = 0; i < taille; i++) {
          let nbBombe = 0;
          if (tableau[i] !== 'x') {
              if (tableau[i - long] === 'x' && i >= long) nbBombe++;
              if (tableau[i - long + 1] === 'x' && i >= long && (i + 1) % long !== 0) nbBombe++;
              if (tableau[i + 1] === 'x' && (i + 1) % long !== 0) nbBombe++;
              if (tableau[i + long + 1] === 'x' && i < taille - long && (i + 1) % long !== 0) nbBombe++;
              if (tableau[i + long] === 'x' && i < taille - long) nbBombe++;
              if (tableau[i + long - 1] === 'x' && i < taille - long && i % long !== 0) nbBombe++;
              if (tableau[i - 1] === 'x' && i % long !== 0) nbBombe++;
              if (tableau[i - long - 1] === 'x' && i >= long && i % long !== 0) nbBombe++;
              tableau[i] = nbBombe;
          }
      }
  }

  // Fonction appelée lors d'un clic sur une case
  function bombe(id) {
      const caseIndex = parseInt(id);
      if (tableau[caseIndex] === 'x') {
          alert('Bombe !');
      } else {
          document.getElementById('case' + id).textContent = tableau[caseIndex];
      }
  }

  // Initialisation du jeu
  tirage();
  calculMinesAdjacentes();
});
