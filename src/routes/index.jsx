import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StackRoutes } from './StackRoutes';
import Weapons from '../pages/Weapons';

// import { Container } from './styles';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={StackRoutes} />
      <Tab.Screen name='Weapons' component={Weapons} />
    </Tab.Navigator>
  )
}