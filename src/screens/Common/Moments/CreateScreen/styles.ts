import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export const IMAGE_WIDTH = width * 0.65;
export const IMAGE_HEIGHT = IMAGE_WIDTH * 1.4;
export const ICON_HOLDER_SIZE = IMAGE_WIDTH * 0.25;

export default StyleSheet.create({
  containerInputStyle: {
    marginBottom: getSize.m(0),
  },
});
