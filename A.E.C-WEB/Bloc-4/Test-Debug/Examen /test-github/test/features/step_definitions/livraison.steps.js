import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';
import { calculerFrais } from '../calcule-frais';

let distance;
let isPremium = false;
let montantCommande;
let montantFinal
;

Given('une distance de {string}', (km) => {
  distance = parseFloat(km);
});

Given('le client est membre premium', () => {
  isPremium = true;
});

Given('le client est non-membre premium', () => {
  isPremium = false;
});

Given('une commande de {string}', (montant) => {
  montantCommande = parseFloat(montant);
});

When('je calcule la frais', () => {
  montantFinal = calculerFrais(distance, montantCommande, isPremium);
});

Then('le montant final doit être {string}', (resultatAttendu) => {
  assert.strictEqual(montantFinal, parseFloat(resultatAttendu));
});
