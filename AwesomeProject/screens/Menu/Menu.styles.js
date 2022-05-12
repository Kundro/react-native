import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: 10,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.dimgrey,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonProfile: {
    backgroundColor: colors.red
  },
  mainText: {
    padding: 7,
    fontSize: 18,
    color: colors.text,
    fontFamily: 'Roboto',
    // fontWeight: '',
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.text,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
});
