import {getSize, height} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerBorder: {
    borderBottomLeftRadius: getSize.s(32),
    paddingBottom: getSize.m(5),
  },
  container: {
    paddingHorizontal: getSize.m(16),
    borderBottomLeftRadius: getSize.s(32),
    height: height * 0.3,
  },
  btnBack: {
    height: getSize.s(44),
    width: getSize.s(40),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowColor: '#000000',
    elevation: 5,
  },
});
