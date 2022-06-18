import {TouchableHighlight} from 'react-native';
import React from 'react';

export const Button = ({onPress, underlayColor, children}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={underlayColor}>
      {children}
    </TouchableHighlight>
  );
};
