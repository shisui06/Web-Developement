document.addEventListener('DOMContentLoaded', function () {
    const taille = 100;
    const compteurmine = 10;
    const tableau = new Array(taille).fill(0);

    
    const table = document.getElementById('tablemine');
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            const id = i * 10 + j;
            cell.id = 'case' + id;

            
            const img = document.createElement('img');
            img.src = 'gris.png'; 
            img.alt = 'gris.png'; 
            img.style.width = '100%'; 
            img.style.height = '100%'; 
            img.style.objectFit = 'cover'; 
            cell.appendChild(img); 
            cell.style.padding = '0'; 

            
            cell.addEventListener('click', function () {
                bombe(id);
            });
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    
    function tirage() {
        let minesPlaced = 0;
        while (minesPlaced < compteurmine) {
            const randomIndex = Math.floor(Math.random() * taille);
            if (tableau[randomIndex] !== 'x') {
                tableau[randomIndex] = 'x';
                minesPlaced++;
            }
        }
    }

    
    function calculMinesAdjacentes() {
        const long = 10; 
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

    
    function bombe(id) {
        const caseIndex = parseInt(id);
        if (tableau[caseIndex] === 'x') {
            alert('Bombe !');
        } else {
            document.getElementById('case' + id).textContent = tableau[caseIndex];
        }
    }

    
    tirage();
    calculMinesAdjacentes();
});
