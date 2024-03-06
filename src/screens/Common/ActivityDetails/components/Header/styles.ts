import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnMenu: {
    position: 'absolute',
    height: getSize.s(42),
    justifyContent: 'center',
    right: getSize.m(16),
    bottom: 0,
  },
});
