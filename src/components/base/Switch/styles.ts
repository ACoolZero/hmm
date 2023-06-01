import {COLORS} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleContainer: {
    width: getSize.s(48),
    height: getSize.s(30),
    borderRadius: getSize.s(30),
    justifyContent: 'center',
  },
  toggleWheel: {
    width: getSize.s(24),
    height: getSize.s(24),
    borderRadius: getSize.s(12),
    backgroundColor: 'white',
  },
  highlightToggle: {
    height: getSize.s(8),
    width: getSize.s(2),
    backgroundColor: COLORS.white,
    position: 'absolute',
    left: getSize.m(10),
  },
});
