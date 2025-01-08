Feature: Calcul des frais de livraison

  Scenario: Frais de 10$ si la distance est inférieure à 10 km
    Given une distance de "5"
    And le client est non-membre premium
    And une commande de "2"
    When je calcule la frais
    Then le montant final doit être "12"

  Scenario: Frais de livraison annulée si la commande dépasse 150$ et que le client est membre premium
    Given une commande de "151"
    And le client est membre premium
    When je calcule la frais
    Then le montant final doit être "0"

  Scenario: Frais de 2$ pour toutes les commandes non-premium
    Given une distance de "5"
    And le client est non-membre premium
    And une commande de "5"
    When je calcule la frais
    Then le montant final doit être "7"
