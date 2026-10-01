// Native Stack de productos: "Lista" → "Detalles".
// Está anidado dentro del Drawer, en la opción "Productos".
// En un Stack las pantallas se apilan: Detalles se pone encima de Lista y "Volver" la saca.
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lista from '../screens/carpeta1/Lista';
import Detalles from '../screens/carpeta1/Detalles';

// createNativeStackNavigator crea una pila de pantallas con las transiciones nativas del celular.
const Stack = createNativeStackNavigator();

export default function ProductosStack() {
  return (
    // headerShown: false oculta el header del Stack: ya se ve el del Drawer.
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* La primera pantalla declarada es la que se abre primero. */}
      <Stack.Screen name="Lista" component={Lista} />
      <Stack.Screen name="Detalles" component={Detalles} />
    </Stack.Navigator>
  );
}
