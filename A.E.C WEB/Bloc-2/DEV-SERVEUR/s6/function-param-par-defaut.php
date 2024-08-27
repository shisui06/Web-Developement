<?php
// Déclaration de la fonction avec un paramètre par défaut
function direBonjour($nom = "Invité") {
    // Retourne un message de bonjour
    return "Bonjour, $nom !";
}

// Appel de la fonction sans argument
echo direBonjour() . "<br>";

// Appel de la fonction avec un argument
echo direBonjour("Marie") . "<br>";
?>
