import {getSize} from '@utils/responsive';

export default {
  flatListcontentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: getSize.m(16),
    paddingBottom: getSize.m(32),
  } as const,
  header: (animatedValue: any) => ({
    marginTop: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, -51],
      extrapolate: 'clamp',
    }),
  }),
};
