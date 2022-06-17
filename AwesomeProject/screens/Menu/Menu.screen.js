import React from 'react';
import ListItem from '../../Components/ListItem/ListItem';
import {ABOUT_ME_SCREEN} from '../../config/Constants';

export default Menu = ({navigation}) => {
  return (
    <ListItem
      onPress={() => navigation.navigate(ABOUT_ME_SCREEN)}
      name="Profile"></ListItem>
  );
};
