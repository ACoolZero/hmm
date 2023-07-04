import {isIos} from '@utils/helper';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapperStyle: {
    paddingHorizontal: getSize.m(6),
    paddingVertical: getSize.m(6),
    borderRadius: getSize.s(12),
    marginRight: getSize.m(10),
    borderWidth: 0,
    borderColor: '#D9D9D9',
  },
  textInputStyle: {
    fontSize: getSize.m(14),
    textAlignVertical: 'center',
    borderRadius: getSize.s(32),
    minHeight: getSize.s(38),
    paddingHorizontal: getSize.m(12),
    paddingTop: isIos ? getSize.m(12) : getSize.m(8),
  },
  inputToolbarStyle: {
    alignItems: 'center',
    paddingVertical: getSize.m(6),
    paddingLeft: getSize.m(12),
  },
  tickStyle: {
    width: getSize.s(13),
    height: getSize.s(13),
    borderRadius: getSize.s(12),
    marginRight: getSize.m(3),
    marginTop: getSize.m(-1),
    position: 'absolute',
    right: getSize.m(-20),
    bottom: 0,
  },
  messageImageStyle: {
    borderRadius: getSize.s(12),
  },
  fileStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getSize.m(10),
    paddingVertical: getSize.m(12),
  },
});
