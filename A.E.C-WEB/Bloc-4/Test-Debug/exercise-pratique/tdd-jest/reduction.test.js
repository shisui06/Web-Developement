const { calculerReduction } = require('./reduction');

test('Appliquer 10% de réduction si le panier dépasse 100$', () => {
  expect(calculerReduction(150, false, "")).toBe(135);
});

test('Appliquer 5% supplémentaire pour un membre premium', () => {
  expect(calculerReduction(150, true, "")).toBe(127.5);
});

test('Appliquer 20% de réduction pour un produit avec code PROMO20', () => {
  expect(calculerReduction(50, false, "PROMO20")).toBe(40);
});
