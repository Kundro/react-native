import {AppRegistry} from 'react-native';
import AboutMe from './screens/AboutMe/AboutMe.screen';
import Menu from './screens/Menu/Menu.screen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Menu, AboutMe);
