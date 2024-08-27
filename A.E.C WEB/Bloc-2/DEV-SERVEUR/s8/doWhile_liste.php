<?php
	$fruits = array("Pomme", "Banane", "Orange", "Fraise");
	$i = 0;

	do {
		echo "Fruit : " . $fruits[$i] . "<br>";
		$i++;
	} while ($i < count($fruits));
?>
