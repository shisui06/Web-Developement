import { calculerFrais } from '../calcule-frais.js';

describe('Livraison Tests', () => {
  test('Appliquer 10$ de frais si la distance inférieur à 10km', () => {
    expect(calculerFrais(5, 20, false)).toBe(32);
  });

  test('Frais de livraison annulée si la commande dépasse 150$ et que le client est membre premium', () => {
    expect(calculerFrais(5, 151, true)).toBe(0);
  });

  test('Frais de 2$ pour toutes les commandes non premium', () => {
    expect(calculerFrais(15, 5, false)).toBe(7);
  });
});