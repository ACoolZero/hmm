import {FastImageProps, ResizeMode, Source} from 'react-native-fast-image';

export interface ImageProps extends FastImageProps {
  source: Source | number;
  width?: number;
  height?: number;
  tintColor?: any;
  round?: number;
  square?: number;
  style?: any;
  resizeMode?: ResizeMode;
}
