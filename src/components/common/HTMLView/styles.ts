import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export const NORMAL_STYLES = {
  fontSize: getSize.m(16),
  fontFamily: 'Poppins-Regular',
  color: '#A0A0A0',
  marginBottom: 0,
};

export default StyleSheet.create({
  paragraph: {...NORMAL_STYLES},
  heading: {
    ...NORMAL_STYLES,
    fontFamily: 'Poppins-Medium',
  },
  ul: {...NORMAL_STYLES},
  li: {...NORMAL_STYLES},
  strong: {...NORMAL_STYLES, fontFamily: 'Poppins-Medium'},
  a: {
    ...NORMAL_STYLES,
  },
  figure: {marginTop: 0},
  img: {
    marginTop: 0,
  },
  figcaption: {
    ...NORMAL_STYLES,
  },
  blockquote: {
    ...NORMAL_STYLES,
    borderLeftWidth: getSize.m(5),
    paddingLeft: getSize.m(12),
    borderStyle: 'solid',
  },
});
