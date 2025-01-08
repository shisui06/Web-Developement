Feature: Calcul de frais de livraison


  Scenario: Frais de 10$ si la distance est inferieur à 10km 
    Given une distance de "5"
    And le client est non-membre premium
    When je calcule la frais 
    Then le montant final doit être "12"

  Scenario: Frais de livrasion annulée si la commande dépasse 150$ et que le client et membre premium 
    Given une commande de "151"
    And le client est membre premium 
    When je calcule les frais
    Then le montant final doit être "0"


  Scenario: Frais de 2$ pour toutes les commandes non premium
    Given une distance de "5"
    And client est pas membre premium
    When je calcule les frais
    Then le montant final doit être "7"