import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backdrop: {
    position: 'absolute',
    bottom: getSize.s(30),
    right: getSize.s(30),
  },
});
