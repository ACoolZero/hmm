import {Block} from '@components';
import {BlockProps} from '@components/base/Block/types';
import {getSize, width} from '@utils/responsive';
import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

interface LoadingBarProps {
  visible: boolean;
  backdrop?: {
    width?: number | string;
    height?: number | string;
    backgroundColor?: string;
  };
  container?: BlockProps;
  barStyle?: ViewStyle;
  gradientColors?: string[];
  timePerLap?: number;
}

const LoadingBar: React.FC<LoadingBarProps> = ({
  visible,
  backdrop,
  container,
  barStyle,
  gradientColors = ['#9EDCF2', '#23B7EB'],
  timePerLap = 2000,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const endPosition: any = container?.width ? container.width : width;
  const startPosition: any = barStyle?.width ? -barStyle.width : -styles.defaultBarStyle.width;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: timePerLap,
        useNativeDriver: false,
      }),
    ).start();
  });

  const animatedStyle = {
    barStyle: {
      left: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [startPosition, endPosition],
      }),
    },
  };

  return (
    visible && (
      <Block
        absolute
        width={backdrop?.width}
        height={backdrop?.height}
        backgroundColor={
          backdrop?.width && backdrop.height
            ? backdrop.backgroundColor
              ? backdrop.backgroundColor
              : 'rgba(0,0,0,0.4)'
            : ''
        }>
        <Block {...container}>
          <AnimatedLinearGradient
            colors={gradientColors}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={[styles.defaultBarStyle, barStyle, animatedStyle.barStyle]}
          />
        </Block>
      </Block>
    )
  );
};

export default LoadingBar;

const styles = StyleSheet.create({
  defaultBarStyle: {
    width: 80,
    height: 8,
    borderRadius: getSize.s(8),
  },
});
