[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/82JEikoA)
# Tailwind CSS

## Introduction

### Présentation de Tailwind CSS

Tailwind CSS est un framework CSS moderne qui adopte une approche unique appelée **"utility-first"**. Contrairement aux frameworks traditionnels comme Bootstrap ou Foundation, qui proposent des composants pré-stylisés, Tailwind offre une vaste collection de classes utilitaires préconçues. Ces classes vous permettent de construire des designs personnalisés directement dans votre code HTML, sans avoir besoin d'écrire du CSS personnalisé.

**Avantages de Tailwind CSS :**

- **Flexibilité** : Créez des designs uniques sans être limité par des styles par défaut.
- **Productivité accrue** : Réduisez le temps de développement en stylisant directement dans le HTML.
- **Personnalisation facile** : Adaptez le framework à vos besoins via le fichier de configuration.

## Utility-first

### Qu'est-ce qu'une approche utility-first ?

L'approche **utility-first** consiste à utiliser des classes CSS de base, appelées **classes utilitaires**, pour construire votre design directement dans le HTML. Chaque classe utilitaire correspond à une seule propriété CSS avec une valeur spécifique. En combinant ces classes, vous pouvez créer des styles complexes sans écrire de CSS personnalisé.

**CSS**

```css
/* styles.css */
.btn-primary {
  background-color: #3490dc;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
```

**utility-first**

```html
<button class="bg-blue-500 text-white py-2 px-4 rounded">
  Cliquer ici
</button>
```

### Avantages et inconvénients

#### Avantages

- **Productivité accrue** : Stylisez vos éléments directement dans le HTML sans basculer entre les fichiers HTML et CSS.
- **Flexibilité** : Créez des designs personnalisés sans être limité par des styles par défaut.
- **Consistance** : Utilisez des classes standardisées pour maintenir une cohérence dans le design.
- **Maintenance simplifiée** : Réduisez la quantité de CSS personnalisé à gérer.

#### Inconvénients

- **Lisibilité du HTML** : L'accumulation de classes peut rendre le code HTML moins lisible.
- **Courbe d'apprentissage** : Nécessite de se familiariser avec une multitude de classes utilitaires.
- **Dépendance** : Le code est étroitement lié à Tailwind, ce qui peut compliquer la migration vers un autre framework.

### Fonctionnement des classes utilitaires

Les classes dans Tailwind suivent généralement le format `[propriété]-[valeur]`, ce qui facilite la mémorisation et l'utilisation des classes.

Les classes utilitaires sont des classes CSS prédéfinies qui représentent une propriété CSS spécifique avec une valeur donnée. En combinant ces classes, vous pouvez appliquer plusieurs styles à un élément sans écrire de CSS personnalisé.

- `text-center` : `text-align: center;`
- `mt-4` : `margin-top: 1rem;`
- `bg-gray-200` : `background-color: #e2e8f0;`


```html
<div class="bg-white text-gray-800 p-6 rounded-lg shadow-md">
  <h2 class="text-2xl font-bold mb-4">Titre de la carte</h2>
  <p class="text-base leading-relaxed">
    Ceci est un exemple de carte créée avec Tailwind CSS.
  </p>
</div>
```

## Installation

### Pré-requis

Avant de commencer, assurez-vous d'avoir installé sur votre machine :

- **Node.js** : Environnement d'exécution JavaScript.
- **npm** : Gestionnaire de paquets pour Node.js.

### Installation via npm

**Initialiser un projet npm**

Dans votre terminal, naviguez vers le dossier de votre projet et exécutez :

```bash
npm init -y
```

**Installer Tailwind CSS**

Installez Tailwind CSS en exécutant :

```bash
npm install -D tailwindcss
```

**Initialiser le fichier de configuration**

Générez le fichier de configuration `tailwind.config.js` avec :

```bash
npx tailwindcss init
```

**Configuration initiale avec `tailwind.config.js`**

Le fichier `tailwind.config.js` vous permet de personnaliser Tailwind CSS selon vos besoins.

**Exemple de configuration de base :**

