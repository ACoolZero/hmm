import {ICONS} from '@assets';
import {useColors} from '@hooks';
import {FONTS} from '@theme';
import {getSize} from '@utils/responsive';
import {isEmpty} from 'lodash';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {TextInput as RNTextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Block from '../Block';
import Image from '../Image';
import Text from '../Text';
import styles from './styles';
import {TextInputProps} from './types';

const TextInput = forwardRef<any, TextInputProps>((props, ref) => {
  const {
    label,
    labelStyle,
    containerInputStyle,
    autoCapitalize = 'none',
    type = 'semibold',
    color = 'text',
    borderColor = 'common_border',
    size = 16,
    isSecure,
    rightIcon,
    leftIcon,
    leftIconStyle,
    height,
    maxLength,
    inputStyle,
    errorText,
    isError,
    onFocus,
    onBlur,
    required,
    disabled,
    errorContainerStyle,
    pointerEvents,
    shadow,
    ...inputProps
  } = props;
  const {COLORS} = useColors();
  const [secureEye, setSecureEye] = useState(true);

  const textStyle = [
    styles.resetStyles,
    color && {color: (COLORS as any)[color]},
    color && !(COLORS as any)[color] && {color: color},
    styles.defaultStyles,
    {fontWeight: FONTS.fontWeight[type]},
    isSecure && {paddingRight: getSize.m(50)},
    rightIcon && {paddingRight: getSize.m(16)},
    leftIcon && {paddingLeft: getSize.m(38)},
    {fontSize: getSize.m(size)},
    height && {height: getSize.s(height)},
    {...StyleSheet.flatten(inputProps.style)},
  ];

  useImperativeHandle(ref, () => ({
    focus: () => ref && 'current' in ref && ref.current.focus(),
  }));

  const _renderSecureIcon = () => {
    return (
      <TouchableOpacity
        style={styles.rightIcon}
        hitSlop={{left: 5, right: 5, bottom: 5, top: 5}}
        onPress={() => setSecureEye(!secureEye)}>
        <Image
          source={secureEye ? ICONS.eye_open : ICONS.eye_closed}
          tintColor={COLORS.placeholder}
          square={getSize.m(24)}
        />
        {/* <FontAwesomeIcon name={secureEye ? 'eye' : 'eye-slash'} color={COLORS.placeholder} size={getSize.m(16)} /> */}
      </TouchableOpacity>
    );
  };

  const _renderLabel = () => (
    <Text marginBottom={6} style={labelStyle}>
      {label} {required && <Text color="red">*</Text>}
    </Text>
  );

  const _renderError = () => (
    <Block row alignCenter paddingVertical={3} style={errorContainerStyle}>
      <Ionicons name="ios-warning" color={COLORS.error} size={getSize.m(13)} />
      <Text sm marginLeft={6} color={COLORS.error}>
        {errorText}
      </Text>
    </Block>
  );

  const _onFocus = (e: any) => onFocus && onFocus(e);

  const _onBlur = (e: any) => onBlur && onBlur(e);

  const _renderInput = () => {
    return (
      <RNTextInput
        ref={ref}
        autoCorrect={false}
        allowFontScaling={false}
        placeholder={!isEmpty(label) && leftIcon ? props.placeholder : ''}
        placeholderTextColor={COLORS.placeholder}
        underlineColorAndroid="transparent"
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureEye && isSecure}
        maxLength={maxLength}
        style={textStyle}
        editable={!disabled}
        onFocus={_onFocus}
        onBlur={_onBlur}
        {...inputProps}
      />
    );
  };

  return (
    <Block flexShrink paddingHorizontal={3} pointerEvents={pointerEvents} style={containerInputStyle}>
      {!isEmpty(label) && _renderLabel()}
      <Block
        shadow={shadow}
        style={[
          styles.inputContainer,
          {
            borderColor: isError ? COLORS.error : (COLORS as any)[borderColor],
            backgroundColor: disabled ? COLORS.gray_100 : COLORS.white,
            borderWidth: disabled ? getSize.s(0) : getSize.s(1),
            paddingLeft: leftIcon ? getSize.m(4) : getSize.m(12),
          },
          StyleSheet.flatten(inputStyle),
        ]}>
        {leftIcon && (
          <Image
            source={leftIcon}
            tintColor={isError ? COLORS.error : COLORS.placeholder}
            style={[styles.leftIcon, leftIconStyle]}
            resizeMode="contain"
          />
        )}
        {_renderInput()}
        {isSecure ? _renderSecureIcon() : rightIcon && rightIcon()}
      </Block>

      {isError && Boolean(errorText) && _renderError()}
    </Block>
  );
});

export default TextInput;
