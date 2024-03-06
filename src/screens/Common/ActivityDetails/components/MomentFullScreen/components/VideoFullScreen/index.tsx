import {Block} from '@components';
import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import PlaybackControl from '../../../PlaybackControl';

interface VideoFullScreenProps {
  media: string;
  isVisible: boolean;
  setIsVisible: any;
  opacityAnimatedValue: any;
  isOpenBottom: boolean;
}

let timer: any = null;

const VideoFullScreen = ({
  media,
  isVisible,
  setIsVisible,
  opacityAnimatedValue,
  isOpenBottom,
}: VideoFullScreenProps) => {
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const setTimer = () =>
    (timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000));

  useEffect(() => {
    clearTimeout(timer);
    opacityAnimatedValue.setValue(1);
    if (!isPaused && !isOpenBottom) {
      Animated.timing(opacityAnimatedValue, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }).start();
      setTimer();
    }
  });

  const handleToggle = () => {
    clearTimeout(timer);
    if (isPaused) {
      setIsPaused(false);
      setTimer();
    } else {
      setIsVisible(true);
      setIsPaused(true);
    }
  };

  const handleOnLoad = () => {
    setIsPaused(false);
    setIsDisabled(false);
  };

  return (
    <>
      <Video
        source={{uri: media}}
        resizeMode="cover"
        style={styles.flex}
        paused={isPaused}
        onLoad={handleOnLoad}
        repeat
      />
      <Block absolute top={0} left={0} right={0} bottom={0} justifyCenter alignCenter>
        <PlaybackControl
          isPaused={isPaused}
          onPress={handleToggle}
          isVisible={isVisible}
          opacityAnimatedValue={opacityAnimatedValue}
          isDisabled={isDisabled}
        />
      </Block>
    </>
  );
};

export default VideoFullScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