```javascript
// tailwind.config.js
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- **`content`** : Indique à Tailwind où chercher les fichiers contenant les classes utilitaires utilisées.
- **`theme`** : Permet de personnaliser les valeurs par défaut (couleurs, typographies, etc.).
- **`plugins`** : Liste des plugins à utiliser pour étendre les fonctionnalités.

### Installation de l'extension Tailwind IntelliSense

Pour améliorer votre productivité, installez l'extension **Tailwind CSS IntelliSense** si vous utilisez Visual Studio Code.

**Étapes d'installation :**

1. Ouvrez Visual Studio Code.
2. Accédez à l'onglet des extensions (ou utilisez `Ctrl+Shift+X`).
3. Recherchez "Tailwind CSS IntelliSense".
4. Cliquez sur "Installer".

## Mise en page

### Concepts de base

#### Gestion de la largeur et de la hauteur

**Largeur (`w-`) :**

  - `w-16` : largeur de 4rem.
  - `w-32` : largeur de 8rem.
  - `w-1/2` : 50% de la largeur du parent.
  - `w-1/3` : 33.333% de la largeur du parent.
  - `w-full` : 100% de la largeur du parent.


```html
<div class="w-1/2 bg-gray-200">
  Contenu avec une largeur de 50%.
</div>
```

**Hauteur (`h-`) :**

  - `h-16` : hauteur de 4rem.
  - `h-64` : hauteur de 16rem.
  - `h-screen` : hauteur de la fenêtre.

```html
<div class="h-64 bg-blue-200">
  Contenu avec une hauteur de 16rem.
</div>
```

#### Utilisation de padding et margin

**Padding (`p-`) :**

- `p-4` : padding de 1rem sur tous les côtés.
- `pt-2` : padding-top de 0.5rem.
- `pr-6` : padding-right de 1.5rem.
- `px-8` : padding horizontal de 2rem.

**Margin (`m-`) :**

- `m-4` : marge de 1rem sur tous les côtés.
- `mb-2` : marge inférieure de 0.5rem.
- `ml-auto` : marge gauche automatique (pousse l'élément vers la droite).
- `mx-auto` : marges horizontales automatiques (centre l'élément).

```html
<div class="p-6 m-4 bg-white">
  Contenu avec padding de 1.5rem et marge de 1rem.
</div>
```

#### Utilisation de border

**Bordures :**

- `border` : ajoute une bordure de 1px solide sur tous les côtés.
- `border-2` : bordure de 2px.
- `border-t` : bordure supérieure uniquement.
- `border-b-4` : bordure inférieure de 4px.
- `border-gray-300` : couleur de la bordure en gris clair.
- `border-red-500` : couleur de la bordure en rouge.

**Exemple :**

```html
<div class="border border-gray-400 p-4">
  Contenu avec une bordure grise de 1px.
</div>
```

#### Arrondis

**Coins arrondis :**

- `rounded` : coins légèrement arrondis (0.25rem).
- `rounded-md` : coins modérément arrondis (0.375rem).
- `rounded-lg` : coins plus arrondis (0.5rem).
- `rounded-full` : coins complètement arrondis (50%).


```html
<img src="image.jpg" alt="Image" class="w-32 h-32 rounded-full">
```

#### Ombres

**Ombres :**

- `shadow` : petite ombre.
- `shadow-md` : ombre moyenne.
- `shadow-lg` : grande ombre.
- `shadow-xl` : ombre très prononcée.
- `shadow-none` : pas d'ombre.

```html
<div class="p-4 bg-white shadow-lg">
  Contenu avec une ombre prononcée.
</div>
```

### Les typographies

#### Mise en forme des polices d'écriture

**Tailles de police (`text-`) :**

- `text-xs` : très petit (0.75rem).
- `text-sm` : petit (0.875rem).
- `text-base` : taille par défaut (1rem).
- `text-lg` : légèrement plus grand (1.125rem).
- `text-xl`, `text-2xl`, `text-3xl`, etc. : tailles de plus en plus grandes.

**Poids de police (`font-`) :**

- `font-thin` : 100.
- `font-light` : 300.
- `font-normal` : 400.
- `font-medium` : 500.
- `font-semibold` : 600.
- `font-bold` : 700.
- `font-extrabold` : 800.
- `font-black` : 900.

**Styles de police :**

- `italic` : texte en italique.
- `not-italic` : annule l'italique.


```html
<h1 class="text-4xl font-bold mb-4">Titre Principal</h1>
<p class="text-base leading-relaxed">
  Ceci est un paragraphe avec une taille de police par défaut et un interligne relâché.
