import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnBack: {
    height: getSize.s(50),
    width: getSize.s(50),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  iconBack: {
    height: getSize.s(14),
    width: getSize.s(14),
  },
});
