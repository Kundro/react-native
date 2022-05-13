import React from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import styles from '../Menu/Menu.styles';

export default function Menu({navigation}) {
  const loadScene = () => {
    navigation.navigate('ABOUT_ME_SCREEN');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity onPress={loadScene} style={styles.buttonProfile}>
          <Text>PROFILE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
