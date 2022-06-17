import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

export default StyleSheet.create({
  text: {
    fontSize: 20,
    paddingVertical: 10,
    color: colors.black,
  },
  container: {
    backgroundColor: colors.white,
    paddingVertical: 5,
    borderBottomColor: colors.lightgray,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  subtext: {
    fontSize: 15,
    paddingBottom: 10,
    marginTop: -10,
    color: colors.dimgrey,
  },
  themeIcon: {
    paddingTop: 16,
    paddingHorizontal: 14,
  }
});
