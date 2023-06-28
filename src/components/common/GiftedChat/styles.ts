import {getSize} from '@utils/responsive';
import {StyleProp} from 'react-native';

const styles: StyleProp<any> = {
  wrapperStyle: ({position, currentMessage}: any) => ({
    paddingHorizontal: !currentMessage.image ? getSize.m(6) : 0,
    paddingVertical: getSize.m(6),
    borderRadius: currentMessage.action !== 'REMOVED' && getSize.s(12),
    marginRight: getSize.m(10),
    borderWidth: currentMessage.action === 'REMOVED' ? getSize.m(1) : 0,
    borderColor: '#D9D9D9',
    backgroundColor:
      currentMessage.action === 'REMOVED'
        ? null
        : !currentMessage.image
        ? position === 'left'
          ? '#30444E'
          : '#518EF8'
        : '#FFFFFF',
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
    marginTop: getSize.m(12),
  },
  inputToolbarStyle: {
    alignItems: 'center',
    paddingVertical: getSize.m(12),
    paddingLeft: getSize.m(16),
    borderRadius: getSize.s(32),
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
