import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export const STORY_WIDTH = width * 0.35;
export const STORY_HEIGHT = STORY_WIDTH * 1.4;

export default StyleSheet.create({
  container: {
    marginBottom: getSize.m(12),
    marginLeft: getSize.m(16),
  },
});
