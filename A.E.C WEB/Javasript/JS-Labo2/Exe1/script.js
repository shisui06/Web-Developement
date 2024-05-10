var nb1, nb2;
nb1 = window.prompt("Entrez un premier nombre ","");
nb2 = window.prompt("Entrez un deuxième nombre ","");
		
if (nb1<nb2) {
  window.alert("Le premier nombre " + nb1
	+ "\nest plus petit que\n "
	+ "le deuxième nombre "+nb2);
} else {
  window.alert("Le premier nombre " + nb1
	+ "\nn'est pas plus petit que\n"
	+ "le deuxième nombre " + nb2);
}


