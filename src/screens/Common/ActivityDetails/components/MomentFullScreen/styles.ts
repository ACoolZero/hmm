import {getSize, height, width} from '@utils/responsive';

const styles = {
  animatedOpacity: (animatedValue: any) => ({
    opacity: animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1],
    }),
  }),
  animatedImageContainer: ({animatedValue, STORY_WIDTH, STORY_HEIGHT, originalDimensions, pan}: any) => ({
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
      outputRange: [originalDimensions.leftOffset, 0],
    }),
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [originalDimensions.topOffset, 0],
    }),
    transform: [{translateX: pan.x}, {translateY: pan.y}],
  }),
  animatedDetailText: (animatedValue: any) => ({
    position: 'absolute',
    opacity: animatedValue,
    bottom: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-150, 0],
    }),
    height: height / 4,
  }),
};

export default styles;
