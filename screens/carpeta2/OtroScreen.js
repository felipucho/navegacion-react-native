// Pantalla "Guía": tercera pestaña de las Bottom Tabs (Drawer → Principal → Guía).
// Explica qué es cada producto de informática, usando el campo "explicacion" de data.js.
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import productos from '../../data/data';

export default function OtroScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        // data: el mismo array de productos que usa Lista.
        data={productos}
        // keyExtractor: clave única de cada item.
        keyExtractor={(item) => item.id}
        // renderItem: cada item es una tarjeta con el ícono, el nombre y qué es.
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.iconBox}>
                <Ionicons name={item.icono} size={26} color="#2563EB" />
              </View>
              <Text style={styles.nombre}>{item.nombre}</Text>
            </View>
            <Text style={styles.explicacion}>{item.explicacion}</Text>
          </View>
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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nombre: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0F172A',
    marginLeft: 12,
  },
  explicacion: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 10,
    lineHeight: 22,
  },
});
