import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HeadphonesScreen = () => {
  // Detalhe do produto Astro
  const product = {
    name: 'Fone de Ouvido Astro',
    price: '$78',
    description: 'Fone de ouvido Astro de alta qualidade com cancelamento de ruído.',
    imageUrl: 'https://m.media-amazon.com/images/I/61RX2gn-fLL._AC_UF1000,1000_QL80_.jpg', // Substitui pela URL real da imagem
  };

  return (
    <View style={styles.container}>
      {/* Imagem do produto */}
      <Image source={{ uri: product.imageUrl }} style={styles.image} resizeMode="cover" />

      {/* Detalhes do produto */}
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  details: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default HeadphonesScreen;
