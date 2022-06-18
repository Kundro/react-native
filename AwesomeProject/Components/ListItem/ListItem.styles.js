import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

export default StyleSheet.create({
  textButton: {
    color: colors.black,
    fontSize: 20,
    left: 16,
    top: 12,
  },
  backButton: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgray,
  },
  iconButton: {
    alignItems: 'flex-end',
    bottom: 12,
    right: 16,
  },
});
