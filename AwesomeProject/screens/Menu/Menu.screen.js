import React from 'react';
import {StatusBar, ScrollView} from 'react-native';
import ListItem from '../../Components/ListItem/ListItem';
import {ABOUT_ME_SCREEN} from '../../config/constants';
import colors from '../../res/colors';

export default Menu = ({navigation}) => {
  return (
    <ScrollView>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'}/>
      <ListItem
        onPress={() => navigation.navigate(ABOUT_ME_SCREEN)}
        name="Profile"
        underlayColor={colors.lightgray}></ListItem>
    </ScrollView>
  );
};
