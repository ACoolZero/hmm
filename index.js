import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';
import { AppConfig } from '@utils/constants';
import App from './src/App';

GoogleSignin.configure({
  webClientId: AppConfig.GOOGLE_WEB_CLIENT_ID,
  androidClientId: AppConfig.GOOGLE_ANDROID_CLIENT_ID,
  iosClientId: AppConfig.GOOGLE_IOS_CLIENT_ID,
});

LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => App);
