<?php
	$temperature = 25;

	if ($temperature < 0) {
		echo "Il fait très froid !";
	} else if ($temperature >= 0 && $temperature < 20) {
		echo "Il fait frais.";
	} else if ($temperature >= 20 && $temperature < 30) {
		echo "Il fait chaud.";
	} else {
		echo "Il fait très chaud.";
	}
?>