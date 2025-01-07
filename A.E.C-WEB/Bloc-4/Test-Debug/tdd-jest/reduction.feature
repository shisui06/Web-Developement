Feature: Calcul de réduction dans une boutique en ligne

  Scenario: Réduction de 10% lorsque le panier dépasse 100$
    Given un panier d’un montant de "150"
    When je calcule la réduction
    Then le montant final doit être "135"

  Scenario: Réduction supplémentaire de 5% pour les membres premium
    Given un panier d’un montant de "150"
    And le client est membre premium
    When je calcule la réduction
    Then le montant final doit être "127.5"

  Scenario: Réduction de 20% pour un produit avec code promo PROMO20
    Given un panier d’un montant de "50"
    And le client utilise le code promo "PROMO20"
    When je calcule la réduction
    Then le montant final doit être "40"
