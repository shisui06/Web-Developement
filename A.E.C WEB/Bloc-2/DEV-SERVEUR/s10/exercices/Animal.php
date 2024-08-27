<?php
	class Animal {
	    // Propriétés
	    public $nom;
	    public $espece;
	 
	    // Constructeur pour initialiser les propriétés
	    public function __construct($nom, $espece) {
	        $this->nom = $nom;
	        $this->espece = $espece;
	    }
	 
		// Méthode pour faire parler l'animal
	    public function parler() {
	        echo "Je suis un " . $this->espece . " et je m'appelle " . $this->nom . ".<br>";
	    }
	}
?>


