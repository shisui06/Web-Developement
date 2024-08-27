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
window.alert(`Monsieur/Madame ${pnom} ${nom}, votre salaire net sera de ${aftertax.toFixed(2)} dollars.`);
