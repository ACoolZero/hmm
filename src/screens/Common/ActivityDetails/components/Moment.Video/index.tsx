import {Block, Text} from '@components';
import React, {createRef, useState} from 'react';
import {getSize} from '@utils/responsive';
import Video from 'react-native-video';
import {Pressable, StyleSheet} from 'react-native';
import PlaybackControl from '../PlaybackControl';
import dayjs from 'dayjs';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';

interface MomentVideoProps {
  item: any;
  index: number;
  currentIndex: number | null;
  STORY_WIDTH: number;
  STORY_HEIGHT: number;
}

// uri for demo: https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4

const MomentVideo = ({item, index, currentIndex, STORY_WIDTH, STORY_HEIGHT}: MomentVideoProps) => {
  const {media, content, createdAt} = item;
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [isFullMode, setIsFullMode] = useState(false);
  const VideoRef = createRef<any>();
  const handlePress = () => {
    setIsFullMode(true);
    navigate(routes.MOMENT_FULL_SCREEN, {item, STORY_WIDTH, STORY_HEIGHT, setIsFullMode});
  };

  return (
    <Block paddingVertical={24}>
      <Pressable onPress={handlePress}>
        {isFullMode && currentIndex === index ? (
          <Block width={STORY_WIDTH} height={STORY_HEIGHT} radius={24} />
        ) : currentIndex === index ? (
          <Block width={STORY_WIDTH} height={STORY_HEIGHT}>
            <Video
              ref={VideoRef}
              source={{uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'}}
              resizeMode="cover"
              repeat
              style={styles.video}
              paused={isPaused}
            />
            <Block absolute top={0} left={0} right={0} bottom={0} justifyCenter alignCenter>
              <PlaybackControl isPaused={isPaused} setIsPaused={setIsPaused} />
            </Block>
          </Block>
        ) : (
          // TODO: get thumbnail
          <Block width={STORY_WIDTH} height={STORY_HEIGHT} radius={24} backgroundColor="placeholder" />
        )}
      </Pressable>
      <Block padding={24}>
        <Text center size={24} marginBottom={5} numberOfLines={2} type="semibold">
          {content || 'Placeholder Text'}
        </Text>
        <Text sm center size={24} numberOfLines={1} color="light_text">
          {dayjs(createdAt).format('DD/MM/YYYY')}
        </Text>
      </Block>
    </Block>
  );
};

export default MomentVideo;

const styles = StyleSheet.create({
  video: {
    flex: 1,
    borderRadius: getSize.s(24),
  },
});
