import * as React from 'react';
import {
  MENU_SCREEN,
  ABOUT_ME_SCREEN,
  SETTINGS_SCREEN,
} from '../config/constants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from '../screens/Menu/Menu.screen';
import AboutMe from '../screens/AboutMe/AboutMe.screen';
import SettingsScreen from '../screens/SettingsScreen/Settings.screen';
import colors from '../res/colors';
import {useNavigation} from '@react-navigation/native';
import SettingsButton from '../Components/SettingsButton/SettingsButton';

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
              borderBottomWidth: 1,
              borderBottomColor: colors.lightgrey,
            },
            headerTintColor: colors.black,
            headerTitleAlign: 'center',
            headerRight: function () {
              const navigation = useNavigation();
              return (
                <SettingsButton
                  onPress={() => navigation.navigate(SETTINGS_SCREEN)}
                  underlayColor={colors.transparent}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name={ABOUT_ME_SCREEN}
          component={AboutMe}
          options={{
            title: 'Alexey Kundro',
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: colors.lightgrey,
            },
            headerRight: function () {
              const navigation = useNavigation();
              return (
                <SettingsButton
                  onPress={() => navigation.navigate(SETTINGS_SCREEN)}
                  underlayColor={colors.transparent}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name={SETTINGS_SCREEN}
          component={SettingsScreen}
          options={{
            title: 'Settings',
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: colors.lightgrey,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
