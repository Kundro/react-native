import {TouchableHighlight} from 'react-native';
import React from 'react';
import colors from '../../res/colors';

export const Button = ({onPress, children}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.lightgray}>
      {children}
    </TouchableHighlight>
  );
};
