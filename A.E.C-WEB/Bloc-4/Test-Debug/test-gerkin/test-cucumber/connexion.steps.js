const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let page = { message: '', user: '', password: '' };

Given('que je suis sur la page de connexion', () => {

 page = { message: '', user: '', password: '' }; 

});

When('je saisis le nom d\'utilisateur {string}', (username) => {
page.user = username;

});

When('je saisis le mot de passe {string}', (password) => { page.password = password; 
 });

When('je clique sur {string}', (button) => {

if (button === 'Connexion') {
  if (page.user === 'user123' && page.password === 'password123')

{

 page.message = `Bienvenue, ${page.user}`; } else { page.message = 'Mot de passe incorrect'; }

} });

Then('je devrais voir {string}', (expectedMessage) => { assert.strictEqual(page.message, expectedMessage); });