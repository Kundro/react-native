import {StyleSheet} from 'react-native';
import colors from '../res/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.lightgray,
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
  mainText: {
    padding: 7,
    fontSize: 18,
    color: colors.text,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  lowText:{
    padding: 7,
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.text,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingTop: 10,
    color: '#121212'
  },
});
