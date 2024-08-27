<?php
	//echo strtoupper("hello world");
	//echo strtolower("HELLO WORLD");

	$jour = "Lundi";

	switch ($jour) {
		case "Lundi":
			echo "Aujourd'hui, c'est le début de la semaine.";
			break;
		case "Mardi":
			echo "Aujourd'hui, c'est le deuxième jour de la semaine.";
			break;
		case "Mercredi":
			echo "Aujourd'hui, c'est le milieu de la semaine.";
			break;
		case "Jeudi":
			echo "Aujourd'hui, c'est le quatrième jour de la semaine.";
			break;
		case "Vendredi":
			echo "Aujourd'hui, c'est le dernier jour de travail de la semaine.";
			break;
		case "Samedi":
		case "Dimanche":
			echo "C'est le week-end !";
			break;
		default:
			echo "Jour inconnu.";
			break;
	}
?>
