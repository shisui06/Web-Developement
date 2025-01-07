import { Given, When, Then } from '@cucumber/cucumber'; 
import assert from 'assert'; 

import { calculerFrais } from '../../reduction';
 let montantFinal,km,isPremium,calculerFrais;  

Given('le montant de km pacourue {string}', (montant) => {
  km = parseFloat(montant);
});

Given('le client est membre premium', () => {
  isPremium = true;
});


When('client non premium', () => {
  montantFinal = calculerFrais(km,);
});

Then('le montant final doit être {string}', (resultatAttendu) => {
  assert.strictEqual(montantFinal, parseFloat(resultatAttendu));
});
