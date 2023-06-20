import {useColors} from '@hooks';
import {getSize} from '@utils/responsive';
import {isNumber} from 'lodash';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {handleMargin, handlePadding, handleRound, handleSquare} from '../shared';
import styles from './styles';
import {BlockProps} from './types';

const Block: React.FC<BlockProps> = ({
  flex,
  flexShrink,
  flexGrow,
  row,
  column,
  shadow,
  backgroundColor,
  space,
  padding,
  margin,
  alignStart,
  alignCenter,
  alignEnd,
  wrap,
  justifyCenter,
  justifyEnd,
  justifyStart,
  gap,
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
  radius,
  height,
  width,
  square,
  round,
  borderWidth,
  relative,
  absolute,
  top,
  left,
  right,
  bottom,
  borderColor,
  children,
  overflow,
  alignSelf,
  style,
  shadowColor,
  opacity,
  elevation,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  radiusTopLeft,
  radiusTopRight,
  radiusBottomLeft,
  radiusBottomRight,
  safeBottom,
  ...rest
}) => {
  const {COLORS} = useColors();
  const insets = useSafeAreaInsets();
  const blockStyles = [
    flex && styles.block,
    flexShrink && styles.flexShrink,
    flexGrow && styles.flexGrow,
    !flex && {flex: 0},
    width && {width: width},
    height && {height: height},
    row && styles.row,
    column && styles.column,
    shadow && {
      ...styles.shadow,
      shadowColor: shadowColor ? (COLORS as any)[shadowColor] : COLORS.black,
      elevation: elevation || 3,
    },
    wrap && {flexWrap: 'wrap'},
    backgroundColor && {
      backgroundColor: (COLORS as any)[backgroundColor] || backgroundColor,
    },
    padding && {...handlePadding(getSize.m(padding))},
    margin && {...handleMargin(getSize.m(margin))},
    alignStart && styles.alignStart,
    alignCenter && styles.alignCenter,
    alignEnd && styles.alignEnd,
    justifyCenter && styles.justifyCenter,
    justifyStart && styles.justifyStart,
    justifyEnd && styles.justifyEnd,
    space && {justifyContent: `space-${space}`},
    gap && {gap: getSize.m(gap)},
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
    radius && {borderRadius: getSize.s(radius)},
    borderWidth && {borderWidth: borderWidth},
    square && {...handleSquare(square)},
    round && {...handleRound(round)},
    isNumber(opacity) && {opacity: opacity},
    borderColor && {
      borderColor: (COLORS as any)[borderColor] || borderColor || COLORS.gray_400,
    },
    relative && {position: 'relative'},
    absolute && {position: 'absolute'},
    isNumber(top) && {top: getSize.v(top)},
    isNumber(left) && {left: getSize.s(left)},
    isNumber(right) && {right: getSize.s(right)},
    isNumber(bottom) && {bottom: getSize.v(bottom)},
    overflow && {overflow},
    alignSelf && {alignSelf},
    borderTopWidth && {borderTopWidth},
    borderRightWidth && {borderRightWidth},
    borderBottomWidth && {borderBottomWidth},
    borderLeftWidth && {borderLeftWidth},
    radiusTopLeft && {borderTopLeftRadius: radiusTopLeft},
    radiusTopRight && {borderTopRightRadius: radiusTopRight},
    radiusBottomLeft && {borderBottomLeftRadius: radiusBottomLeft},
    radiusBottomRight && {borderBottomRightRadius: radiusBottomRight},
    safeBottom && {
      paddingBottom: insets.bottom ? insets.bottom : getSize.m(20),
    },
    {...StyleSheet.flatten(style)},
  ];

  return (
    <View style={blockStyles} {...rest}>
      {children}
    </View>
  );
};

export default Block;
