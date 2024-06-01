let username
let password


username = (window.prompt("Entrez votre nom utilisateur ?:", "")) ;
password = (window.prompt("Entrez votre mot de passe ?:", "")) ;
if (username === 'alice' && password === 'password123' ){
	window.alert("Authentication réussie") ;
} else if ( username === "" || password === "")	{
 window.alert("Erreur : Nom d’utilisateur et mot de passe requis.") ;
}

