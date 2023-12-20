import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export const SELECTED_REACTION_SIZE = (width - 16 * 2 - 12 * 3) / 4;
export const SELECTED_ICON_SIZE = SELECTED_REACTION_SIZE * 0.52;

export const REACTION_SIZE = (width - getSize.m(16 * 2) - getSize.m(12 * 5)) / 4;
export const ICON_SIZE = REACTION_SIZE * 0.52;

export default StyleSheet.create({
  iconShadow: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 3,
  },
});
