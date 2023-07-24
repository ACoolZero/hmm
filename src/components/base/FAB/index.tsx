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
  children?: JSX.Element;
  onPress?: () => void;
}

const FAB: React.FC<FABProps> = ({
  draggable = false,
  reversible = false,
  maxSize = 50,
  icon,
  xOffset = 16,
  yOffset = 80,
  children,
  onPress,
  ...containerProps
}) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const LEFT_HORIZONTAL_BOUNDS = -width + maxSize + 2 * xOffset;
  const TOP_VERTICAL_BOUNDS = -height + maxSize + 2 * yOffset;
  const HORIZONTAL_BOUNDS_RANGE = [LEFT_HORIZONTAL_BOUNDS, 0];
  const VERTICAL_BOUNDS_RANGE = [TOP_VERTICAL_BOUNDS, 0];
  const touchThreshold = 20;

  const wrapperStyle: ViewStyle = {position: 'absolute', right: xOffset, bottom: yOffset};

  const transform = [
    {
      translateX: pan.x.interpolate({
        inputRange: HORIZONTAL_BOUNDS_RANGE,
        outputRange: HORIZONTAL_BOUNDS_RANGE,
        extrapolate: 'clamp',
      }),
    },
    {
      translateY: pan.y.interpolate({
        inputRange: VERTICAL_BOUNDS_RANGE,
        outputRange: VERTICAL_BOUNDS_RANGE,
        extrapolate: 'clamp',
      }),
    },
  ];

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, {dx, dy}) => {
        return draggable && (Math.abs(dx) > touchThreshold || Math.abs(dy) > touchThreshold);
      },
      onPanResponderGrant: () => {
        pan.setOffset((pan as any).__getValue());
        pan.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {useNativeDriver: false}),
      onPanResponderRelease: () => {
        if (reversible) {
          Animated.spring(pan, {toValue: {x: 0, y: 0}, useNativeDriver: false}).start();
        } else {
          let newX = 0;
          let xValue = (pan.x as any)._value;
          let yValue = (pan.y as any)._value;
          let centerHorizontal = (width - maxSize) / 2;
          if (xValue > 0) {
            newX = Math.abs(xValue) > centerHorizontal ? -LEFT_HORIZONTAL_BOUNDS : 0;
          } else {
            newX = Math.abs(xValue) > centerHorizontal ? LEFT_HORIZONTAL_BOUNDS : 0;
          }
          let newY = yValue;
          pan.setValue({x: newX, y: newY});
          pan.flattenOffset();
        }
      },
    }),
  ).current;

  return (
    <Block style={wrapperStyle}>
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
