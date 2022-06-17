import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

export default StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 10,
    color: colors.black,
  },
  container: {
    backgroundColor: colors.white,
    paddingVertical: 5,
    borderBottomColor: colors.lightgray,
    borderBottomWidth: 1,
  },
});
