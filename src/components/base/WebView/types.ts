import {ViewStyle} from 'react-native';
import {WebViewProps as RNWebViewProps} from 'react-native-webview';

export interface WebViewProps extends RNWebViewProps {
  source?: any;
  style?: ViewStyle;
  scrollEnabled?: boolean;
}
