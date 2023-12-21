import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';

GoogleSignin.configure({
  webClientId: '1075938704086-6e6hg18l9vief5es2v21qarrj098m022.apps.googleusercontent.com',
  iosClientId: '1075938704086-qrjotta8pdm3v981sveojhg8kti8468h.apps.googleusercontent.com',
});

LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => App);
