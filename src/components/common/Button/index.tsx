import {Block, Text} from '@components';
import {getSize} from '@utils/responsive';
import React, {useRef} from 'react';
import {Animated, Pressable} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';
import styles from './styles';
import {ButtonProps} from './types';

const Button: React.FC<ButtonProps> = ({
  title,
  disabled,
  animated = true,
  isValid = true,
  textColor,
  backgroundColor = 'primary',
  titleStyle,
  loadingTintColor = 'white',
  containerStyle,
  rippleColor = '#ffffff40',
  onPress,
  style,
  ...rest
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const _onPressIn = () => {
    Animated.timing(animatedValue, {
      toValue: 20,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const _onPressOut = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      style={style}
      disabled={disabled || !isValid}
      onPress={onPress}
      onPressIn={_onPressIn}
      onPressOut={_onPressOut}>
      <Block
        {...rest}
        row
        justifyCenter
        alignCenter
        marginVertical={12}
        radius={6}
        height={45}
        overflow="hidden"
        backgroundColor={isValid ? backgroundColor : 'gray_300'}
        style={containerStyle}>
        {animated && (
          <Animated.View style={[styles.rippleCircle(rippleColor), {transform: [{scale: animatedValue}]}]} />
        )}
        {disabled ? (
          <UIActivityIndicator size={getSize.s(20)} color={loadingTintColor} />
        ) : (
          <Text type="semibold" color={textColor ? textColor : isValid ? 'light_text' : 'white'} style={titleStyle}>
            {title}
          </Text>
        )}
      </Block>
    </Pressable>
  );
};

export default Button;
