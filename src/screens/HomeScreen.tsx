import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const categories = [
  { id: 1, name: 'Eletrônicos', icon: 'mobile-phone' },
  { id: 2, name: 'Headphones', icon: 'headphones' },
  { id: 3, name: 'Smartwatch', icon: 'clock-o' },
  { id: 4, name: 'CameraScreen', icon: 'qrcode' }, // Nova categoria
];

const CategoryItem = ({ category }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (category.name === 'Headphones') {
      navigation.navigate('Headphones');
    } else if (category.name === 'Leitor QR Code') {
      navigation.navigate('CameraScreen');
    }
  };

  return (
    <TouchableOpacity style={styles.categoryItem} onPress={handlePress}>
      <FontAwesomeIcon name={category.icon} size={20} color="#333" />
      <Text style={styles.categoryName}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem category={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* Footer */}
      <View style={styles.footer}>
        {/* Ícones de redes sociais */}
        <View style={styles.socialIcons}>
          <FontAwesomeIcon name="facebook" size={20} color="#333" />
          <FontAwesomeIcon name="twitter" size={20} color="#333" />
          <FontAwesomeIcon name="instagram" size={20} color="#333" />
        </View>

        {/* Links úteis */}
        <View style={styles.links}>
          <Text style={styles.link}>Sobre nós</Text>
          <Text style={styles.link}>Política de Privacidade</Text>
          <Text style={styles.link}>Contato</Text>
          <Text style={styles.link}>FAQ</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  categoryName: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  footer: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  socialIcons: {
    flexDirection: 'row',
  },
  links: {
    flexDirection: 'row',
  },
  link: {
    marginRight: 10,
    color: '#333',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
