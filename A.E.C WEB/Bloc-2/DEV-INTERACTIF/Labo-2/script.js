let animaux = [];
let isListView = true;

// Charger les données des animaux depuis le fichier JSON
fetch('animaux.json')
    .then(response => response.json())
    .then(data => {
        animaux = data.animaux;
        renderAnimals();
    });

function renderAnimals() {
    const animalContainer = document.getElementById('animal-container');
    animalContainer.innerHTML = animaux.map(animal => {
        return `
            <div class="carte-animal ${animal.type}" onclick='afficherModal(${JSON.stringify(animal)})' data-location="${animal.localisation}">
                <img src="assets/${animal.type}.jpg" alt="${animal.nom}">
                <div class="carte-animal-info">
                <h2>${animal.nom}</h2>
                <p>Age: ${animal.age} ans</p>
                <p>Localisation: ${animal.localisation}</p>
                </div>
            </div>
        `;  
    }).join('');
    
    // Initialisation de la vue en liste
    animalContainer.classList.add('list-view');
}

function toggleAnimal(type) {
    document.querySelectorAll('.carte-animal').forEach(card => {
        if (type === 'tous' || card.classList.contains(type)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    console.log(`Filtre changé pour ${type}`);
}

function afficherModal(animal) {
    const modal = document.getElementById('modal');
    const details = document.getElementById('modal-details');
    details.innerHTML = `
    <div class='animal-modal'>
        <h2>${animal.nom}</h2>
        <img src="assets/${animal.type}.jpg" alt="${animal.nom}">
        <p>Type: ${animal.type}</p>
        <p>Age: ${animal.age} ans</p>
        <p>Localisation: ${animal.localisation}</p>
        <p>Description: ${animal.description}</p>
    </div>
    `;
    modal.classList.remove('hidden');
}

function fermerModal() {
    document.getElementById('modal').classList.add('hidden');
}

// Toggle entre vue liste et grille
document.getElementById('toggle-view').addEventListener('click', function() {
    isListView = !isListView;
    const animalContainer = document.getElementById('animal-container');
    if (isListView) {
        animalContainer.classList.remove('grid-view');
        animalContainer.classList.add('list-view');
        this.textContent = 'Vue en grille';
    } else {
        animalContainer.classList.remove('list-view');
        animalContainer.classList.add('grid-view');
        this.textContent = 'Vue en liste';
    }
    console.log(`Changement de style d'affichage : ${isListView ? 'liste' : 'grille'}`);
});

// Contrôle de la taille des cartes en mode grille
document.getElementById('grid-size').addEventListener('input', function() {
    const size = this.value;
    document.querySelectorAll('.carte-animal').forEach(card => {
        card.style.width = `${size}px`;
        card.style.height = `${size}px`;
    });
    console.log(`Taille de carte changée à ${size}px`);
});

// Initialisation
document.getElementById('toggle-view').textContent = 'Vue en grille';