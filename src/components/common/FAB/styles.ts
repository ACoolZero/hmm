import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backdrop: {
    position: 'absolute',
    bottom: getSize.s(70),
    right: getSize.s(16),
  },
});
