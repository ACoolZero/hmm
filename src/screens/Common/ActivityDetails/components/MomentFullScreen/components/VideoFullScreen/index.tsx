import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';
import PlaybackControl from '../../../PlaybackControl';
import {Block} from '@components';

const VideoFullScreen = ({media}: any) => {
  const [isPaused, setIsPaused] = useState<boolean>(true);

  // uri for demo: https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4

  return (
    <>
      <Video
        source={{uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'}}
        resizeMode="cover"
        style={styles.video}
        paused={isPaused}
        repeat
      />
      <Block absolute top={0} left={0} right={0} bottom={0} justifyCenter alignCenter>
        <PlaybackControl isPaused={isPaused} setIsPaused={setIsPaused} />
      </Block>
    </>
  );
};

export default VideoFullScreen;

const styles = StyleSheet.create({
  video: {
    flex: 1,
  },
});
