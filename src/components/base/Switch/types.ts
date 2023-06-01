import {TextStyle, ViewStyle} from 'react-native';

export interface SwitchProps {
  isOn?: boolean;
  onToggle?: () => void;
  label?: string;
  labelStyle?: TextStyle;
  highlight?: boolean;
  onColor?: string;
  offColor?: string;
  containerStyle?: ViewStyle;
  disabled?: boolean;
  style?: ViewStyle;
}
