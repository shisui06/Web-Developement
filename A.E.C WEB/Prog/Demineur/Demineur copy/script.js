document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("minesweeper-table");
    const size = 10; // Taille du tableau (10x10)
    const numMines = Math.floor(size * size * 0.1); // 10% des cases sont des mines
    let minefield = new Array(size * size).fill(0);

    // Générer le tableau HTML et assigner des IDs
    for (let i = 0; i < size; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < size; j++) {
            let cell = document.createElement("td");
            let img = document.createElement("img");
            img.src = "carre.jpg";
            img.width = 20;
            img.height = 20;
            cell.appendChild(img);
            cell.id = `case${i * size + j}`;
            cell.addEventListener("click", handleClick);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    // Fonction pour tirer les mines au hasard
    function tirage() {
        let minesPlaced = 0;
        while (minesPlaced < numMines) {
            let randomIndex = Math.floor(Math.random() * size * size);
            if (minefield[randomIndex] !== 'x') {
                minefield[randomIndex] = 'x';
                minesPlaced++;
            }
        }
    }

    // Appeler la fonction tirage pour placer les mines
    tirage();

    // Fonction de gestion des clics
    function handleClick(event) {
        const id = event.currentTarget.id;
        const index = parseInt(id.substring(4));
        if (minefield[index] === 'x') {
            alert("Boom! Vous avez cliqué sur une mine.");
        } else {
            alert("Pas de mine ici.");
        }
    }

    // Fonction pour déterminer le nombre de mines adjacentes
    function calculateAdjacentMines() {
        for (let i = 0; i < minefield.length; i++) {
            if (minefield[i] !== 'x') {
                let nbBombe = 0;
                const row = Math.floor(i / size);
                const col = i % size;
                
                const positions = [
                    {r: row - 1, c: col - 1},
                    {r: row - 1, c: col},
                    {r: row - 1, c: col + 1},
                    {r: row, c: col - 1},
                    {r: row, c: col + 1},
                    {r: row + 1, c: col - 1},
                    {r: row + 1, c: col},
                    {r: row + 1, c: col + 1},
                ];

                positions.forEach(pos => {
                    if (pos.r >= 0 && pos.r < size && pos.c >= 0 && pos.c < size) {
                        const adjIndex = pos.r * size + pos.c;
                        if (minefield[adjIndex] === 'x') {
                            nbBombe++;
                        }
                    }
                });

                minefield[i] = nbBombe;
            }
        }
    }

    // Calculer les mines adjacentes
    calculateAdjacentMines();
});
