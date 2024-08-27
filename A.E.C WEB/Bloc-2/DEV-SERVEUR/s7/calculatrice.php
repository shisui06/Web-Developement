<?php
// Fonction pour additionner deux nombres
function additionner($a, $b) {
    return $a + $b;
}

// Fonction pour soustraire deux nombres
function soustraire($a, $b) {
    return $a - $b;
}

// Fonction pour multiplier deux nombres
function multiplier($a, $b) {
    return $a * $b;
}

// Fonction pour diviser deux nombres
function diviser($a, $b) {
    if ($b == 0) {
        return 'Erreur : Division par zéro';
    }
    return $a / $b;
}

// Exemple d'utilisation des fonctions
$x = 10;
$y = 5;

echo "Addition : " . additionner($x, $y) . "<br>";
echo "Soustraction : " . soustraire($x, $y) . "<br>";
echo "Multiplication : " . multiplier($x, $y) . "<br>";
echo "Division : " . diviser($x, $y) . "<br>";
?>
