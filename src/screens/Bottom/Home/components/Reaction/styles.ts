import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  input: {
    borderRadius: getSize.s(12),
    height: getSize.s(64),
    marginVertical: getSize.m(12),
  },
});