</p>
```

#### Préfixes de taille

Les tailles de police dans Tailwind suivent une échelle proportionnelle, facilitant la création d'une hiérarchie visuelle cohérente.

**Échelle des tailles de police :**

- `text-xs` : 0.75rem
- `text-sm` : 0.875rem
- ...
- `text-9xl` : 8rem

```html
<h2 class="text-2xl font-semibold">Sous-titre</h2>
<p class="text-lg">
  Texte de paragraphe avec une taille légèrement supérieure.
</p>
```

---

### Couleurs

#### Comment fonctionnent les couleurs

Tailwind CSS propose une palette de couleurs prédéfinie avec des nuances pour chaque couleur. Les classes de couleur suivent le format `[propriété]-[couleur]-[nuance]`.

#### Nuances de couleurs

Chaque couleur a des nuances allant de `50` (plus clair) à `900` (plus foncé). Cela vous permet d'ajuster précisément l'intensité de la couleur.

- `bg-blue-100` : bleu très clair.
- `bg-blue-500` : bleu moyen (valeur par défaut).
- `bg-blue-900` : bleu très foncé.


```html
<div class="bg-green-200 text-green-800 p-4">
  Texte sur un fond vert clair.
</div>
```

#### Opacité

Pour ajuster l'opacité des couleurs, vous pouvez utiliser spécifier l'opacité directement dans la classe de couleur.

- `bg-red-500/50` : couleur de fond rouge avec 50% d'opacité.

```html
<div class="bg-blue-500/30 p-4">
  Contenu avec un fond bleu à 30% d'opacité.
</div>
```

---

### Flex

#### Stylisation avec Flexbox

Tailwind facilite la création de mises en page flexibles grâce à ses classes utilitaires pour Flexbox.

- `flex` : définit un conteneur flex.
- `inline-flex` : définit un conteneur flex en ligne.

```html
<nav class="flex items-center justify-between p-6 bg-gray-800">
  <div class="text-white font-bold text-xl">Ma Boutique</div>
  <ul class="flex space-x-4">
    <li><a href="#" class="text-gray-300 hover:text-white">Accueil</a></li>
    <li><a href="#" class="text-gray-300 hover:text-white">Produits</a></li>
    <li><a href="#" class="text-gray-300 hover:text-white">Contact</a></li>
  </ul>
</nav>
```

### Grid

#### Styles avec Grid

Tailwind offre des classes utilitaires pour créer des mises en page en grille avec CSS Grid.

- `grid` : définit un conteneur de grille.
- `grid-cols-1` à `grid-cols-12` : nombre de colonnes.

```html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-white p-4 rounded shadow">Item 1</div>
  <div class="bg-white p-4 rounded shadow">Item 2</div>
  <div class="bg-white p-4 rounded shadow">Item 3</div>
  <div class="bg-white p-4 rounded shadow">Item 4</div>
  <div class="bg-white p-4 rounded shadow">Item 5</div>
  <div class="bg-white p-4 rounded shadow">Item 6</div>
</div>
```

#### Différents layouts

- `col-span-2` : l'élément s'étend sur deux colonnes.
- `col-start-2` : l'élément commence à la deuxième colonne.

```html
<div class="grid grid-cols-4 gap-4">
  <div class="col-span-2 bg-white p-4 rounded shadow">Item 1 (col-span-2)</div>
  <div class="bg-white p-4 rounded shadow">Item 2</div>
  <div class="bg-white p-4 rounded shadow">Item 3</div>
  <div class="col-span-4 bg-white p-4 rounded shadow">Item 4 (col-span-4)</div>
</div>
```

### Utilisation de `container`

Tailwind fournit une classe `container` pour créer un conteneur centré avec des largeurs maximales adaptées à chaque point de rupture.

```html
<div class="container mx-auto px-4">
  <!-- Contenu centré -->
