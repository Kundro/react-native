import React from 'react';
import {Text, View} from 'react-native';
import colors from '../../res/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './ListItem.styles';
import {Button} from '../Button/Button';

export default ListItem = ({onPress, underlayColor, name}) => {
  return (
    <Button onPress={onPress} underlayColor={underlayColor}>
      <View style={styles.backButton}>
        <Text style={styles.textButton}>{name}</Text>
        <View style={styles.iconButton}>
          <Entypo name="chevron-right" size={27} color={colors.black} />
        </View>
      </View>
    </Button>
  );
};
