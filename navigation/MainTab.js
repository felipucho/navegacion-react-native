// Bottom Tabs: pestañas inferiores "Inicio", "Otro" y "Guía".
// Está anidado dentro del Drawer, en la opción "Principal".
// La barra de pestañas nunca desaparece porque el Stack de productos vive ADENTRO de la pestaña "Otro".
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InicioScreen from '../screens/inicio/InicioScreen';
import ProductosStack from './ProductosStack';
import OtroScreen from '../screens/carpeta2/OtroScreen';

// createBottomTabNavigator crea la barra de pestañas de abajo.
const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false oculta el header de las Tabs: ya se ve el del Drawer.
        headerShown: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#64748B',
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
        options={{
          // tabBarIcon recibe el color (activo o inactivo) y lo pasa al ícono.
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      {/* Navegación anidada: esta pestaña no es una pantalla, es otro navegador (el Stack). */}
      <Tab.Screen
        name="Otro"
        component={ProductosStack}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="cube" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Guía"
        component={OtroScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="book" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
  },
});