</div>
```

- `mx-auto` : centre horizontalement le conteneur.
- `px-4` : ajoute un padding horizontal de 1rem pour éviter que le contenu touche les bords de l'écran.


## Exercice 1

**Objectif :**

- Installer et configurer Tailwind CSS.
- Mettre en forme la carte avec la liste de courses
- Mettre en forme les éléments de la liste de course 
  - Utilisez `flex` pour les items et leurs quantités

## Design adaptatif et responsive

L'un des grands avantages de Tailwind CSS est sa facilité à créer des designs adaptatifs et responsives. Cela signifie que votre site web s'adapte automatiquement à différentes tailles d'écran, offrant une expérience utilisateur optimale sur les mobiles, les tablettes et les ordinateurs de bureau.

### Utilisation des préfixes

#### Explication des différents préfixes

Tailwind CSS adopte une approche **mobile-first** pour le développement responsive. Cela signifie que, par défaut, les styles s'appliquent à tous les écrans, et que vous pouvez utiliser des préfixes pour ajouter ou modifier des styles sur des écrans de tailles spécifiques.

- **`sm:`** : pour les petits écrans (min-width: 640px).
- **`md:`** : pour les écrans moyens (min-width: 768px).
- **`lg:`** : pour les grands écrans (min-width: 1024px).
- **`xl:`** : pour les très grands écrans (min-width: 1280px).
- **`2xl:`** : pour les écrans extra larges (min-width: 1536px).


- **Sans préfixe :** Les classes s'appliquent à toutes les tailles d'écran.
- **Avec préfixe :** Les classes s'appliquent à partir de la taille d'écran spécifiée et au-delà.


```html
<div class="bg-blue-500 md:bg-green-500 lg:bg-red-500">
  Contenu adaptatif
</div>
```

- Sur les écrans **inférieurs à 768px**, le fond sera **bleu** (`bg-blue-500`).
- Sur les écrans **entre 768px et 1023px**, le fond sera **vert** (`md:bg-green-500`).
- Sur les écrans **à partir de 1024px**, le fond sera **rouge** (`lg:bg-red-500`).

### Utilisation de `max-`

#### Tailwind a une approche mobile-first

Comme mentionné précédemment, Tailwind est conçu pour une approche mobile-first. Cela signifie que les styles sans préfixe s'appliquent à tous les écrans, et que les préfixes sont utilisés pour modifier les styles sur les écrans plus grands.

#### Différence entre l'utilisation des préfixes et les `max-` préfixes

Les préfixes standards (`sm:`, `md:`, etc.) s'appliquent **à partir** de la taille d'écran spécifiée et au-delà. Cependant, il peut être nécessaire de cibler les écrans **plus petits** que la taille spécifiée. C'est là qu'interviennent les `max-` préfixes.

- **`max-sm:`** : s'applique aux écrans inférieurs à 640px.
- **`max-md:`** : s'applique aux écrans inférieurs à 768px.
- **`max-lg:`** : s'applique aux écrans inférieurs à 1024px.
- **`max-xl:`** : s'applique aux écrans inférieurs à 1280px.
- **`max-2xl:`** : s'applique aux écrans inférieurs à 1536px.

```html
<div class="bg-blue-500 max-md:bg-green-500">
  Contenu adaptatif
</div>
```

- Sur les écrans **inférieurs à 768px**, le fond sera **vert** (`max-md:bg-green-500`).
- Sur les écrans **à partir de 768px**, le fond sera **bleu** (`bg-blue-500`).

## Interactivité

Tailwind CSS facilite l'ajout d'interactivité à vos éléments grâce à l'utilisation des pseudo-classes et des états. Vous pouvez créer des effets au survol, au focus, lors d'un clic, etc., sans écrire de CSS personnalisé.

### Pseudo-classes

Les pseudo-classes sont des mots-clés ajoutés aux sélecteurs qui spécifient un état spécial de l'élément. En Tailwind, vous pouvez appliquer des classes utilitaires pour des pseudo-classes spécifiques en utilisant une syntaxe de préfixe.

```html
<pseudo-classe>:classe-utilitaire
```

**Au survol (`hover:`) :**

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Bouton
</button>
```

