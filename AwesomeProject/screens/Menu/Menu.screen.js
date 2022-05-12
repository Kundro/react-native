import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Button, View, ScrollView} from 'react-native';
import styles from '../Menu/Menu.styles';
import AboutMe from '../AboutMe/AboutMe.screen';

export default Menu = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Alexey Kundro" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

MenuScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <Button
            style={styles.buttonProfile}
            title="PROFILE"
            onPress={() => navigation.navigate('Alexey Kundro')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

DetailsScreen = ({navigation}) => {
  return AboutMe();
};

const Stack = createNativeStackNavigator();
