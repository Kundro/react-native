import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button} from '../Button/Button';
import colors from '../../res/colors';

const SettingsButton = ({onPress, underlayColor, color}) => {
  return (
  <Button onPress={onPress} underlayColor={underlayColor}>
    <AntDesign
      name="setting"
      size={27}
      style={{paddingRight: 16, color: color}}
    />
  </Button>
  )
};

export default SettingsButton;