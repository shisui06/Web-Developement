let products = [
    // Example product data
    { name: 'Product 1', description: 'Description 1', price: 10.00, stock: 100, images: ['product1.jpg'], wikipedia: 'https://wikipedia.org/product1' },
    { name: 'Product 2', description: 'Description 2', price: 20.00, stock: 50, images: ['product2.jpg'], wikipedia: 'https://wikipedia.org/product2' }
    // Add more products as needed
];

function showAutocompleteSuggestions() {
    const input = document.getElementById('search');
    const searchTerm = input.value.toLowerCase();
    const suggestions = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    
    // Clear previous suggestions
    const suggestionList = document.getElementById('autocomplete-list');
    suggestionList.innerHTML = '';

    suggestions.forEach((product, index) => {
        const suggestionItem = document.createElement('div');
        suggestionItem.textContent = product.name;
        suggestionItem.className = 'autocomplete-item';
        suggestionItem.dataset.index = index;
        suggestionItem.addEventListener('click', () => {
            input.value = product.name;
            searchProducts();
        });
        suggestionList.appendChild(suggestionItem);
    });

    // Show or hide suggestions based on the number of suggestions
    suggestionList.style.display = suggestions.length ? 'block' : 'none';
}

function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    filteredProducts.forEach((product, index) => {
        const item = document.createElement('div');
        item.className = 'product-item';
        item.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <p>Stock: ${product.stock}</p>
        `;
        item.dataset.index = index;
        productList.appendChild(item);
    });

    // Clear suggestions after search
    document.getElementById('autocomplete-list').style.display = 'none';
}

function addToCart(index, quantity) {
    if (products[index].stock >= quantity) {
        products[index].stock -= quantity;
        updateCart(index, quantity);
        alert('Product added to cart!');
        searchProducts();  // Update the displayed product list
    } else {
        alert('Not enough stock!');
    }
}

function updateCart(index, quantity) {
    // Implement cart update logic here
}

function showModal(index) {
    const product = products[index];
    const modal = document.getElementById('product-modal');
    modal.querySelector('.modal-title').textContent = product.name;
    modal.querySelector('.modal-description').textContent = product.description;
    modal.querySelector('.modal-price').textContent = `$${product.price.toFixed(2)}`;
    modal.querySelector('.modal-stock').textContent = `Stock: ${product.stock}`;
    modal.querySelector('#modal-add-to-cart').dataset.index = index;
    document.getElementById('product-modal').style.display = 'block';
}

function setupEventListeners() {
    document.getElementById('search').addEventListener('input', showAutocompleteSuggestions);
    document.getElementById('search-btn').addEventListener('click', searchProducts);
    document.getElementById('search').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });

    document.getElementById('home-link').addEventListener('click', (e) => {
        e.preventDefault();
        renderProducts();
    });

    document.getElementById('cart-link').addEventListener('click', (e) => {
        e.preventDefault();
        showCart();
    });

    document.getElementById('close-product-modal').addEventListener('click', () => {
        document.getElementById('product-modal').style.display = 'none';
    });

    document.getElementById('close-cart-modal').addEventListener('click', () => {
        document.getElementById('cart-modal').style.display = 'none';
    });

    document.getElementById('close-details-frame').addEventListener('click', () => {
        document.getElementById('details-frame').style.display = 'none';
    });

    document.getElementById('modal-add-to-cart').addEventListener('click', () => {
        const index = parseInt(document.getElementById('modal-add-to-cart').dataset.index, 10);
        const quantity = parseInt(document.getElementById('modal-quantity').value, 10);
        addToCart(index, quantity);
        document.getElementById('product-modal').style.display = 'none';
    });

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Checkout not implemented.');
    });

    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const item = e.target.closest('.product-item');
        if (item) {
            const index = item.dataset.index;
            const contextMenu = document.getElementById('context-menu');
            contextMenu.style.display = 'block';
            contextMenu.style.left = `${e.pageX}px`;
            contextMenu.style.top = `${e.pageY}px`;

            document.getElementById('view-details').addEventListener('click', () => {
                showModal(index);
                contextMenu.style.display = 'none';
            });

            document.getElementById('view-wikipedia').addEventListener('click', () => {
                window.open(products[index].wikipedia, '_blank');
                contextMenu.style.display = 'none';
            });

            document.getElementById('add-to-cart').addEventListener('click', () => {
                addToCart(index, 1);
                contextMenu.style.display = 'none';
            });
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('#context-menu')) {
            document.getElementById('context-menu').style.display = 'none';
        }
    });

    document.getElementById('details-frame').addEventListener('click', (e) => {
        if (!e.target.closest('#details-iframe')) {
            document.getElementById('details-frame').style.display = 'none';
        }
    });
}

setupEventListeners();
renderProducts();
