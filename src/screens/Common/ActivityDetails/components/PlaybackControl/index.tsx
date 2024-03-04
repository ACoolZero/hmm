import {ICONS} from '@assets';
import {Image} from '@components';
import {useStore} from '@hooks';
import {width} from '@utils/responsive';
import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';

interface PlayBackControlProps {
  isPaused: boolean;
  onPress: any;
  isVisible: boolean;
  opacityAnimatedValue: any;
  isDisabled: boolean;
}

const PlaybackControl = ({isPaused, onPress, isVisible, opacityAnimatedValue, isDisabled}: PlayBackControlProps) => {
  const {useSelector} = useStore();
  const {mode: data} = useSelector('theme');
  const mode = data as keyof typeof ICONS.playback_control;

  return (
    <Animated.View style={styles.animatedOpacity(opacityAnimatedValue)}>
      <TouchableOpacity onPress={onPress} disabled={isDisabled} hitSlop={width / 2.5}>
        {isVisible && (
          <>
            {isPaused && <Image source={ICONS.playback_control[mode].isPaused} square={128} />}
            {!isPaused && <Image source={ICONS.playback_control[mode].isPlaying} square={128} />}
          </>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default PlaybackControl;

const styles = {
  animatedOpacity: (animatedValue: any) => ({
    opacity: animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1],
    }),
  }),
};
