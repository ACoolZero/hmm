import {TextStyle, ViewStyle} from 'react-native';

export interface GradientSwitchProps {
  isOn?: boolean;
  onToggle?: () => void;
  label?: string;
  labelStyle?: TextStyle;
  onColor?: string[];
  offColor?: string[];
  containerStyle?: ViewStyle;
  disabled?: boolean;
}
