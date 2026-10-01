// Pantalla "Otro": segunda pestaña de las Bottom Tabs (Drawer → Principal → Otro).
// Sirve para mostrar el cambio entre pestañas sin perder el header del Drawer.
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OtroScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="apps" size={64} color="#2563EB" />
        <Text style={styles.title}>Otra pestaña</Text>
        <Text style={styles.text}>
          Cambiaste de pestaña con las Bottom Tabs. El header de arriba sigue siendo el del Drawer.
        </Text>
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
  },
  text: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 22,
  },
});
