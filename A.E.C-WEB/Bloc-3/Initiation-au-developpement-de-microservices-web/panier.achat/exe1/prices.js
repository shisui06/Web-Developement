
const prices = {
    "produit1": "150",
    "produit2": "35",
    "produit3": "45",
    "produit4": "200",
    "produit5": "60"
};


function getPrice(productId) {
    return prices[productId]; 
}

module.exports = { getPrice };
