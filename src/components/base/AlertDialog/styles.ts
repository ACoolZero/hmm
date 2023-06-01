import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  commonStyles: {
    height: getSize.s(45),
    borderRadius: getSize.s(25),
    marginVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
