import {Block, Image} from '@components';
import {BlockProps} from '@components/base/Block/types';
import {height, width} from '@utils/responsive';
import React, {useRef} from 'react';
import {Animated, PanResponder, TouchableOpacity, ViewStyle} from 'react-native';

interface FABProps extends BlockProps {
  draggable?: boolean;
  reversible?: boolean;
  maxSize?: number;
  icon?: number;
  xOffset?: number;
  yOffset?: number;
  onPress?: () => void;
  children?: JSX.Element;
}

const FAB: React.FC<FABProps> = ({
  draggable = false,
  reversible = false,
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
  const wrapperStyle: ViewStyle = {position: 'absolute', right: xOffset, bottom: yOffset};

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
        if (reversible) {
          Animated.spring(pan, {toValue: {x: 0, y: 0}, useNativeDriver: true}).start();
        } else {
          pan.extractOffset();
        }
      },
    }),
  ).current;

  return (
    <Block pointerEvents="box-none" style={wrapperStyle}>
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
