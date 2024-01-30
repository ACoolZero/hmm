import {getSize, height, width} from '@utils/responsive';

const styles = {
  animatedImageContainer: ({animatedValue, STORY_WIDTH, STORY_HEIGHT, leftOffset, topOffset}: any) => ({
    overflow: 'hidden',
    borderRadius: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [getSize.s(24), 0],
    }),
    width: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [STORY_WIDTH, width],
    }),
    height: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [STORY_HEIGHT, height],
    }),
    left: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [leftOffset, 0],
    }),
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [topOffset, 0],
    }),
  }),
  animatedHeader: ({animatedValue, top}: any) => ({
    position: 'absolute',
    opacity: animatedValue,
    width: width,
    height: top + 50,
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-150, 0],
    }),
  }),
  animatedDetailText: (animatedValue: any) => ({
    position: 'absolute',
    opacity: animatedValue,
    bottom: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-150, 0],
    }),
  }),
  closeButtonContainer: (top: number) => ({
    position: 'absolute',
    marginLeft: getSize.m(16),
    marginTop: top,
    padding: getSize.m(12),
    borderRadius: getSize.m(6),
  }),
  image: {
    flex: 1,
    width: 'auto',
    height: 'auto',
  },
};

export default styles;
