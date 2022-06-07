import React from 'react';
import Button from '../../Components/Button';
import {ABOUT_ME_SCREEN} from '../../config/Constants';

export default Menu = ({navigation}) => {
  return (
      <Button
        onPress={() => navigation.navigate(ABOUT_ME_SCREEN)}
        name="Profile"
      />
  );
};
