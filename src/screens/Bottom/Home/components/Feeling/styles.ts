import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export const REACTION_SIZE = (width - 16 * 2 - 12 * 2 - 12) / 4;
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
  btnClosePopup: {
    position: 'absolute',
    bottom: getSize.m(-32),
  },
});