- Par défaut, le bouton a un fond bleu (`bg-blue-500`).
- Au survol, le fond devient bleu foncé (`hover:bg-blue-700`).

**Au focus (`focus:`) :**

```html
<input class="border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-4 rounded" type="text" placeholder="Votre nom">
```

- Par défaut, l'input a une bordure grise (`border-gray-300`).
- Au focus, la bordure devient bleue (`focus:border-blue-500`) et l'outline est supprimé (`focus:outline-none`).

**À l'état actif (`active:`) :**

```html
<a href="#" class="text-gray-500 active:text-gray-800">
  Lien
</a>
```

- Par défaut, le lien est gris clair (`text-gray-500`).
- Lorsqu'il est actif (cliqué), le texte devient gris foncé (`active:text-gray-800`).

### États

#### Présentation des états

Les états sont des conditions dans lesquelles un élément peut se trouver en fonction de l'interaction de l'utilisateur ou de l'état du composant. Les pseudo-classes permettent de styliser les éléments en fonction de ces états.

- `hover:` : lorsque la souris survole l'élément.
- `focus:` : lorsque l'élément est focalisé.
- `active:` : lorsque l'élément est activé (généralement lors du clic).
- `disabled:` : lorsque l'élément est désactivé.
- ...

```html
<label class="inline-flex items-center">
  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 checked:bg-blue-500">
  <span class="ml-2">Option</span>
</label>
```

## Création de groupes avec `group`

Parfois, vous voulez changer le style d'un élément en fonction de l'état d'un autre élément parent. Tailwind fournit la classe `group` pour cela.

```html
<div class="group bg-white p-4 rounded shadow">
  <h2 class="text-gray-800 group-hover:text-blue-500">Titre</h2>
  <p class="text-gray-600">Description</p>
</div>
```

- Lorsque la souris survole le conteneur (`group:hover`), le titre change de couleur (`group-hover:text-blue-500`).

### Transitions

#### Présentation des transitions

Les transitions permettent d'ajouter des effets d'animation lors du changement de propriétés CSS, offrant une expérience utilisateur plus fluide.

- `transition` : active les transitions par défaut sur les propriétés courantes.
- `transition-none` : aucune transition.
- `transition-all` : transition sur toutes les propriétés modifiées.
- `transition-colors` : transition sur les propriétés de couleur.
- `duration-75`, `duration-100`, `duration-150`, etc. : durée de la transition en millisecondes.
- `ease-linear`, `ease-in`, `ease-out`, `ease-in-out` : courbes d'accélération.

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
  Bouton Animé
</button>
```

**Explication :**

- La transition est activée sur les propriétés de couleur grâce à `transition`.
- La durée de la transition est de 300ms (`duration-300`).
- La courbe d'accélération est `ease-in-out`.
- Au survol, le fond change de bleu clair à bleu foncé avec une transition fluide.

**Image avec effet de zoom au survol :**

```html
<div class="overflow-hidden">
  <img src="image.jpg" alt="Image" class="transform hover:scale-110 transition duration-500">
</div>
```

**Explication :**

- `overflow-hidden` : masque le débordement lors du zoom.
- `transform` : active les transformations CSS.
- `hover:scale-110` : au survol, l'image est agrandie à 110%.
- `transition duration-500` : la transition dure 500ms.

---

## Exercice 2

- Gérer la mise en forme adaptive
  - Par défaut une colonne avec les aliments
  - écrans moyens deux colonnes
  - écrans larges trois colonnes
  - écrans très larges quatre colonnes


## Conclusion


- Installer et configurer Tailwind CSS.
- Comprendre l'approche utility-first et ses avantages.
- Utiliser les classes utilitaires pour la mise en page, la typographie, les couleurs, Flexbox et Grid.
- Créer des designs adaptatifs et responsives en utilisant les préfixes responsives.
- Ajouter de l'interactivité avec les pseudo-classes et les transitions.
- Combiner Tailwind CSS avec du JavaScript pour gérer des états personnalisés.


# Exercice 3

- Au passage de la souris, faire qu'un item: 
  - Soit légèrement plus gros
  - Ait une ombre légèrement plus grosse
- Changer la couleur des liens dans la barre de navigation au passage de la souris
