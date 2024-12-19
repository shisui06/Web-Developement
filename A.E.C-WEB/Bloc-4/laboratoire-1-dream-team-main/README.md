[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/RpM7b7eS)
# VoyageX: Laboratoire 1

## Présentation
Bienvenue dans **VoyageX**, votre premier laboratoire en développement React Native. Ce projet interactif vous permettra de mettre en pratique vos compétences pour créer une application mobile intégrant une carte, des favoris, et une navigation fluide.

---

## Objectifs pédagogiques
À la fin de ce laboratoire, vous serez capable de :
1. Structurer un projet React Native avec Expo.
2. Utiliser la navigation via des onglets avec **React Navigation**.
3. Intégrer une carte interactive avec **React Native Maps**.
4. Mettre en place un système de gestion des favoris avec le Context API.
5. Créer une interface utilisateur ergonomique et interactive.

---

## Travail à réaliser
### Écrans à développer
1. **Accueil (HomeScreen)**
   - Affiche un message d'accueil avec une description de l'application.
2. **Carte interactive (DestinationsMapScreen)**
   - Affiche une carte avec des marqueurs pour les destinations initiales (Montréal, Tokyo, New York, Barcelone).
   - Un clic sur un marqueur affiche les détails de la destination.
3. **Favoris (FavoritesScreen)**
   - Liste les destinations enregistrées comme favoris.
   - Permet de naviguer vers les détails d'une destination.
4. **Détails (DestinationDetailScreen)** (Optionnel si vous souhaitez l’étendre)
   - Affiche les informations de latitude, longitude et nom de la destination.

### Fonctionnalités à implémenter
1. **Navigation**
   - Utilisez **React Navigation Bottom Tabs** pour gérer les onglets "Carte", "Accueil" et "Favoris".
2. **Carte interactive**
   - Utilisez **React Native Maps** pour afficher une carte dynamique.
   - Ajoutez des marqueurs représentant chaque destination.
3. **Favoris**
   - Configurez le Context API pour stocker les destinations favorites globalement dans l’application.
   - Utilisez `useContext` pour accéder aux favoris dans les différents écrans comme "Carte" et "Favoris".
4. **Interface utilisateur**
   - Stylisez les écrans pour une interface claire et attrayante.

---

## Étapes techniques
### 1. Préparation
- Installez Expo CLI :
  ```bash
  npm install -g expo-cli
  ```
- Initialisez un nouveau projet :
  ```bash
  expo init VoyageX
  ```
- Installez les dépendances nécessaires :
  ```bash
  expo install react-native-maps
  npm install @react-navigation/bottom-tabs @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
  ```

### 2. Développement
- Configurez les fichiers nécessaires :
  - `App.js` : Contient la navigation globale.
  - **Context API** : Créez un fichier `FavoritesContext.js` pour gérer les favoris.
  - Écrans : Placez les écrans dans le dossier `screens/`.
  - Composants réutilisables : Placez les composants comme `DestinationCard.js` dans le dossier `components/`.

### 3. Guide pour utiliser React Native Maps
1. **Configurer l’élément MapView :**
   - Importez `MapView` depuis `react-native-maps` :
     ```javascript
     import MapView, { Marker } from 'react-native-maps';
     ```
   - Ajoutez un composant `MapView` à votre écran :
     ```javascript
     <MapView
       style={{ flex: 1 }}
       initialRegion={{
         latitude: 45.5017, // Centre sur Montréal
         longitude: -73.5673,
         latitudeDelta: 10,
         longitudeDelta: 10,
       }}
     >
       {/* Marqueurs à ajouter ici */}
     </MapView>
     ```

2. **Ajouter des marqueurs :**
   - Utilisez le composant `Marker` pour afficher des points sur la carte :
     ```javascript
     <Marker
       coordinate={{ latitude: 45.5017, longitude: -73.5673 }}
       title="Montréal"
       description="Une belle ville "
     />
     ```
   - Les marqueurs peuvent être dynamiques, en mappant un tableau de destinations :
     ```javascript
     {destinations.map((dest) => (
       <Marker
         key={dest.id}
         coordinate={{ latitude: dest.latitude, longitude: dest.longitude }}
         title={dest.name}
         description={dest.description}
       />
     ))}
     ```

3. **Interactivité des marqueurs :**
   - Ajoutez une fonction `onCalloutPress` pour naviguer vers un autre écran lors du clic sur un marqueur :
     ```javascript
     onCalloutPress={() => navigation.navigate('Details', { destination: dest })}
     ```

### 4. Guide pour utiliser `useContext` avec le Context API
1. **Création du contexte :**
   - Créez un fichier `FavoritesContext.js` :
     ```javascript
     import React, { createContext, useState } from 'react';

     export const FavoritesContext = createContext();

     export function FavoritesProvider({ children }) {
       const [favorites, setFavorites] = useState([
         { id: '1', name: 'Montréal', latitude: 45.5017, longitude: -73.5673 },
         { id: '2', name: 'Tokyo', latitude: 35.6762, longitude: 139.6503 },
       ]);

       return (
         <FavoritesContext.Provider value={{ favorites, setFavorites }}>
           {children}
         </FavoritesContext.Provider>
       );
     }
     ```

2. **Fournir le contexte à l'application :**
   - Dans `App.js` :
     ```javascript
     import { FavoritesProvider } from './context/FavoritesContext';

     export default function App() {
       return (
         <FavoritesProvider>
           <NavigationContainer>{/* ... */}</NavigationContainer>
         </FavoritesProvider>
       );
     }
     ```

3. **Utiliser le contexte dans un écran :**
   - Importez `useContext` et accédez aux favoris :
     ```javascript
     import React, { useContext } from 'react';
     import { FavoritesContext } from '../context/FavoritesContext';

     export default function FavoritesScreen() {
       const { favorites } = useContext(FavoritesContext);

       return (
         <View>{/* Afficher la liste des favoris */}</View>
       );
     }
     ```

---

## Notation
Ce laboratoire vaut **27%** de la note finale. La répartition est la suivante :
| Critère                              | Points (%) |
|--------------------------------------|------------|
| Structure et organisation du projet | 5%         |
| Navigation entre les écrans          | 5%         |
| Carte interactive avec marqueurs     | 7%         |
| Gestion des favoris avec Context API | 5%         |
| Qualité de l'interface utilisateur   | 5%         |
| **Total**                            | **27%**    |

---

## Rendu
1. Poussez votre code sur un dépôt GitHub Classroom dédié.
2. Assurez-vous que l'application fonctionne correctement sur **Expo Go**.
3. Incluez un fichier `README.md` dans votre projet avec des instructions pour lancer l’application.

---

## Références
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started)
- [React Native Maps Documentation](https://docs.expo.dev/versions/latest/sdk/map-view/)
- [Expo Documentation](https://docs.expo.dev/)
- [Context API](https://react.dev/reference/react/useContext)

**Bon courage et amusez-vous à créer votre application VoyageX !**
