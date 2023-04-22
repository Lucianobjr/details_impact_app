import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Characters from '../pages/Characters';
import Weapons from '../pages/Weapons';

// import { Container } from './styles';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Characters' component={Characters} />
      <Stack.Screen name='Weapons' component={Weapons} />
    </Stack.Navigator>
  )
}