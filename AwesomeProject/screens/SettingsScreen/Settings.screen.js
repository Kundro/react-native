import React from 'react';
import {View, Text, Switch, StatusBar} from 'react-native';
import styles from './Settings.styles';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../res/colors';

export default SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.palettePrimaryDark} barStyle={'light-content'} />
      <Entypo
        name="adjust"
        size={30}
        color={colors.black}
        style={styles.themeIcon}
      />
      <View>
        <Text style={styles.text}>Theme</Text>
        <Text style={styles.subtext}>Dark</Text>
      </View>
      <View style={styles.switch}>
        <Switch value={true} />
      </View>
    </View>
  );
};
