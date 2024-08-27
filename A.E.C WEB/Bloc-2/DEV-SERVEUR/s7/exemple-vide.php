<?php
	$multiArray = [
	    ["nom" => "Alice", "age" => 25],
	    ["nom" => "Bob", "age" => 30]
	];
	 
	// Accès
	//echo $multiArray[0]["nom"]; // "Alice"
	 
	// Boucle
	foreach ($multiArray as $personne) {
	    echo "Nom: " . $personne["nom"] . ", Âge: " . $personne["age"];
	}
?>



