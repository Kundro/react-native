import * as React from 'react';
import {MENU_SCREEN, ABOUT_ME_SCREEN} from '../config/Constants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from '../screens/Menu/Menu.screen';
import AboutMe from '../screens/AboutMe/AboutMe.screen';
import colors from '../res/colors';

const Stack = createStackNavigator();

export default Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={MENU_SCREEN}>
        <Stack.Screen
          name={MENU_SCREEN}
          component={Menu}
          options={{
            title: 'Menu',
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTintColor: colors.black,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name={ABOUT_ME_SCREEN}
          component={AboutMe}
          options={{title: 'Alexey Kundro', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
