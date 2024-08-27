<?php
	$fruits = array(
		"pomme", 
		"banane", 
		"cerise"
	);  
?>

<?php

	$fruits = array(
		"pomme", 
		"banane", 
		"cerise"
	);

	echo $fruits[0] . "<br>";
	echo $fruits[1] . "<br>";
	echo $fruits[2] . "<br>";
	

   
?>

<?php
	$fruits = ["pomme", "banane", "cerise"];
?>

<?php
	$fruits = ["pomme", "banane", "cerise"];
	
	echo $fruits[0] . "<br>";
	echo $fruits[1] . "<br>";
	echo $fruits[2] . "<br>";
	
?>



<?php
	$fruits = ["pomme", "banane", "cerise"];
	
	foreach ($fruits as $valeur) { echo $valeur . "<br>"; }
	
	$fruits[1] = "poire";
	
	foreach ($fruits as $valeur) { echo $valeur . "<br>"; }
?>

<?php
	$fruits = ["pomme", "banane", "cerise"];
	
	foreach ($fruits as $valeur) { echo $valeur . "<br>"; }
	
	unset($fruits[1]);
	
	foreach ($fruits as $valeur) { echo $valeur . "<br>"; }
?>

<?php
	$listEtudiants = ["001" => "Joe Leblanc", "002" => "Alive Dupond"];
	
	foreach ($listEtudiants as $valeur) { echo $valeur . "<br>"; }
?>

<?php
	$listEtudiants = ["001" => "Joe Leblanc", "002" => "Alive Dupond"];
	
	echo $listEtudiants["001"] . "<br>";
?>


<?php
	// Initialisation
	$array = ["pomme", "banane", "cerise"];
	 
	// Accès
	echo $array[1] . "<br>"; // Affiche "banane"
	 
	// Modification
	$array[1] = "orange";
	 
	// Suppression
	unset($array[2]);
	 
	// Tableaux associatifs
	$assocArray = ["nom" => "Alice", "age" => 25];
	echo $assocArray["nom"] . "<br>"; // Affiche "Alice"
?>

<?php
	$array = ["pomme", "banane", "cerise"];
	 
	echo count($array). "<br>"; // 3
	echo end($array). "<br>"; // "cerise"
	echo reset($array). "<br>"; // "pomme"
	echo current($array). "<br>"; // "pomme"
	echo next($array). "<br>"; // "banane"
	echo prev($array). "<br>"; // "pomme"
?>

<?php
	$array1 = ["pomme", "banane", "cerise"];
	$array2 = ["banane", "kiwi"];
	 
	// Fusion
	$merged = array_merge($array1, $array2);
	foreach ($merged as $valeur) { echo $valeur . "<br>"; }
	 
	// Différence
	$difference = array_diff($array1, $array2);
	foreach ($difference as $valeur) { echo $valeur . "<br>"; }
	 
	// Recherche
	$key = array_search("cerise", $array1);
	echo $key. "<br>";
	 
	// Filtre	
	$filtre = array_filter($array1, function($val) {
	    return $val !== "banane";
	});
	foreach ($filtre as $valeur) { echo $valeur . "<br>"; }
	
	echo "<br><br><br><br><br><br><br>";
?>

<?php
	$multiArray = [[1, 2], [3, 4]];
	
	echo $multiArray [0][1] . "<br><br><br><br><br><br>";
?>

<?php
	$multiArray = [[1, 2], [3, 4]];
	
	// Boucle pour parcourir le tableau principal
	foreach ($multiArray as $subArray) {
		// Boucle pour parcourir chaque sous-tableau
		foreach ($subArray as $item) {
			// Afficher l'élément actuel
			echo $item . " ";
		}
		// Nouvelle ligne après chaque sous-tableau
		echo "\n";
	}
?>


<?php
	$multiArray = [
	    ["nom" => "Alice", "age" => 25],
	    ["nom" => "Bob", "age" => 30]
	];
	 
	// Accès
	echo $multiArray[0]["nom"]; // "Alice"
	 
	// Boucle
	foreach ($multiArray as $personne) {
	    echo "Nom: " . $personne["nom"] . ", Âge: " . $personne["age"];
	}
?>











