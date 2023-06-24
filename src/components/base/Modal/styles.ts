import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default {
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  content: (position: 'center' | 'bottom'): any => ({
    flex: 1,
    justifyContent: position === 'center' ? 'center' : 'flex-end',
    paddingHorizontal: position === 'center' ? getSize.m(16) : 0,
  }),
};
