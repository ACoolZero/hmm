/* eslint-disable react-native/no-inline-styles */
import {Block, Image} from '@components';
import {BlockProps} from '@components/base/Block/types';
import {height, width} from '@utils/responsive';
import React, {useRef} from 'react';
import {Animated, PanResponder, TouchableOpacity} from 'react-native';

interface FABProps extends BlockProps {
  draggable?: boolean;
  maxSize?: number;
  icon?: number;
  xOffset?: number;
  yOffset?: number;
  onPress?: () => void;
  children?: JSX.Element;
}

const FAB: React.FC<FABProps> = ({
  draggable = false,
  maxSize = 50,
  icon,
  xOffset = 16,
  yOffset = 80,
  onPress,
  children,
  ...containerProps
}) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const HORIZONTAL_BOUNDS = [-width + maxSize + 2 * xOffset, 0];
  const VERTICAL_BOUNDS = [-height + maxSize + 2 * yOffset, 0];

  const transform = [
    {
      translateX: pan.x.interpolate({
        inputRange: HORIZONTAL_BOUNDS,
        outputRange: HORIZONTAL_BOUNDS,
        extrapolate: 'clamp',
      }),
    },
    {
      translateY: pan.y.interpolate({
        inputRange: VERTICAL_BOUNDS,
        outputRange: VERTICAL_BOUNDS,
        extrapolate: 'clamp',
      }),
    },
  ];

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => !!draggable,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {useNativeDriver: false}),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  return (
    <Block pointerEvents="box-none" style={{position: 'absolute', right: xOffset, bottom: yOffset}}>
      <Animated.View {...panResponder.panHandlers} style={{transform}}>
        <TouchableOpacity onPress={onPress}>
          <Block
            alignCenter
            justifyCenter
            round={maxSize}
            overflow="hidden"
            backgroundColor="primary"
            {...containerProps}>
            {icon ? <Image source={icon} square={18} tintColor="white" /> : children}
          </Block>
        </TouchableOpacity>
      </Animated.View>
    </Block>
  );
};

export default FAB;
