Feature: Connexion à l’application

  Scenario: Connexion réussie avec des identifiants valides
    Given que je suis sur la page de connexion
    When je saisis le nom d'utilisateur "user123"
    And je saisis le mot de passe "password123"
    And je clique sur "Connexion"
    Then je devrais voir "Bienvenue, user123"

  Scenario: Connexion échouée avec un mot de passe incorrect
    Given que je suis sur la page de connexion
    When je saisis le nom d'utilisateur "user123"
    And je saisis le mot de passe "wrongpassword"
    And je clique sur "Connexion"
    Then je devrais voir "Mot de passe incorrect"
