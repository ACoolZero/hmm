import {useColors} from '@hooks';
import {FONTS} from '@theme';
import {getSize} from '@utils/responsive';
import {isNumber} from 'lodash';
import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
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
    size = 16,
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
  const {COLORS} = useColors();

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
    {fontWeight: (FONTS.fontWeight as any)[type]},
    textDecorationLine && {textDecorationLine},
    {fontSize: getSize.m(size)},
    sm && {fontSize: getSize.m(14)},
    md && {fontSize: getSize.m(20)},
    lg && {fontSize: getSize.m(32)},
    xl && {fontSize: getSize.m(46)},
    {...StyleSheet.flatten(style)},
  ];

  return (
    <RNText style={textStyle} {...textProps}>
      {props.children}
    </RNText>
  );
};

export default Text;
