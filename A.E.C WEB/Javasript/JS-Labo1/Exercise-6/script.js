



let pnom
let nom
let tH
let nH
let salaire 
let aftertax
let pourtax

pnom =  window.prompt("Quelle est votre prénom ?:", "") ;
nom =  window.prompt("Quelle est votre nom ?:", "") ;
tH =  parseFloat(window.prompt("Quelle est votre taux horaire ?:", "")) ;
nH =  parseFloat(window.prompt("Combine d'heure avez vous travailler ?:", "")) ;
pourtax = parseFloat(window.prompt("Combine est le poucentage d'imposition ?:", "")) ;
salaire = tH * nH ;
aftertax = salaire * 1 - pourtax / 10; 
window.alert(`Monsieur/Madame ${pnom} ${nom}, votre salaire net sera de ${aftertax.toFixed(2)} dollars.`);
