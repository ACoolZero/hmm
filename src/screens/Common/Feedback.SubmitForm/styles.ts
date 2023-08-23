import {isIos} from '@utils/helper';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  multilineInputStyle: {
    alignItems: 'flex-start',
    height: getSize.s(120),
    borderWidth: getSize.s(0),
    paddingHorizontal: getSize.m(16),
    paddingTop: isIos ? getSize.m(8) : 0,
    marginVertical: getSize.m(24),
  },
  btnAddScreenshot: {
    height: getSize.s(88),
    borderRadius: getSize.s(8),
    borderWidth: getSize.s(1),
    borderStyle: 'dashed',
  },
});
