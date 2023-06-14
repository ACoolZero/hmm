import {FONTS} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  resetStyles: {
    flex: 1,
    padding: 0,
    margin: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  defaultStyles: {
    fontWeight: FONTS.fontWeight.regular,
    minHeight: getSize.m(38),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: getSize.s(8),
    height: getSize.s(48),
    paddingRight: getSize.m(12),
  },
  leftIcon: {
    position: 'absolute',
    left: getSize.m(12),
    height: getSize.s(20),
    width: getSize.s(20),
  },
  rightIcon: {
    position: 'absolute',
    right: getSize.m(16),
  },
});
