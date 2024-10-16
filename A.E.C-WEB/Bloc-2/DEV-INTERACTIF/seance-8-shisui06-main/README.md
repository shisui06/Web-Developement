[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/A8og4V52)
# Transitions CSS

## Introduction aux transitions CSS

Les transitions CSS sont un moyen puissant d'ajouter du mouvement et de l'interactivité à vos pages web sans recourir à JavaScript. Elles permettent de modifier en douceur les propriétés CSS d'un élément sur une période définie.

### Comparaison avec les animations JavaScript

Animations JavaScript :
- Avantages : Très flexibles, contrôle précis
- Inconvénients : Plus complexes à implémenter, peuvent affecter les performances

Transitions CSS :
- Avantages : Faciles à implémenter, bonnes performances, interactives
- Inconvénients : Limitées à des changements d'état simples

## Syntaxe de base des transitions

La propriété `transition` est un raccourci qui combine quatre sous-propriétés.

### Propriété transition

Syntaxe :
```css
transition: <propriété> <durée> <fonction de temporisation> <délai>;
```

Exemple :
```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease 0.1s;
}

.button:hover {
  background-color: red;
}
```

#### Propriétés individuelles

1. `transition-property` : Spécifie la propriété CSS à animer
2. `transition-duration` : Définit la durée de la transition
3. `transition-timing-function` : Contrôle la progression de la transition
4. `transition-delay` : Ajoute un délai avant le début de la transition

Exemple avec propriétés individuelles :
```css
.button {
  background-color: blue;
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0.1s;
}
```

### Propriétés CSS transitionnables

Toutes les propriétés CSS ne peuvent pas être transitionnées. Voici une liste des propriétés couramment utilisées pour les transitions :

##### Couleurs :
- `color`
- `background-color`
- `border-color`
- `box-shadow`

##### Dimensions :
- `width`
- `height`
- `padding`
- `margin`
- `font-size`

##### Position et transformation :
- `top`
- `left`
- `transform`
- `opacity`

##### Bordures :
- `border-width`
- `border-radius`

Remarque : Certaines propriétés comme `display` ne peuvent pas être transitionnées. Pour ces cas, considérez l'utilisation de `opacity` ou `visibility`.

#### Fonctions de temporisation (timing functions)

Les fonctions de temporisation contrôlent la vitesse de la transition tout au long de sa durée. CSS offre plusieurs fonctions prédéfinies et la possibilité de créer des fonctions personnalisées.

##### Fonctions prédéfinies

1. `linear` : Vitesse constante du début à la fin
2. `ease` : Début lent, accélération, puis ralentissement (par défaut)
3. `ease-in` : Début lent, puis accélération
4. `ease-out` : Début rapide, puis ralentissement
5. `ease-in-out` : Similaire à `ease`, mais plus prononcé
6. `step-start` : Transition instantanée au début
7. `step-end` : Transition instantanée à la fin

[Outil de visualisation](https://easings.net/#) pour explorer différentes fonctions de temporisation.

##### Fonction cubique de Bézier personnalisée

Permet un contrôle précis de la progression de la transition.

Syntaxe : `cubic-bezier(x1, y1, x2, y2)`

Exemple :
```css
.custom-transition {
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

[Outil de visualisation](https://cubic-bezier.com/) pour créer et tester des courbes personnalisées.

#### Transitions sur les pseudo-classes

Les transitions peuvent être déclenchées par différentes pseudo-classes :

- `:hover` - au survol de la souris
- `:focus` - lorsque l'élément reçoit le focus
- `:active` - lorsque l'élément est activé (ex: clic sur un bouton)
- `:checked` - pour les éléments de formulaire sélectionnés

Exemple d'utilisation :
```css
.input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  transition: all 0.3s ease;
}
```

## Exercice

 Animer les cartes de produit afin de faire un effet au survol: 
- Ajout d'une ombre
- Grossissement
- Changement de couleur






## Transitions multiples

Il est possible d'appliquer des transitions à plusieurs propriétés en même temps, avec des durées et des fonctions de temporisation différentes.

### Syntaxe pour les transitions multiples

```css
.multi-transition {
  transition: 
    background-color 0.3s ease,
    transform 0.5s ease-in-out 0.1s,
    box-shadow 0.3s linear;
}
```

Exemple pratique :
```css
.card {
  width: 200px;
  height: 300px;
  background-color: #f0f0f0;
  transform: rotate(0deg) scale(1);
  opacity: 0.8;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: 
    transform 0.3s ease-out,
    opacity 0.2s linear,
    box-shadow 0.3s ease-in-out,
    background-color 0.5s;
}

