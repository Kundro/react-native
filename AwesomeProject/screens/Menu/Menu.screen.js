import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Button, View, ScrollView} from 'react-native';
import styles from '../Menu/Menu.styles';
import AboutMe from '../AboutMe/AboutMe.screen';

export default Screens = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Screens">
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Alexey Kundro" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

MenuScreen = ({navigation}) => (
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

DetailsScreen = ({navigation}) => AboutMe();

const Stack = createNativeStackNavigator();
