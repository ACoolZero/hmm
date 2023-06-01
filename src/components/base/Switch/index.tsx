import {Text} from '@components';
import {COLORS} from '@theme';
import {getSize} from '@utils/responsive';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Pressable, View} from 'react-native';
import styles from './styles';
import {SwitchProps} from './types';

const Switch: React.FC<SwitchProps> = ({
  isOn,
  onToggle,
  label,
  labelStyle,
  highlight = true,
  onColor = COLORS.primary,
  offColor = COLORS.gray_300,
  containerStyle,
  disabled,
  style,
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
        <View style={[styles.toggleContainer, style, {backgroundColor}]}>
          {highlight && <View style={styles.highlightToggle} />}
          <Animated.View style={[styles.toggleWheel, {transform}]} />
        </View>
      </Pressable>
    </View>
  );
};

export default Switch;
