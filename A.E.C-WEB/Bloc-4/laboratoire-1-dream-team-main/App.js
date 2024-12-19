import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator pour la carte et les détails
function MapStack() {
// ...
}

// Stack Navigator pour les favoris et les détails
function FavoritesStack() {
// ...
}

export default function App() {
    // { id: '1', name: 'Montréal', latitude: 45.5017, longitude: -73.5673 },
    // { id: '2', name: 'Tokyo', latitude: 35.6762, longitude: 139.6503 },
    // { id: '3', name: 'New York', latitude: 40.7128, longitude: -74.006 },
    // { id: '4', name: 'Barcelone', latitude: 41.3851, longitude: 2.1734 },

  return (
    // ...
  );
}
