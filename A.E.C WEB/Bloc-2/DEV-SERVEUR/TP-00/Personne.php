

<?php
// Personne.php

class Personne {
    public $nom;
    public $prenom;
    public $age;

    // Constructeur pour initialiser les propriétés
    public function __construct($nom, $prenom, $age) {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->age = $age;
    }

    // Méthode pour afficher une phrase
    public function afficher() {
        echo "Je suis $this->prenom $this->nom et j'ai $this->age ans.<br>";
    }
}
?>