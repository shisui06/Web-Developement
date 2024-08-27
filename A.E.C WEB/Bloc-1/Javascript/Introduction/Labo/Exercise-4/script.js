let pnom
let nom
let tH
let nH
let salaire 

pnom =  window.prompt("Quelle est votre prénom ?:", "") ;
nom =  window.prompt("Quelle est votre nom ?:", "") ;
tH =  window.prompt("Quelle est votre taux horaire ?:", "") ;
nH =  window.prompt("Combine d'heure avez vous travailler ?:", "") ;
salaire = tH * nH ;
window.alert ("Mr ou Mme" + pnom + nom + "votre est salaire sera de " + salaire + "  dollars ");