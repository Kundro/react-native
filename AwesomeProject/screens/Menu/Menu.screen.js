import React from 'react';
import ListItem from '../../Components/ListItem/ListItem';
import {ABOUT_ME_SCREEN} from '../../config/constants';
import colors from '../../res/colors';

export default Menu = ({navigation}) => {
  return (
    <ListItem
      onPress={() => navigation.navigate(ABOUT_ME_SCREEN)}
      name="Profile"
      underlayColor={colors.lightgray}></ListItem>
  );
};
