import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleContainer: {
    width: getSize.s(43),
    height: getSize.s(24),
    borderRadius: getSize.s(24),
    justifyContent: 'center',
  },
  toggleWheel: {
    width: getSize.s(19),
    height: getSize.s(19),
    borderRadius: getSize.s(19),
    backgroundColor: 'white',
  },
});
