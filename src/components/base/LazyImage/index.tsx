/* eslint-disable react-native/no-inline-styles */
import {ICONS} from '@assets';
import {Block} from '@components';
import {COLORS} from '@theme';
import React, {useState} from 'react';
import {Animated, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {handleRound, handleSquare} from '../shared';
import {LazyImageProps} from './types';

const LazyImage: React.FC<LazyImageProps> = ({
  scalable,
  source,
  thumbnail,
  width,
  height,
  round,
  square,
  resizeMode,
  style,
  containerStyles,
  disableProgressbar = false,
  ...rest
}) => {
  const [scalableHeight, setScalableHeight] = useState(0);
  const IMAGE_HOLDER_SIZE = (height || square || round) * 0.25;
  const PROGRESSBAR_WIDTH = (height || square || round) * 0.85;
  const PROGRESSBAR_HEIGHT = (height || square || round) * 0.1;
  const PROGRESSBAR_MARGIN_BOTTOM = (height || square || round) * 0.15;
  const [progress, setProgress] = useState(0);
  const thumbnailAnimated = new Animated.Value(0);
  const imageAnimated = new Animated.Value(0);
  const resize = resizeMode ? FastImage.resizeMode[resizeMode] : FastImage.resizeMode.cover;

  const imageStyle = [
    width && {width},
    height && {height},
    scalable && {height: scalableHeight},
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
          !scalable && (
            <Block alignCenter justifyCenter style={imageStyle}>
              <FastImage
                source={ICONS.image_holder}
                style={{height: IMAGE_HOLDER_SIZE, width: IMAGE_HOLDER_SIZE}}
                tintColor={COLORS.gray_300}
                onLoadStart={onThumbnailLoad}
              />
            </Block>
          )
        )}
      </Animated.View>
      <Animated.View style={{opacity: imageAnimated}}>
        <FastImage
          {...rest}
          source={{uri: source}}
          style={imageStyle}
          resizeMode={resize}
          onLoad={e => setScalableHeight((e.nativeEvent.height / e.nativeEvent.width) * width)}
          onLoadEnd={onImageLoad}
          onProgress={e => {
            const {loaded, total} = e.nativeEvent;
            total && setProgress(loaded / total);
          }}
        />
      </Animated.View>
      {!scalable && !disableProgressbar && !!progress && progress !== 1 && (
        <Block
          absolute
          radius={PROGRESSBAR_HEIGHT}
          height={PROGRESSBAR_HEIGHT}
          width={PROGRESSBAR_WIDTH}
          bottom={PROGRESSBAR_MARGIN_BOTTOM}
          backgroundColor="#00000050">
          <Block
            radius={PROGRESSBAR_HEIGHT}
            height={PROGRESSBAR_HEIGHT}
            width={progress * PROGRESSBAR_WIDTH}
            backgroundColor="white"
          />
        </Block>
      )}
    </Animated.View>
  );
};

export default LazyImage;
