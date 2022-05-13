import React from 'react';
import AboutMe from '../screens/AboutMe/AboutMe.screen';
import Menu from '../screens/Menu/Menu.screen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default Navigate = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="MENU_SCREEN"
        component={Menu}
        option={{title: 'Menu'}}
      />
      <Stack.Screen
        name="ABOUT_ME_SCREEN"
        component={AboutMe}
        option={{title: 'Alexey Kundro'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
