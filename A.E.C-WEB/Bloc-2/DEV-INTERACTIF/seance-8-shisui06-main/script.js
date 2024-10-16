// script.js
document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('product-container');
    fetch('https://fakestoreapi.com/products?limit=20')
        .then(response => response.json())
        .then(products => {
            console.log(`products`, products);
            productContainer.innerHTML = products.map(product => {
                return `
                    <div class="product-card">
                        <h3 class="product-title">${product.title}</h3>
                    <div class="product-info">
                        <img src="${product.image}" alt="${product.title}" class="product-image">
                            <div class="product-rating">
                                <span class="star">&#9733;</span> <!-- Unicode star character -->
                                <span class="rating">${product.rating.rate  .toFixed(1)}</span>
                                <span class="votes">(${product.rating.count})</span>
                            </div>
                            <div class="product-price">$${product.price.toFixed(2)}</div>
                        </div>
                    </div>
                `;
            }).join('');
        })
        .catch(error => console.error('Error fetching products:', error));
});
