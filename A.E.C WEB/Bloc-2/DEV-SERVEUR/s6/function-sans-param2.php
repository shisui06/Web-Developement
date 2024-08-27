<?php
// Déclaration de la fonction sans paramètres qui retourne une valeur
function obtenirNombreAleatoire() {
    return rand(1, 100); // Retourne un nombre aléatoire entre 1 et 100
}

// Appel de la fonction et affichage de la valeur retournée
$nombre = obtenirNombreAleatoire();
echo "Nombre aléatoire généré : " . $nombre . "<br>";
?>
