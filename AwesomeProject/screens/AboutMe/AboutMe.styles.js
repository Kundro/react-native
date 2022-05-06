import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'dimgrey'
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    padding: 7,
    fontSize: 18,
    color: 'dimgrey',
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
});

export default styles;
