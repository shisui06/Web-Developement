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
    const activeFilters = Array.from(document.querySelectorAll('.filter-button.active'))
        .map(button => button.id.replace('filter-', ''));

    
    if (activeFilters.length === 0) {
        animalContainer.innerHTML = '<p>Aucun animal disponible. Veuillez activer un filtre.</p>';
    } else {
        const filteredAnimals = animaux.filter(animal => activeFilters.includes(animal.type));

        
        animalContainer.innerHTML = filteredAnimals.length > 0
            ? filteredAnimals.map(animal => {
                return `
                    <div class="carte-animal ${animal.type}" onclick='afficherModal(${JSON.stringify(animal)})'>
                        <img src="${animal.imageUrl}" alt="${animal.nom}">
                        <div class="carte-animal-info">
                            <h2>${animal.nom}</h2>
                            <p>Age: ${animal.age} ans</p>
                            <p>Localisation: ${animal.localisation}</p>
                        </div>
                    </div>
                `;
            }).join('')
            : '<p>Aucun animal correspondant aux critères sélectionnés.</p>';
    }
}

function toggleAnimal(type) {
    const filterButton = document.getElementById(`filter-${type}`);

    
    if (filterButton.classList.contains('inactive')) {
        filterButton.classList.remove('inactive');
        filterButton.classList.add('active');
    } else {
        filterButton.classList.remove('active');
        filterButton.classList.add('inactive');
    }

    renderAnimals();
}

function afficherModal(animal) {
    const modal = document.getElementById('modal');
    const details = document.getElementById('modal-details');
    details.innerHTML = `
        <div class='animal-modal'>
            <h2>${animal.nom}</h2>
            <img src="${animal.imageUrl}" alt="${animal.nom}" style="width: 100%; max-width: 400px; border-radius: 8px;">
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
