let age
let etudiant

age =  parseFloat(window.prompt("Entrez votre âge svp ?:", "")) ;
etudiant = (window.prompt("Ètes-vous étudiant ?:", "")) ;
if (age <12 || age >65 ){
	window.alert("Vous avez le droit à une réduction") ;
} else if ( etudiant === 'oui')	{
 window.alert("Vous avez le droit à une réduction") ;
} else { 
  window.alert("Vous n'avez pas le droit à une réduction") ;	
}