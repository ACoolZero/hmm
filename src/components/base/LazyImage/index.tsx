/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Block from '../Block';
import {handleRound, handleSquare} from '../shared';
import {LazyImageProps} from './types';

const LazyImage: React.FC<LazyImageProps> = ({
  source,
  thumbnail,
  width,
  height,
  round,
  square,
  resizeMode,
  style,
  containerStyles,
  ...rest
}) => {
  const thumbnailAnimated = new Animated.Value(0);
  const imageAnimated = new Animated.Value(0);
  const resize = resizeMode ? FastImage.resizeMode[resizeMode] : FastImage.resizeMode.cover;

  const imageStyle = [
    width && {width},
    height && {height},
    square && {...handleSquare(square)},
    round && {...handleRound(round)},
    {...StyleSheet.flatten(style)},
  ];

  const onThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{...containerStyles, alignItems: 'center'}}>
      <Animated.View style={{position: 'absolute', opacity: thumbnailAnimated}}>
        {thumbnail ? (
          <FastImage
            {...rest}
            source={{uri: thumbnail}}
            style={imageStyle}
            resizeMode={resize}
            onLoadStart={onThumbnailLoad}
          />
        ) : (
          <Block alignCenter justifyCenter style={imageStyle}>
            <FastImage
              source={ICONS.image_holder}
              style={{height: getSize.s(16), width: getSize.s(16)}}
              tintColor="#D1D5DB"
              onLoadStart={onThumbnailLoad}
            />
          </Block>
        )}
      </Animated.View>
      <Animated.View style={{opacity: imageAnimated}}>
        <FastImage {...rest} source={{uri: source}} style={imageStyle} resizeMode={resize} onLoadEnd={onImageLoad} />
      </Animated.View>
    </Animated.View>
  );
};

export default LazyImage;
