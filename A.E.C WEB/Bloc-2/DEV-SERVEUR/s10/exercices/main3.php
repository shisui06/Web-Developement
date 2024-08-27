<?php
	// Inclure la définition de la classe Animal
	require_once 'AnimalSansConstruct.php';
	 
	// Instancier deux objets Animal
	$animal1 = new AnimalSansConstruct();
	
	//Intialiser les proprietés
	$animal1->nom = "Rex";
	$animal1->espece = "chien";
	
	// Utiliser les méthodes des objets
	$animal1->parler(); // Affiche : Je suis un chien et je m'appelle Rex.
?>