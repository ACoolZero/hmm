import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  shadow: {
    zIndex: 999,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowColor: '#000000',
    elevation: 5,
  },
  btnLogout: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: getSize.s(12),
    borderWidth: getSize.s(1),
    padding: getSize.m(16),
    marginHorizontal: getSize.m(16),
    marginVertical: getSize.m(12),
  },
});
