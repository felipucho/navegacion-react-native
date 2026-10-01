// Navegador raíz de la app: un Drawer (menú lateral).
// Su opción "Principal" abre las Bottom Tabs, y adentro de las Tabs está el Stack de productos.
//
// Árbol completo de navegación:
//
//   NavigationContainer
//   └── Drawer (AppNavigator)
//       └── "Principal" → Bottom Tabs (MainTab)
//           ├── "Inicio" → InicioScreen
//           ├── "Otro"   → Native Stack (ProductosStack)
//           │   ├── "Lista"    → Lista
//           │   └── "Detalles" → Detalles
//           └── "Guía"   → OtroScreen
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MainTab from './MainTab';

// createDrawerNavigator crea el menú lateral. Devuelve Navigator (contenedor) y Screen (cada opción).
const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        // El header del Drawer es el ÚNICO header visible de la app.
        headerStyle: styles.header,
        headerTintColor: '#FFFFFF',
        drawerActiveTintColor: '#2563EB',
        drawerInactiveTintColor: '#64748B',
        drawerStyle: styles.drawer,
      }}
    >
      {/* Navegación anidada: el "component" de esta opción es otro navegador (las Tabs). */}
      <Drawer.Screen
        name="Principal"
        component={MainTab}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: '#2563EB' },
  drawer: { backgroundColor: '#F1F5F9' },
});
