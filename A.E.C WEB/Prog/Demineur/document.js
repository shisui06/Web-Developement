document.addEventListener('DOMContentLoaded', (event) => {
    const table = document.getElementById('minesweeper');
    const rows = 10;
    const cols = 10;
    const totalCells = rows * cols;
    const totalMines = Math.floor(totalCells * 0.1); // 10% de 100 est 10

    // Créez et initialisez le tableau JavaScript
    let gameBoard = [];
    for (let i = 0; i < totalCells; i++) {
        gameBoard.push(0);
    }

    // Fonction pour tirer les mines au hasard
    function tirage() {
        let minesPlaced = 0;
        while (minesPlaced < totalMines) {
            let randomIndex = Math.floor(Math.random() * totalCells);
            if (gameBoard[randomIndex] !== 'x') {
                gameBoard[randomIndex] = 'x';
                minesPlaced++;
            }
        }
    }

    // Appelez la fonction de tirage pour placer les mines
    tirage();

    // Fonction pour calculer les mines adjacentes
    function calculerMinesAdjacentes() {
        for (let i = 0; i < totalCells; i++) {
            let nbBombe = 0;
            if (gameBoard[i] !== 'x') {
                // Vérifiez les huit cases adjacentes
                if (i >= cols && gameBoard[i - cols] === 'x') nbBombe++; // haut
                if (i >= cols && (i % cols) < (cols - 1) && gameBoard[i - cols + 1] === 'x') nbBombe++; // haut-droite
                if ((i % cols) < (cols - 1) && gameBoard[i + 1] === 'x') nbBombe++; // droite
                if (i < totalCells - cols && (i % cols) < (cols - 1) && gameBoard[i + cols + 1] === 'x') nbBombe++; // bas-droite
                if (i < totalCells - cols && gameBoard[i + cols] === 'x') nbBombe++; // bas
                if (i < totalCells - cols && (i % cols) > 0 && gameBoard[i + cols - 1] === 'x') nbBombe++; // bas-gauche
                if ((i % cols) > 0 && gameBoard[i - 1] === 'x') nbBombe++; // gauche
                if (i >= cols && (i % cols) > 0 && gameBoard[i - cols - 1] === 'x') nbBombe++; // haut-gauche
                gameBoard[i] = nbBombe;
            }
        }
    }

    // Appelez la fonction pour calculer les mines adjacentes
    calculerMinesAdjacentes();

    // Fonction pour gérer les clics sur les cases
    function bombe(event) {
        const idCase = event.target.parentElement.id;
        const caseNumber = parseInt(idCase.substring(4)); // Extrait le numéro de la case
        if (gameBoard[caseNumber] === 'x') {
            alert('Boum ! Vous avez cliqué sur une bombe.');
        } else {
            alert('Pas de bombe ici. Mines adjacentes : ' + gameBoard[caseNumber]);
        }
    }

    // Génération du tableau HTML et ajout des gestionnaires d'événements
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('td');
            cell.id = 'case' + (i * cols + j);
            const img = document.createElement('img');
            img.src = 'path_to_your_gray_square_image.png';
            img.addEventListener('click', bombe); // Ajoutez le gestionnaire d'événements ici
            cell.appendChild(img);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    console.log(gameBoard); // Vérifiez le tableau dans la console
});