.card:hover {
  transform: rotate(5deg) scale(1.05);
  opacity: 1;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  background-color: #e0e0e0;
}
```

Cet exemple crée un effet de carte qui se soulève, tourne légèrement, devient plus opaque et change de couleur au survol, le tout avec des transitions fluides.


### Création d'effets de transition complexes

Combinaison de plusieurs propriétés pour créer des effets plus élaborés :

```css
.expanding-button {   
  width: 150px;
  height: 50px;
  background-color: #007bff;
  color: white;
  border-radius: 25px;
  transition: 
    width 0.5s ease-out,
    height 0.5s ease-in,
    transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    box-shadow 0.3s linear;
}

.expanding-button:hover {
  width: 250px;
  height: 70px;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
```

Cet exemple crée un bouton qui s'étire horizontalement et verticalement au survol, avec une légère animation de saut et un effet d'ombre dynamique.

## Les pseudo éléments ::before et ::after

Les pseudo-éléments ::before et ::after sont des "éléments virtuels" que nous pouvons créer et styliser en CSS sans avoir à ajouter de balises supplémentaires dans notre HTML. Ils se comportent comme des premiers et derniers enfants de l'élément auquel ils sont attachés.

### Caractéristiques principales :

1. **Position dans le DOM** : ::before est inséré comme premier enfant, tandis que ::after est ajouté comme dernier enfant de l'élément sélectionné.

2. **La propriété content** : C'est une propriété obligatoire pour que ces pseudo-éléments s'affichent. Elle peut contenir du texte, des images (via url()), ou être laissée vide avec une chaîne vide ("").

3. **Stylisation** : Ils peuvent être stylisés comme n'importe quel autre élément HTML, avec des propriétés CSS telles que width, height, background, etc.

4. **Interaction** : Bien qu'ils ne fassent pas partie du DOM, ils peuvent réagir aux interactions de l'utilisateur sur leur élément parent.


### Utilisation 


### 1. Préparation de l'élément parent

Tout d'abord, nous devons préparer l'élément parent pour accueillir nos pseudo-éléments animés :

```css
.element {
    position: relative;
    overflow: hidden;
}
```

- `position: relative;` permet de positionner absolument les pseudo-éléments par rapport à cet élément parent.
- `overflow: hidden;` empêche les pseudo-éléments de déborder de leur conteneur lors des animations.

### 2. Création et positionnement des pseudo-éléments

Ensuite, nous définissons nos pseudo-éléments :

```css
.element::before,
.element::after {
    content: "";
    position: absolute;
    /* Autres propriétés de base */
}
```

- `content: "";` est nécessaire pour que le pseudo-élément s'affiche, même s'il est vide.
- `position: absolute;` permet de positionner librement le pseudo-élément dans son parent.

### 3. Définition de l'état initial et des transitions

Nous définissons ensuite l'état initial de nos pseudo-éléments et les propriétés qui seront animées :

```css
.element::before {
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.3);
    transition: left 0.3s ease;
}
```

Ici, nous préparons un effet de balayage en positionnant initialement le pseudo-élément hors de vue (à gauche) et en définissant une transition sur la propriété `left`.

### 4. Animation au survol

Enfin, nous définissons ce qui se passe lors du survol :

```css
.element:hover::before {
    left: 100%;
}
```

Cette règle déplace le pseudo-élément de gauche à droite lors du survol, créant un effet de balayage lumineux.

## Meilleures pratiques pour les transitions CSS

1. Utilisez des durées courtes (entre 100ms et 300ms) pour des effets subtils.
2. Préférez les fonctions de temporisation naturelles comme `ease-in-out`.
3. Limitez le nombre de propriétés animées pour maintenir les performances.
4. Testez vos transitions sur différents appareils pour assurer leur fluidité.


## Exercice

Créer une animation au survol des boutons avec un effet "remplissage"
- Ajouter une transition vers un fond coloré lors du passage de la souris
- Utiliser les pseudo-éléments `::before` `::after`

![](./Screencast_20240903_072155.gif)