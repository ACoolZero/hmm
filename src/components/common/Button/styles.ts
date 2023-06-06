import {getSize} from '@utils/responsive';

export default {
  rippleCircle: (color: string): any => ({
    width: getSize.s(48),
    height: getSize.s(48),
    borderRadius: getSize.s(50),
    backgroundColor: color,
    position: 'absolute',
  }),
};
