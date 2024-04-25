import { createStackNavigator } from '@react-navigation/stack';
import ItemListScreen from './ItemListScreen'; // Importar minha tela aqui

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      {/* Outras telas */}
      <Stack.Screen name="ItemListScreen" component={ItemListScreen} /> {/* Adicionar minha tela aqui */}
    </Stack.Navigator>
  );
}
