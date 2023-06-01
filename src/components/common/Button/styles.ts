import {getSize} from '@utils/responsive';

export default {
  rippleCircle: (color: string): any => ({
    width: getSize.s(45),
    height: getSize.s(45),
    borderRadius: getSize.s(50),
    backgroundColor: color,
    position: 'absolute',
  }),
};
