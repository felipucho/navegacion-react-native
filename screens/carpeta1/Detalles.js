// Pantalla "Detalles": segunda pantalla del Stack de productos (Drawer → Productos → Detalles).
// Recibe el producto que eligió Lista y tiene un botón para volver atrás en la pila.
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Además de "navigation", cada pantalla recibe "route" con los datos de la ruta actual.
export default function Detalles({ route, navigation }) {
  // route.params tiene lo que mandó Lista en navigate('Detalles', { producto: item }).
  const { producto } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconBox}>
          <Ionicons name={producto.icono} size={72} color="#2563EB" />
        </View>
        <Text style={styles.nombre}>{producto.nombre}</Text>
        <Text style={styles.descripcion}>{producto.descripcion}</Text>
        <Text style={styles.precio}>$ {producto.precio.toLocaleString('es-AR')}</Text>

        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          // goBack saca esta pantalla de la pila y vuelve a la anterior (Lista).
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={18} color="#FFFFFF" />
          <Text style={styles.buttonText}>Volver</Text>
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
    shadowColor: '#0F172A',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  iconBox: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F172A',
    marginTop: 16,
  },
  descripcion: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 22,
  },
  precio: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2563EB',
    marginTop: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft: 8,
  },
});
