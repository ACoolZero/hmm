import {BlockProps} from '@components/base/Block/types';
import {TextStyle, ViewStyle} from 'react-native';

export interface ButtonProps extends BlockProps {
  event?: string;
  title: string;
  disabled?: boolean;
  animated?: boolean;
  isValid?: boolean;
  textColor?: string;
  backgroundColor?: string;
  titleStyle?: TextStyle;
  loadingTintColor?: string;
  containerStyle?: ViewStyle;
  rippleColor?: string;
  onPress?: () => void;
  style?: ViewStyle;
}
