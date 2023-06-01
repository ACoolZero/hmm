import {COLORS} from '@theme';
import {getSize} from '@utils/responsive';

export default {
  button: (borderColor: any, scale: any, width: number): any => ({
    borderColor,
    transform: [{scale}],
    width: getSize.s(width),
    height: getSize.s(width),
    padding: getSize.m(5),
    borderRadius: getSize.s(5),
    borderWidth: getSize.m(2),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: COLORS.white,
  }),
  icon: (width: number): any => ({
    width: getSize.s(width - 5),
    height: getSize.s(width - 5),
    resizeMode: 'contain',
    zIndex: 20,
  }),
  background: (widthIcon: any, activeColor: string): any => ({
    width: widthIcon,
    height: widthIcon,
    backgroundColor: activeColor,
    position: 'absolute',
  }),
};
