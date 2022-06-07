import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import colors from '../res/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from '../styles/Button.styles';

export default Button = ({onPress, name}) => {
  return (
    <View>
      <TouchableHighlight onPress={onPress} underlayColor={colors.lightgray}>
        <View style={styles.backButton}>
          <Text style={styles.textButton}>{name}</Text>
          <View style={styles.iconButton}>
            <Entypo name="chevron-right" size={27} color={colors.black}/>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};
