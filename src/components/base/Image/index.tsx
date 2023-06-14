import {useColors} from '@hooks';
import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {handleRound, handleSquare} from '../shared';
import {ImageProps} from './types';

const Image: React.FC<ImageProps> = ({
  source,
  width,
  height,
  tintColor,
  round,
  square,
  style,
  resizeMode = 'cover',
  ...rest
}) => {
  const {COLORS} = useColors();
  const imageStyle = [
    width && {width},
    height && {height},
    square && {...handleSquare(square)},
    round && {...handleRound(round)},
    {...StyleSheet.flatten(style)},
  ];

  return (
    <FastImage
      {...rest}
      source={source}
      style={imageStyle}
      tintColor={(COLORS as any)[tintColor] ? (COLORS as any)[tintColor] : tintColor}
      resizeMode={FastImage.resizeMode[resizeMode]}
    />
  );
};

export default Image;
