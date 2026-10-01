// Datos de ejemplo: 6 productos de informática.
// Los usa la pantalla Lista (con FlatList) y cada uno viaja a Detalles como parámetro.
// "icono" es el nombre de un ícono de Ionicons.
const productos = [
  {
    id: '1',
    nombre: 'Notebook',
    descripcion: 'Notebook de 15 pulgadas con 16 GB de RAM y disco SSD de 512 GB. Ideal para estudiar y programar.',
    precio: 950000,
    icono: 'laptop-outline',
  },
  {
    id: '2',
    nombre: 'Monitor',
    descripcion: 'Monitor de 24 pulgadas Full HD con panel IPS y colores fieles.',
    precio: 280000,
    icono: 'desktop-outline',
  },
  {
    id: '3',
    nombre: 'Procesador',
    descripcion: 'Procesador de 8 núcleos para juegos, edición de video y multitarea.',
    precio: 420000,
    icono: 'hardware-chip-outline',
  },
  {
    id: '4',
    nombre: 'Auriculares',
    descripcion: 'Auriculares con micrófono y cancelación de ruido para clases virtuales.',
    precio: 85000,
    icono: 'headset-outline',
  },
  {
    id: '5',
    nombre: 'Impresora',
    descripcion: 'Impresora multifunción con WiFi: imprime, escanea y copia.',
    precio: 210000,
    icono: 'print-outline',
  },
  {
    id: '6',
    nombre: 'Teclado',
    descripcion: 'Teclado mecánico en español con iluminación LED.',
    precio: 65000,
    icono: 'keypad-outline',
  },
];

export default productos;
