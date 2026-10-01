// Punto de entrada de la app.
// Envuelve toda la navegación con NavigationContainer y muestra el Drawer (AppNavigator),
// que es la raíz del árbol de navegación.
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    // NavigationContainer guarda el estado de la navegación (qué pantalla está abierta).
    // Va UNA sola vez, envolviendo a todos los navegadores.
    <NavigationContainer>
      <AppNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
