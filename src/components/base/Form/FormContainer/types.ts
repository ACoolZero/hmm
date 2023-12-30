import {ScrollViewProps, StyleProp, ViewStyle} from 'react-native';

export interface FormContainerProps extends ScrollViewProps {
  style?: StyleProp<ViewStyle> | any;
  children?: any;
}
