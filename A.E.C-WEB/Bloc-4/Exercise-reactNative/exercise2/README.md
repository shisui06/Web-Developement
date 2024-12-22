# Seance 4

### Introduction : Pourquoi les Hooks ?

- **Contexte historique :**  
  Avant les Hooks, la gestion de l’état et du cycle de vie des composants React était principalement centrée sur les composants de classe. Les Hooks ont été introduits pour permettre l’utilisation de l’état et des autres fonctionnalités React dans des composants fonctionnels, améliorant la lisibilité et la réutilisabilité de la logique.

- **Limites des composants de classe :**  
  - Le cycle de vie (méthodes comme `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) peut être complexe et fragmenter la logique.  
  - Difficulté à extraire et réutiliser facilement la logique d’état entre plusieurs composants.

- **Bénéfices des Hooks :**  
  - Syntaxe plus simple et plus claire.  
  - Facilite la réutilisation de logique d’état en créant des Hooks personnalisés.  
  - Adapté aussi bien à React Web qu’à React Native, sans différence fondamentale dans la logique métier.

---

### Qu’est-ce qu’un Hook ?

- **Définition :**  
  Un Hook est une fonction fournie par React qui permet d’utiliser l’état et le cycle de vie dans des composants fonctionnels, sans avoir besoin de classes.

- **Hooks de base :**
  - `useState` : Gérer un état local dans un composant fonctionnel.  
  - `useEffect` : Effectuer des effets secondaires (représentant le cycle de vie, comme effectuer une action après le rendu, gérer des souscriptions, etc.).  
  - `useContext` : Accéder au contexte React pour éviter le “prop drilling” (transmission de propriétés sur plusieurs niveaux).

- **Hooks avancés (non traités pour le moment) :**  
  - `useReducer`, `useCallback`, `useMemo`, etc.

- **Exemple simple (React Native) :**  
  Un composant fonctionnel avec un état (par ex. un compteur) utilisant `useState`.

---

### Cycle de vie des composants et `useEffect`

- **Rappel du cycle de vie :**  
  Un composant passe par plusieurs phases : montage, mise à jour, et démontage.  
  Dans les composants de classe, nous utilisons `componentDidMount`, `componentDidUpdate`, et `componentWillUnmount` pour contrôler ces étapes.

- **`useEffect` comme remplaçant du cycle de vie :**  
  - `useEffect` est appelé après chaque rendu.  
  - En fournissant un tableau de dépendances, on peut contrôler quand l’effet s’exécute.  
  - En retournant une fonction dans `useEffect`, on définit un nettoyage (comme `componentWillUnmount`), utile pour libérer des ressources (par exemple, arrêter un timer).

- **Exemple :**  
  Un composant compteur qui incrémente sa valeur à chaque clic et qui utilise `useEffect` pour effectuer une action lorsque la valeur change (ex. afficher un message dans la console ou déclencher un effet visuel).

---

### Gestion de l’état avec `useState`

- **Initialisation :**  
  `const [state, setState] = useState(valeurInitiale)`

  Ici, `state` est la valeur de l’état, et `setState` est une fonction pour la mettre à jour. Le composant sera re-rendu à chaque nouvelle valeur.

- **Mise à jour de l’état :**  
  Appeler `setState(nouvelleValeur)` modifie l’état et provoque un nouveau rendu du composant.  
  Éviter de muter directement l’état, toujours utiliser `setState` avec une nouvelle valeur.

- **Bonnes pratiques :**  
  - Garder l’état minimal, ne stocker que ce dont on a réellement besoin.  
  - Bien nommer les variables d’état et les fonctions pour plus de clarté.


```javascript
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ClickCounter() {
  // Déclaration d'un état local "count" initialisé à 0
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Compteur : {count}</Text>
      <Button title="Incrémenter" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

```
---

### Effets secondaires avec `useEffect`

- **Définition :**  
  Un effet secondaire est toute opération effectuée après le rendu :  
  - Activer une animation.  
  - Écouter un événement matériel (sensoriels, géolocalisation, etc.).  
  - Mettre à jour le titre du composant, la navigation, etc.

- **Dépendances de `useEffect` :**  
  Le second argument de `useEffect` est un tableau de dépendances.  
  - Si le tableau est vide (`[]`), l’effet s’exécute une seule fois après le premier rendu (similaire à `componentDidMount`).  
  - S’il contient des variables d’état, l’effet se relancera à chaque fois que ces variables changent (similaire à `componentDidUpdate`).

- **Nettoyage :**  
  Retourner une fonction dans `useEffect` permet de nettoyer (supprimer des écouteurs, arrêter un intervalle, etc.) au démontage du composant.

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Mettre à jour l’état chaque seconde
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Retourner une fonction qui s’exécute au démontage
    // du composant pour éviter les fuites de mémoire.
    return () => clearInterval(intervalId);
  }, []); 
  // Le tableau de dépendances vide signifie que l’effet
  // ne s’exécute qu’une seule fois, au montage.

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Heure actuelle :</Text>
      <Text style={styles.time}>{time.toLocaleTimeString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  time: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

```
---

## Exercice: 

**Démo :** [Vidéo](./docs/Ex1.mp4)

Modifier et afficher le composant `TaskCounter` présent dans le dossier `components`. L'objectif est d'utiliser les états locaux avec `useState` et les effets avec `useEffect` d'obtenir un composant fonctionnel. 

1. **État local (useState) :**  
   - Créez un état pour stocker la liste des tâches (un tableau, initialement vide).  
   - Créez un état pour stocker le titre de la nouvelle tâche (une chaîne de caractères, vide par défaut).  
   - Créez un état pour stocker un message de confirmation (une chaîne de caractères, vide par défaut).

2. **Ajout de tâches :**  
   - Implémentez la fonction `addTask()` qui, lorsqu'on appuie sur le bouton "Ajouter", récupère le texte dans le champ de saisie, le nettoie (trim), et s'il n'est pas vide :  
     - Ajoute un nouvel objet tâche `{ id: Date.now().toString(), title: <titre saisi> }` au tableau des tâches.  
     - Réinitialise le champ de saisie à vide.  
     - Met à jour le message de confirmation.

3. **Affichage des tâches :**  
   - Affichez la liste des tâches dans un `ScrollView`. Chaque tâche sera représentée par un composant `Text` affichant son titre.

4. **Message de confirmation temporaire (useEffect) :**  
   - Utilisez `useEffect` pour déclencher un temporisateur (`setTimeout`) qui effacera le message de confirmation au bout de quelques secondes (par exemple 3 secondes).  
   - Assurez-vous de nettoyer le temporisateur lors du démontage ou du ré-rendu du composant, en retournant une fonction de nettoyage dans le `useEffect`.


---

### Pourquoi et comment utiliser `useContext` ?

- **Problème du “prop drilling” :**  
  Lorsqu’on doit partager une donnée (par ex. un thème, une langue) avec de nombreux composants imbriqués, on peut être amené à transmettre cette donnée via les props à chaque niveau, ce qui complexifie le code.

- **Le contexte :**  
  Le contexte permet de définir une donnée accessible par tous les composants enfants sans passer explicitement la donnée en props à chaque niveau.

- **`useContext` :**  
  Après avoir créé un contexte, on peut l’utiliser dans un composant fonctionnel avec `useContext(contextName)` pour obtenir directement la valeur stockée dans le contexte.

- **Exemple (théorique) :**  
  Définir un contexte pour le thème (clair/sombre). Plusieurs composants peuvent lire le thème directement à partir du contexte sans passer par leurs parents. Pour changer le thème, il suffit de mettre à jour la valeur dans le contexte, et tous les composants abonnés refléteront automatiquement ce changement.

**ThemeContext.js :**

```javascript
import React from 'react';

// Valeur par défaut : thème clair
export const ThemeContext = React.createContext('light');
```
**App.js :**

```javascript
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeContext';
import ThemedBox from './ThemedBox'; // Un composant qui utilise le contexte

export default function App() {
  const [theme, setTheme] = useState('light');

  // Fonction pour changer le thème
  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <View style={styles.container}>
        <Button title="Changer le thème" onPress={toggleTheme} />
        <ThemedBox />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 50, 
    alignItems: 'center', 
    backgroundColor: '#fff',
  },
});

```
**ThemedBox.js :**
```javascript
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeContext';

export default function ThemedBox() {
  const theme = useContext(ThemeContext);

  const boxStyle = {
    ...styles.box,
    backgroundColor: theme === 'light' ? '#eee' : '#333',
  };

  const textStyle = {
    ...styles.text,
    color: theme === 'light' ? '#000' : '#fff',
  };

  return (
    <View style={boxStyle}>
      <Text style={textStyle}>Thème actuel : {theme}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 20,
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

```
---

### Conclusion

- **Récapitulatif :**  
  - Les Hooks (comme `useState`, `useEffect`, `useContext`) remplacent avantageusement les composants de classe pour la gestion d’état et le cycle de vie.  
  - `useState` simplifie la gestion de l’état local.  
  - `useEffect` permet de gérer les effets secondaires et remplace les méthodes du cycle de vie des classes.  
  - `useContext` évite le “prop drilling” et simplifie le partage d’état global.


## Exercice:
Voici le sujet de l’exercice 2, basé sur la version modifiée de l’exercice 1 :

---

### Exercice 2 : Partager l’état globalement avec un contexte

Dans l’exercice précédent, votre composant `TaskCounter` gérait lui-même la liste des tâches et l’ajout de nouvelles tâches. Désormais, vous allez transformer cette architecture pour rendre la liste des tâches globale à l’application, et permettre à plusieurs composants de l’utiliser sans passer par des "props".

**Objectif :**  
- Créer un contexte global pour partager la liste de tâches et la fonction d’ajout de tâches.  
- Réutiliser le composant `TaskCounter` existant, mais le modifier pour qu’il n’ait plus besoin de gérer ses propres tâches.  
- Modifier le second composant `TaskSummary` du dossier `components` afin qu'il utilise le contexte pour afficher le nombre de tâches à effectuer. 

**Instructions :**

1. **Créer un contexte pour les tâches :**  
   - Créez un fichier `context/TasksContext.js` et définissez-y un contexte nommé `TasksContext`.  
   - La valeur par défaut de ce contexte sera un objet ayant la forme `{ tasks: [], addTask: () => {} }`.

2. **Gérer l’état global dans `App.js` :**  
   - Dans `App.js`, utilisez `useState` pour gérer un tableau `tasks`.  
   - Créez une fonction `addTask(title)` qui ajoute une nouvelle tâche (un objet `{ id, title }`) au tableau `tasks`.  
   - Fournissez `tasks` et `addTask` via le `TasksContext.Provider` pour que tous les composants enfants y aient accès.

3. **Mettre à jour `TaskCounter` :**  
   - Modifiez `TaskCounter` pour qu’il utilise `useContext(TasksContext)` afin d’accéder aux tâches et à `addTask`.  
   - Supprimez la gestion locale des tâches dans `TaskCounter`, puisqu’elles sont maintenant fournies par le contexte.  
   - Conservez l’état pour le champ de saisie (`newTaskTitle`) et le message de confirmation local.  
   - Lorsque l’utilisateur ajoute une tâche, appelez `addTask(title)` depuis le contexte, puis affichez le message de confirmation comme précédemment.  
   - Le `useEffect` pour effacer le message de confirmation après quelques secondes reste dans `TaskCounter`.

4. **Mo `TaskSummary` :**  
   - Créez un nouveau composant `TaskSummary` qui accède au contexte via `useContext(TasksContext)`.  
   - Affichez le nombre total de tâches, par exemple : "Nombre total de tâches : X".  
   - Intégrez `TaskSummary` dans votre `App.js`, au-dessus ou en dessous de `TaskCounter`. Vous verrez qu’il peut accéder aux mêmes données de tâches sans aucune prop.
