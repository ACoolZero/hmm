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
    <Pressable style={style} disabled={disabled || !isValid} onPress={onPress}>
      <LinearGradient
        colors={isValid ? backgroundColor : ['#D1D5DB', '#D1D5DB']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.container}>
        {disabled ? (
          <UIActivityIndicator size={getSize.s(20)} color={loadingTintColor} />
        ) : (
          <Text type="semibold" color={textColor ? textColor : isValid ? 'white' : 'light_text'} style={titleStyle}>
            {title}
          </Text>
        )}
      </LinearGradient>
    </Pressable>
  );
};

export default GradientButton;
