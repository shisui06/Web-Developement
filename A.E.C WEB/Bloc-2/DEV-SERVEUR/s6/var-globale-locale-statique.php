<?php
// Variable globale
$variableGlobale = "Je suis une variable globale.";

function exempleVariables() {
    // Variable locale
    $variableLocale = "Je suis une variable locale.";

    // Affichage de la variable locale
    echo "À l'intérieur de la fonction : " . $variableLocale . "<br>";

    // Accès à la variable globale à l'intérieur de la fonction
    global $variableGlobale;
    echo "À l'intérieur de la fonction (variable globale) : " . $variableGlobale . "<br>";

    // Variable statique
    static $compteur = 0;
    $compteur++;
    echo "Compteur (variable statique) : " . $compteur . "<br>";
}

// Appel de la fonction
exempleVariables();
exempleVariables(); // Appel supplémentaire pour démontrer la persistance de la variable statique

// Affichage de la variable globale à l'extérieur de la fonction
echo "À l'extérieur de la fonction (variable globale) : " . $variableGlobale . "<br>";

// On ne peut pas accéder à la variable locale en dehors de la fonction
// echo "À l'extérieur de la fonction (variable locale) : " . $variableLocale; // Ceci générerait une erreur

?>
