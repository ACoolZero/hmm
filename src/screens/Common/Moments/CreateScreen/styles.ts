import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export const IMAGE_WIDTH = width * 0.65;
export const IMAGE_HEIGHT = IMAGE_WIDTH * 1.4;

export default StyleSheet.create({
  containerInputStyle: {
    marginBottom: getSize.m(0),
  },
});
