import {ICONS} from '@assets';
import {Block, Image} from '@components';
import {useStore} from '@hooks';
import React from 'react';
import {TouchableOpacity} from 'react-native';

interface PlayBackControlProps {
  isPaused: boolean;
  setIsPaused: any;
}

const PlaybackControl = ({isPaused, setIsPaused}: PlayBackControlProps) => {
  const {useSelector} = useStore();
  const {mode: data} = useSelector('theme');
  const mode = data as keyof typeof ICONS.playback_control;

  return (
    <Block>
      <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
        {isPaused && <Image source={ICONS.playback_control[mode].isPaused} square={128} />}
        {!isPaused && <Image source={ICONS.playback_control[mode].isPlaying} square={128} />}
      </TouchableOpacity>
    </Block>
  );
};

export default PlaybackControl;
