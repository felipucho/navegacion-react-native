// Pantalla "Inicio": primera pestaña de las Bottom Tabs (Drawer → Principal → Inicio).
// Tiene un botón que salta al Stack de productos, que está en otra rama del Drawer.
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Toda pantalla registrada en un navegador recibe la prop "navigation".
export default function InicioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="navigate-circle" size={64} color="#2563EB" />
        <Text style={styles.title}>Navegación en React Native</Text>
        <Text style={styles.text}>
          Esta app combina tres navegadores: Drawer, Bottom Tabs y Stack. Abrí el menú lateral o
          tocá el botón para ver los productos.
        </Text>

        {/* Pressable detecta toques. "pressed" vale true mientras el dedo está apoyado. */}
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          // Navegación anidada: vamos a "Productos" (Drawer) y adentro a la pantalla "Lista" (Stack).
          onPress={() => navigation.navigate('Productos', { screen: 'Lista' })}
        >
          <Text style={styles.buttonText}>Ver productos</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    // Sombra suave: shadow* en iOS/web y elevation en Android.
    shadowColor: '#0F172A',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F172A',
    marginTop: 12,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#2563EB',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 28,
    marginTop: 24,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
