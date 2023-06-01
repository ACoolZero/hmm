import {COLORS, FONTS} from '@theme';
import {getSize} from '@utils/responsive';
import {isNumber} from 'lodash';
import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import {handleMargin, handlePadding} from '../shared';
import {TextProps} from './types';

const Text: React.FC<TextProps> = props => {
  const {
    sm,
    md,
    lg,
    xl,
    flex,
    flexShrink,
    flexGrow,
    size = 14,
    color = 'text',
    center,
    right,
    justify,
    padding,
    margin,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingVertical,
    paddingHorizontal,
    marginVertical,
    marginHorizontal,
    style,
    type = 'regular',
    lineHeight,
    textDecorationLine,
    ...textProps
  } = props;

  const textStyle: any = [
    flex && {flex: 1},
    flexShrink && {flexShrink: 1},
    flexGrow && {flexGrow: 1},
    {color: (COLORS as any)[color] || color},
    center && {textAlign: 'center'},
    right && {textAlign: 'right'},
    justify && {textAlign: 'justify'},
    padding && {...handlePadding(getSize.m(padding))},
    margin && {...handleMargin(getSize.m(margin))},
    paddingTop && {paddingTop: getSize.m(paddingTop)},
    paddingRight && {paddingRight: getSize.m(paddingRight)},
    paddingBottom && {paddingBottom: getSize.m(paddingBottom)},
    paddingLeft && {paddingLeft: getSize.m(paddingLeft)},
    marginBottom && {marginBottom: getSize.m(marginBottom)},
    marginTop && {marginTop: getSize.m(marginTop)},
    marginRight && {marginRight: getSize.m(marginRight)},
    marginLeft && {marginLeft: getSize.m(marginLeft)},
    paddingHorizontal && {paddingHorizontal: getSize.m(paddingHorizontal)},
    paddingVertical && {paddingVertical: getSize.m(paddingVertical)},
    marginHorizontal && {marginHorizontal: getSize.m(marginHorizontal)},
    marginVertical && {marginVertical: getSize.m(marginVertical)},
    isNumber(lineHeight) && {lineHeight: getSize.m(lineHeight)},
    {fontFamily: (FONTS.fontFamily as any)[type]},
    textDecorationLine && {textDecorationLine},
    {fontSize: getSize.m(size)},
    sm && {fontSize: getSize.m(12)},
    md && {fontSize: getSize.m(16)},
    lg && {fontSize: getSize.m(19)},
    xl && {fontSize: getSize.m(25)},
    {...StyleSheet.flatten(style)},
  ];

  return (
    <RNText style={textStyle} {...textProps}>
      {props.children}
    </RNText>
  );
};

export default Text;
