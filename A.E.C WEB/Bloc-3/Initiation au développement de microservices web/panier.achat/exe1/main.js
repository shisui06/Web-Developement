const {getprice} = require('./prices');
const {getprice} = require('./currency');

function totalamount(){
    const produits =['produit2', 'produit4', 'produit5'];
    let totalCAD = produits.reduce((somme, productId)=> somme + parseFloat(getprice(productId)),0);

    const tauxDeChange = getExchangeRate('EURO');
    const totalEUR = totalCAD * tauxDeChange;
    console.log('Total en Euro : ${totalEuro.tofixed(02)}');
}

totalamount();
