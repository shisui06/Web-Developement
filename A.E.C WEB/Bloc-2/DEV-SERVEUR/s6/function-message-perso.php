<?php
// Déclaration de la fonction avec des paramètres
function saluerPersonne($prenom, $nom) {
    // Retourne un message de salutation personnalisé
    return "Bonjour, $prenom $nom !";
}

// Appel de la fonction avec des arguments
$message = saluerPersonne("Alice", "Dupont");
echo $message . "<br>";
?>
