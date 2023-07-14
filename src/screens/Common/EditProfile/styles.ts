import {isIos} from '@utils/helper';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerInputStyle: {
    marginBottom: getSize.m(20),
  },
  btnCamera: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  multilineInputStyle: {
    alignItems: 'flex-start',
    height: getSize.s(120),
    borderWidth: getSize.s(0),
    paddingHorizontal: getSize.m(16),
    paddingTop: isIos ? getSize.m(8) : 0,
  },
  phoneInputStyle: {
    height: getSize.s(48),
    borderRadius: getSize.s(8),
    paddingHorizontal: getSize.m(16),
  },
});
