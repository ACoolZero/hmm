import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  labelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: getSize.m(-20),
    left: getSize.m(3.5),
    borderRadius: getSize.s(4),
    width: getSize.s(40),
    height: getSize.s(18),
  },
  triangle: {
    borderLeftWidth: getSize.s(4),
    borderRightWidth: getSize.s(4),
    borderTopWidth: getSize.s(6),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    position: 'absolute',
    bottom: getSize.m(-4),
  },
});
