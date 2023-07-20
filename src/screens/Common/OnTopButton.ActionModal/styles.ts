import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  btnAvatar: {
    borderRadius: getSize.s(28),
    borderWidth: getSize.s(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#87A8B980',
    borderStyle: 'dashed',
  },
  btnClose: {
    height: getSize.s(24),
    width: getSize.s(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
