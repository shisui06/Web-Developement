

/*

let pnom
let nom
let tH
let nH
let salaire 
let aftertax

pnom =  window.prompt("Quelle est votre prénom ?:", "") ;
nom =  window.prompt("Quelle est votre nom ?:", "") ;
tH =  parseFloat(window.prompt("Quelle est votre taux horaire ?:", "")) ;
nH =  parseFloat(window.prompt("Combine d'heure avez vous travailler ?:", "")) ;
salaire = tH * nH ;
aftertax = salaire * (1 - 30 / 100); 
window.alert ("Mr ou Mme" + pnom + nom + "votre est salaire sera de " + aftertax + "  dollars ");
*/


let pnom;
let nom;
let tH;
let nH;
let salaire;
let aftertax;

// Prompt for user's first name
pnom = window.prompt("Quelle est votre prénom ?", "");

// Prompt for user's last name
nom = window.prompt("Quelle est votre nom ?", "");

// Prompt for hourly wage rate and convert to float
tH = parseFloat(window.prompt("Quel est votre taux horaire ?", ""));

// Prompt for number of hours worked and convert to float
nH = parseFloat(window.prompt("Combien d'heures avez-vous travaillé ?", ""));

// Calculate gross salary
salaire = tH * nH;

// Calculate net salary after 30% tax deduction
aftertax = salaire * (1 - 30 / 100); // Equivalent to salaire * 0.7

// Display the result using window.alert with proper formatting
window.alert(`Monsieur/Madame ${pnom} ${nom}, votre salaire net sera de ${aftertax.toFixed(2)} dollars.`);
