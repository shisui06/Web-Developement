document.addEventListener('DOMContentLoaded', () => {
    const TVA_RATE = 0.05; // 5%
    const TVQ_RATE = 0.09975; // 9.975%

    let products = [
        { name: 'Sapin', price: 40, stock: 9, description: 'Sapins pour Noël', images: ['arbre/sapin.jpg'], wikipedia: 'https://en.wikipedia.org/wiki/Christmas_tree' },
        { name: 'Prunier', price: 100, stock: 5, description: 'Pruniers fruitiers', images: ['arbre/prunier.jpg'], wikipedia: 'https://en.wikipedia.org/wiki/Plum' },
        { name: 'Pommier', price: 100, stock: 3, description: 'Pommier à fruits', images: ['arbre/pommier.jpg'], wikipedia: 'https://en.wikipedia.org/wiki/Apple' },
        { name: 'Pin', price: 50, stock: 6, description: 'Pins robustes', images: ['arbre/pin.jpg'], wikipedia: 'https://en.wikipedia.org/wiki/Pine' },
        { name: 'Palmier', price: 400, stock: 2, description: 'Palmiers exotiques', images: ['arbre/palmier.webp'], wikipedia: 'https://en.wikipedia.org/wiki/Palm_tree' },
        { name: 'Cerisier', price: 400, stock: 2, description: 'Cerisier', images: ['arbre/cerisier.webp'], wikipedia: 'https://en.wikipedia.org/wiki/Cherry' },
    ];

    let cart = [];

    function renderProducts() {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';
        products.forEach((product, index) => {
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
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const contextMenu = document.getElementById('context-menu');
                contextMenu.style.display = 'block';
                contextMenu.style.left = `${e.pageX}px`;
                contextMenu.style.top = `${e.pageY}px`;

                document.getElementById('view-details').onclick = () => {
                    showModal(index);
                    contextMenu.style.display = 'none';
                };

                document.getElementById('view-wikipedia').onclick = () => {
                    window.open(products[index].wikipedia, '_blank');
                    contextMenu.style.display = 'none';
                };

                document.getElementById('add-to-cart').onclick = () => {
                    addToCart(index, 1);
                    contextMenu.style.display = 'none';
                };
            });
            productList.appendChild(item);
        });
    }

    function showModal(index) {
        const modal = document.getElementById('product-modal');
        const product = products[index];
        document.getElementById('modal-name').textContent = product.name;
        document.getElementById('modal-description').textContent = product.description;
        const modalImages = document.getElementById('modal-images');
        modalImages.innerHTML = '';
        product.images.forEach(img => {
            const image = document.createElement('img');
            image.src = img;
            modalImages.appendChild(image);
        });
        document.getElementById('modal-price').textContent = `Price: $${product.price.toFixed(2)}`;
        document.getElementById('modal-stock').textContent = `Stock: ${product.stock}`;
        document.getElementById('modal-add-to-cart').dataset.index = index;
        modal.style.display = 'block';
    }

    function showCart() {
        const cartModal = document.getElementById('cart-modal');
        const cartItems = document.getElementById('cart-items');
        const cartSubtotal = document.getElementById('cart-subtotal');
        const cartTva = document.getElementById('cart-tva');
        const cartTvq = document.getElementById('cart-tvq');
        const cartTotal = document.getElementById('cart-total');
        cartItems.innerHTML = '';
        let subtotal = 0;

        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>$${(item.quantity * item.price).toFixed(2)}</td>
            `;
            cartItems.appendChild(row);
            subtotal += item.quantity * item.price;
        });

        const tva = subtotal * TVA_RATE;
        const tvq = subtotal * TVQ_RATE;
        const total = subtotal + tva + tvq;

        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        cartTva.textContent = `$${tva.toFixed(2)}`;
        cartTvq.textContent = `$${tvq.toFixed(2)}`;
        cartTotal.textContent = `$${total.toFixed(2)}`;

        cartModal.style.display = 'block';
    }

    function addToCart(index, quantity) {
        const product = products[index];
        const existingItem = cart.find(item => item.name === product.name);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                name: product.name,
                price: product.price,
                quantity: quantity
            });
        }

        product.stock -= quantity;
        renderProducts();
    }

    function setupEventListeners() {
        document.getElementById('search-btn').addEventListener('click', () => {
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

        document.addEventListener('click', (e) => {
            if (!e.target.closest('#context-menu') && !e.target.closest('.product-item')) {
                document.getElementById('context-menu').style.display = 'none';
            }
        });
    }

    setupEventListeners();
    renderProducts();
});
