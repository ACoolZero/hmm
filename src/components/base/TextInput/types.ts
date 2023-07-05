import {FONTS} from '@theme';
import {TextInputProps as RNTextInputProps, TextStyle, ViewStyle} from 'react-native';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  labelStyle?: TextStyle | TextStyle[];
  containerInputStyle?: ViewStyle | ViewStyle[];
  autoCapitalize?: any;
  type?: keyof typeof FONTS.fontWeight;
  color?: string;
  borderColor?: string;
  size?: number;
  isSecure?: boolean;
  rightIcon?: any;
  leftIcon?: any;
  leftIconStyle?: any;
  height?: number;
  maxLength?: number;
  inputStyle?: ViewStyle | ViewStyle[];
  errorText?: any;
  isError?: any;
  required?: boolean;
  disabled?: boolean;
  errorContainerStyle?: ViewStyle | ViewStyle[];
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
  shadow?: boolean;
}
