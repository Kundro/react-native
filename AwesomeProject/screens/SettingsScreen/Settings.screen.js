import React from 'react';
import {View, Text} from 'react-native';
import styles from './Settings.styles';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../res/colors';

export default SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Entypo name="adjust" size={30} color={colors.black} style={styles.themeIcon}/>
      <View>
        <Text style={styles.text}>Theme</Text>
        <Text style={styles.subtext}>Dark</Text>
      </View>
    </View>
  );
};
