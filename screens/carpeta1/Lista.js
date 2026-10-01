// Pantalla "Lista": primera pantalla del Stack de productos (Drawer → Productos → Lista).
// Muestra los productos con FlatList y, al tocar uno, abre Detalles pasándole el producto.
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import productos from '../../data/data';

export default function Lista({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        // data: el array que se va a mostrar.
        data={productos}
        // keyExtractor: devuelve una clave única por item para que React los identifique.
        keyExtractor={(item) => item.id}
        // renderItem: dibuja cada item. Recibe un objeto con el producto en "item".
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
            // navigate con parámetros: el segundo argumento viaja a Detalles en route.params.
            onPress={() => navigation.navigate('Detalles', { producto: item })}
          >
            <View style={styles.iconBox}>
              <Ionicons name={item.icono} size={28} color="#2563EB" />
            </View>
            <View style={styles.info}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.precio}>$ {item.precio.toLocaleString('es-AR')}</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#64748B" />
          </Pressable>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  list: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#0F172A',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  cardPressed: {
    opacity: 0.7,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    marginLeft: 14,
  },
  nombre: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  precio: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 4,
  },
});
