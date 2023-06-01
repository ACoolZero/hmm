import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface CheckBoxProps {
  title?: string;
  value?: boolean;
  setValue?: any;
  width?: number;
  activeColor?: string;
  onPress?: () => void;
  labelStyles?: StyleProp<TextStyle>;
  containerStyles?: StyleProp<ViewStyle>;
}
