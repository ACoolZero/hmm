import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export const IMAGE_HEIGHT = width * 0.5;

export default StyleSheet.create({
  container: {
    borderRadius: getSize.s(20),
    padding: getSize.m(16),
    marginBottom: getSize.m(16),
    marginHorizontal: getSize.m(16),
  },
});
