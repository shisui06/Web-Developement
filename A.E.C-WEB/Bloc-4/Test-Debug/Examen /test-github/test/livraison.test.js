


test('Appliquer 10$ de frais si le disntance inférieur à 10km ', () => {
  expect(calculerLivraison(20, false, "")).toBe(12);
});



test('Frais de livrasion annulée si la commande dépasse 150$ et que le client et membre premium ', () => {
  expect(calculerLivraison(151, true, "")).toBe(0);
});


test('Frais de 2$ pour toutes les commandes non premium ', () => {
  expect(calculerLivraison(5, true, "")).toBe(7);
});