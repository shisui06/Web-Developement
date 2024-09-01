let animaux = [];
let isListView = true;

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
            <div class="carte-animal ${animal.type}" onclick='afficherModal(${JSON.stringify(animal)})'>
                <img src="assets/${animal.type}.jpg" alt="${animal.nom}">
                <div class="carte-animal-info">
                    <h2>${animal.nom}</h2>
                    <p>Age: ${animal.age} ans</p>
                    <p>Localisation: ${animal.localisation}</p>
                </div>
            </div>
        `;
    }).join('');
}

function toggleAnimal(type) {
    const filterButton = document.getElementById(`filter-${type}`);
    filterButton.classList.toggle('active');

    const activeFilters = Array.from(document.querySelectorAll('.filter-button.active'))
        .map(button => button.id.replace('filter-', ''));

    // Vérifier si aucun filtre n'est actif
    const showNoAnimals = activeFilters.length === 0;

    animaux.forEach(animal => {
        const animalElement = document.querySelector(`.carte-animal.${animal.type}`);
        if (showNoAnimals) {
            animalElement.style.display = 'none';
        } else if (activeFilters.includes(animal.type)) {
            animalElement.style.display = 'flex';
        } else {
            animalElement.style.display = 'none';
        }
    });
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

document.getElementById('toggle-view').addEventListener('click', function() {
    const animalContainer = document.getElementById('animal-container');
    if (isListView) {
        animalContainer.classList.remove('list-view');
        animalContainer.classList.add('grid-view');
        this.textContent = 'Vue en liste';
    } else {
        animalContainer.classList.remove('grid-view');
        animalContainer.classList.add('list-view');
        this.textContent = 'Vue en grille';
    }
    isListView = !isListView;
});

document.getElementById('grid-size').addEventListener('input', function() {
    const gridSize = this.value + 'px';
    document.querySelector('.grid-view').style.gridTemplateColumns = `repeat(auto-fill, minmax(${gridSize}, 1fr))`;
});

document.querySelector('.fermer-modal').addEventListener('click', fermerModal);
document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target === this) {
        fermerModal();
    }
});
