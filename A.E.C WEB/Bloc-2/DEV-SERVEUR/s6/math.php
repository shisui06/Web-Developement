<?php
$valeur = -5;
echo abs($valeur); // Affiche 5


?>


<?php
$valeur = 4.3;
echo ceil($valeur); // Affiche 5

$valeur = -4.7;
echo ceil($valeur); // Affiche -4
?>


<?php
$valeur = 4.7;
echo floor($valeur); // Affiche 4

$valeur = -4.3;
echo floor($valeur); // Affiche -5
?>

<?php
$valeur = 4.567;
echo round($valeur); // Affiche 5

$valeur = 4.567;
echo round($valeur, 2); // Affiche 4.57

$valeur = -4.567;
echo round($valeur, 2); // Affiche -4.57
?>


<?php
$valeur = 16;
echo sqrt($valeur); // Affiche 4

$valeur = 25;
echo sqrt($valeur); // Affiche 5
?>


<?php
$base = 2;
$exposant = 3;
echo pow($base, $exposant); // Affiche 8

$base = 5;
$exposant = 2;
echo pow($base, $exposant); // Affiche 25
?>




