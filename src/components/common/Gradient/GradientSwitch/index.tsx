import {Text} from '@components';
import {getSize} from '@utils/responsive';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Pressable, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {GradientSwitchProps} from './types';

const GradientSwitch: React.FC<GradientSwitchProps> = ({
  isOn,
  onToggle,
  label,
  labelStyle,
  onColor = ['#23B7EB', '#78A9FD'],
  offColor = ['#D1D5DB', '#D1D5DB'],
  containerStyle,
  disabled,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const backgroundColor = isOn ? onColor : offColor;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }, [animatedValue, isOn]);

  const transform = [
    {
      translateX: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [getSize.s(3), getSize.s(21)],
        extrapolate: 'clamp',
      }),
    },
  ];

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text type="medium" style={labelStyle}>
          {label}
        </Text>
      )}
      <Pressable disabled={disabled} onPress={onToggle}>
        <LinearGradient
          colors={backgroundColor}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={[styles.toggleContainer]}>
          <Animated.View style={[styles.toggleWheel, {transform}]} />
        </LinearGradient>
      </Pressable>
    </View>
  );
};

export default GradientSwitch;
