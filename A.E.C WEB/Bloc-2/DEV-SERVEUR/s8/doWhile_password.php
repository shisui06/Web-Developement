<?php
	$motDePasseCorrect = "secret";
	$motDePasseSaisi = "";

	do {
		// Simuler la saisie du mot de passe par l'utilisateur (en réalité, utilisez une méthode sécurisée pour obtenir des entrées utilisateur)
		$motDePasseSaisi = "secret"; // Remplacez cette ligne par une saisie utilisateur réelle si nécessaire
		
		if ($motDePasseSaisi !== $motDePasseCorrect) {
			echo "Mot de passe incorrect. Veuillez réessayer.<br>";
		}else{
			echo "Mot de passe correct !";
			break;
		}
	} while ($motDePasseSaisi !== $motDePasseCorrect);
	
	//continue le programme !!!
?>
