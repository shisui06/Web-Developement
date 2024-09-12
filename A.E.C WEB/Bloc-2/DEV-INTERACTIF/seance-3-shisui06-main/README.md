# 1. Les Sélecteurs CSS

Les sélecteurs CSS sont la base de la mise en forme des pages web. Ils permettent de cibler des éléments HTML spécifiques pour leur appliquer des styles.

## a. Syntaxe de base des règles CSS

Une règle CSS se compose de deux parties principales :

1. Le sélecteur : indique quel(s) élément(s) HTML sera/seront ciblé(s).
2. Le bloc de déclaration : contient une ou plusieurs paires propriété-valeur.

Structure générale :

```css
sélecteur {
    propriété: valeur;
    propriété: valeur;
}
```

Exemple :

```css
p {
    color: blue;
    font-size: 16px;
}
```
þ
Dans cet exemple, `p` est le sélecteur, `color` et `font-size` sont des propriétés, et `blue` et `16px` sont leurs valeurs respectives.

## b. Types de sélecteurs de base

### 1. Sélecteur d'élément

- Cible tous les éléments d'un type spécifique.
- Syntaxe : nom de la balise HTML.

Exemple :
```css
p { color: black; }
div { background-color: #f0f0f0; }
```

### 2. Sélecteur de classe

- Cible les éléments avec une classe spécifique.
- Syntaxe : point (.) suivi du nom de la classe.
- Peut être appliqué à plusieurs éléments.

Exemple :
```css
.highlight { background-color: yellow; }
.big-text { font-size: 24px; }
```

HTML correspondant :
```html
<p class="highlight">Ce paragraphe sera surligné.</p>
<div class="big-text">Ce texte sera plus grand.</div>
```

### 3. Sélecteur d'ID

- Cible un élément unique avec un ID spécifique.
- Syntaxe : dièse (#) suivi du nom de l'ID.
- Chaque ID doit être unique dans la page.

Exemple :
```css
#header { font-size: 32px; }
#main-content { margin: 20px; }
```

HTML correspondant :
```html
<h1 id="header">Titre principal</h1>
<div id="main-content">Contenu principal</div>
```

### 4. Sélecteur universel

- Cible tous les éléments de la page.
- Syntaxe : astérisque (*).
- À utiliser avec précaution car peut affecter les performances.

Exemple :
```css
* { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

## c. Sélecteurs avancés

### 1. Sélecteurs d'attribut

Ciblent les éléments basés sur la présence ou la valeur de leurs attributs.

- `[attr]` : éléments avec l'attribut `attr`.
- `[attr="value"]` : éléments où `attr` a exactement la valeur "value".
- `[attr~="value"]` : éléments où `attr` contient le mot "value".
- `[attr^="value"]` : éléments où `attr` commence par "value".
- `[attr$="value"]` : éléments où `attr` se termine par "value".
- `[attr*="value"]` : éléments où `attr` contient "value".

Exemples :
```css
[type="text"] { border: 1px solid gray; }
[class~="special"] { font-weight: bold; }
[href^="https"] { color: green; }
[src$=".jpg"] { border: 2px solid black; }
```

### 2. Chaînage de sélecteurs

Combine plusieurs sélecteurs sans espace pour cibler des éléments plus spécifiques.

Exemple :
```css
p.intro { font-style: italic; }
div#unique.special { background-color: lightblue; }
```

HTML correspondant :
```html
<p class="intro">Ce paragraphe sera en italique.</p>
<div id="unique" class="special">Cet élément aura un fond bleu clair.</div>
```

### 3. Groupement de sélecteurs

Applique les mêmes styles à plusieurs sélecteurs en les séparant par des virgules.

Exemple :
```css
h1, h2, h3 { 
    font-family: Arial, sans-serif;
    color: navy;
}
```

Cette règle s'appliquera à tous les éléments `<h1>`, `<h2>`, et `<h3>`.

## 2. Combinaison de Sélecteurs CSS

### a. Comprendre l'arbre du document

Le DOM (Document Object Model) représente la structure HTML comme un arbre, où chaque élément est un nœud avec des relations parent-enfant et ancêtre-descendant.

### b. Combinateurs

1. Descendant (espace) : cible les descendants, pas nécessairement directs.
   ```css
   div p { color: blue; }
   ```

2. Enfant direct (`>`) : cible uniquement les enfants directs.
   ```css
   ul > li { list-style-type: square; }
   ```

3. Frère adjacent (`+`) : cible l'élément qui suit immédiatement.
   ```css
   h1 + p { font-weight: bold; }
   ```

4. Frères généraux (`~`) : cible tous les éléments frères qui suivent.
   ```css
   h1 ~ p { margin-left: 20px; }
   ```

## Exercice 1 pratiques

1. Stylisez toutes les cartes de livres pour avoir un fond d'une couleur différente lorsqu'ils sont en promotion indiqué par: `data-promotion="true"` 
2. Stylisez toutes les cartes de livre pour que le prix soit affiché en rouge lorsqu'ils sont en promotion.
3. Appliquez un style particulier au troisième élément `<li>` dans toutes les listes non ordonnées.
4. Faire que les catégorie de second niveau (Space Opera, Dystopie, Physique, Biologie) soient écrits en italique


## 3. Pseudo-classes et Pseudo-éléments

### a. Pseudo-classes

Les pseudo-classes permettent de cibler des éléments dans un état particulier ou dans une position spécifique dans le document.

#### Syntaxe générale :
```css
sélecteur:pseudo-classe { propriété: valeur; }
```

#### Pseudo-classes courantes :

1. État de l'élément :
   ```css
   a:hover { color: red; }
   input:focus { border-color: blue; }
   button:active { background-color: #ddd; }
   ```

2. Position dans la structure :
   ```css
   li:first-child { font-weight: bold; }
   li:last-child { border-bottom: none; }
   li:nth-child(odd) { background-color: #f0f0f0; }
   ```

3. État de formulaire :
   ```css
   input:checked + label { color: green; }
   input:disabled { background-color: #ccc; }
   ```

4. Autres pseudo-classes utiles :
   ```css
   p:not(.special) { margin-left: 20px; }
   :root { --main-color: #333; }
   :has(ul)
   ```

### b. Pseudo-éléments

Les pseudo-éléments permettent de styliser une partie spécifique d'un élément ou d'insérer du contenu.

#### Syntaxe générale :
```css
sélecteur::pseudo-élément { propriété: valeur; }
```

#### Pseudo-éléments courants :

1. `::before` et `::after` :
   ```css
   .quote::before { content: "«"; }
   .quote::after { content: "»"; }
   ```

2. `::first-line` et `::first-letter` :
   ```css
   p::first-line { font-weight: bold; }
   p::first-letter { font-size: 2em; float: left; }
   ```

3. `::selection` :
   ```css
   ::selection { background-color: yellow; color: black; }
   ```

### c. Exemples d'utilisation avancée

Transformation des catégories en menu

## Exercices pratiques

1. Utilisez la pseudo-classe `:hover` pour changer la couleur de fond des cartes de livres lorsque la souris passe dessus.

2. Ajoutez un pseudo-élément `::before` aux titres de livres en promotion pour afficher un petit badge "Promo".

3. Utilisez la pseudo-classe `:nth-child()` pour styliser différemment chaque deuxième élément de la liste des catégories.

4. Créez un effet de soulignement personnalisé pour les liens de navigation en utilisant `::after` et `:hover`.
