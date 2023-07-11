import {Text} from '@components';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Pressable, TextStyle, ViewStyle} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

interface GradientButtonProps {
  title: string;
  disabled?: boolean;
  isValid?: boolean;
  textColor?: string;
  backgroundColor?: string[];
  titleStyle?: TextStyle;
  loadingTintColor?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  disabled,
  isValid = true,
  textColor,
  backgroundColor = ['#23B7EB', '#78A9FD'],
  titleStyle,
  loadingTintColor = 'white',
  onPress,
  style,
}) => {
  return (
    <Pressable style={{...style, marginHorizontal: getSize.m(3)}} disabled={disabled || !isValid} onPress={onPress}>
      <LinearGradient
        colors={isValid ? backgroundColor : ['#9EDCF2', '#D0E1FE']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.container}>
        {disabled ? (
          <UIActivityIndicator size={getSize.s(20)} color={loadingTintColor} />
        ) : (
          <Text type="semibold" color={textColor ? textColor : isValid ? 'white' : '#7FADFD'} style={titleStyle}>
            {title}
          </Text>
        )}
      </LinearGradient>
    </Pressable>
  );
};

export default GradientButton;
