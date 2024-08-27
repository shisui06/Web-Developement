<?php
	// Inclure la définition de la classe Animal
	require_once 'Animal.php';
	 
	// Instancier deux objets Animal
	$animal1 = new Animal("Rex", "chien");
	$animal2 = new Animal("Mimi", "chat");
	 
	// Utiliser les méthodes des objets
	$animal1->parler(); // Affiche : Je suis un chien et je m'appelle Rex.
	$animal2->parler(); // Affiche : Je suis un chat et je m'appelle Mimi.
?>