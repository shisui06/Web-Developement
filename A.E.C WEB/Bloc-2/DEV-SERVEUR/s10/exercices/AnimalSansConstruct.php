<?php
	class AnimalSansConstruct {
	    // Propriétés
	    public $nom;
	    public $espece;
		
		// Méthode pour faire parler l'animal
	    public function parler() {
	        echo "Je suis un " . $this->espece . " et je m'appelle " . $this->nom . ".<br>";
	    }
	}
?>