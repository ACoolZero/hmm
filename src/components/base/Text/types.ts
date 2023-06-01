import {FONTS} from '@theme';
import {StyleProp, TextProps as RNTextProps, TextStyle} from 'react-native';

export interface TextProps extends RNTextProps {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  flex?: boolean;
  flexShrink?: boolean;
  flexGrow?: boolean;
  size?: number;
  color?: string;
  center?: boolean;
  right?: boolean;
  justify?: boolean;
  padding?: number;
  margin?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  style?: StyleProp<TextStyle>;
  type?: keyof typeof FONTS.fontFamily;
  lineHeight?: number;
  textDecorationLine?: string;
  children?: any;
}
