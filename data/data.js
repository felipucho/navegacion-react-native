// Datos de ejemplo: 6 productos de informática.
// Los usa la pantalla Lista (con FlatList) y cada uno viaja a Detalles como parámetro.
// "icono" es el nombre de un ícono de Ionicons.
// "explicacion" cuenta qué es cada producto; la muestra la pestaña Guía.
const productos = [
  {
    id: '1',
    nombre: 'Notebook',
    descripcion: 'Notebook de 15 pulgadas con 16 GB de RAM y disco SSD de 512 GB. Ideal para estudiar y programar.',
    precio: 950000,
    icono: 'laptop-outline',
    explicacion: 'Es una computadora portátil: pantalla, teclado y batería en un solo equipo que se puede llevar a todos lados.',
  },
  {
    id: '2',
    nombre: 'Monitor',
    descripcion: 'Monitor de 24 pulgadas Full HD con panel IPS y colores fieles.',
    precio: 280000,
    icono: 'desktop-outline',
    explicacion: 'Es la pantalla donde la computadora muestra imágenes y texto. Es un dispositivo de salida.',
  },
  {
    id: '3',
    nombre: 'Procesador',
    descripcion: 'Procesador de 8 núcleos para juegos, edición de video y multitarea.',
    precio: 420000,
    icono: 'hardware-chip-outline',
    explicacion: 'Es el cerebro de la computadora (CPU): ejecuta las instrucciones de los programas y hace los cálculos.',
  },
  {
    id: '4',
    nombre: 'Auriculares',
    descripcion: 'Auriculares con micrófono y cancelación de ruido para clases virtuales.',
    precio: 85000,
    icono: 'headset-outline',
    explicacion: 'Sirven para escuchar el sonido sin molestar a nadie. Con micrófono también permiten hablar en videollamadas.',
  },
  {
    id: '5',
    nombre: 'Impresora',
    descripcion: 'Impresora multifunción con WiFi: imprime, escanea y copia.',
    precio: 210000,
    icono: 'print-outline',
    explicacion: 'Pasa a papel los documentos y fotos de la computadora. Es un dispositivo de salida.',
  },
  {
    id: '6',
    nombre: 'Teclado',
    descripcion: 'Teclado mecánico en español con iluminación LED.',
    precio: 65000,
    icono: 'keypad-outline',
    explicacion: 'Sirve para escribir texto y dar órdenes a la computadora. Es un dispositivo de entrada.',
  },
];

export default productos;
