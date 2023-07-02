import {isIos} from '@utils/helper';
import {getSize} from '@utils/responsive';
import {StyleProp} from 'react-native';

const styles: StyleProp<any> = {
  wrapperStyle: ({position, currentMessage}: any) => ({
    paddingHorizontal: !currentMessage.image ? getSize.m(6) : 0,
    paddingVertical: getSize.m(6),
    borderRadius: getSize.s(12),
    marginRight: getSize.m(10),
    borderWidth: 0,
    borderColor: '#D9D9D9',
    backgroundColor: position === 'left' ? '#30444E' : '#518EF8',
  }),
  timeTextStyle: (position: any) => ({
    fontSize: getSize.m(10),
    color: '#6B7280',
    alignSelf: position === 'right' ? 'flex-end' : 'flex-start',
    marginRight: position === 'right' ? getSize.m(20) : 0,
    marginLeft: position === 'left' ? getSize.m(55) : 0,
    marginTop: position === 'left' ? getSize.m(-8) : 0,
    marginBottom: getSize.m(6),
  }),
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
};

export default styles;
