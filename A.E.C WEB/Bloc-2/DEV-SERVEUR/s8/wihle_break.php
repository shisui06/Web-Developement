<?php
	$compteur = 1;

	while (true) {
		if ($compteur > 5) {
			break; // Arrête la boucle lorsque le compteur est supérieur à 5
		}
		echo "Compteur : " . $compteur . "<br>";
		$compteur++;
	}
?>
