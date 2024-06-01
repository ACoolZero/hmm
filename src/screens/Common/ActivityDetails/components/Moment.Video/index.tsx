import {ICONS} from '@assets';
import {Block, Image, Text} from '@components';
import {useStore} from '@hooks';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {getSize} from '@utils/responsive';
import dayjs from 'dayjs';
import React, {useState} from 'react';
import {DeviceEventEmitter, Pressable} from 'react-native';

interface MomentVideoProps {
  item: any;
  index: number;
  currentIndex: number | null;
  STORY_WIDTH: number;
  STORY_HEIGHT: number;
}

const MomentVideo = ({item, index, currentIndex, STORY_WIDTH, STORY_HEIGHT}: MomentVideoProps) => {
  const {useSelector} = useStore();
  const {content, createdAt, thumbnail} = item;
  const [isFullMode, setIsFullMode] = useState(false);
  const {mode: data} = useSelector('theme');
  const mode = data as keyof typeof ICONS.playback_control;

  DeviceEventEmitter.addListener('closeFullModeVideo', () => {
    setIsFullMode(false);
  });

  const handlePress = () => {
    setIsFullMode(true);
    navigate(routes.MOMENT_FULL_SCREEN, {item, STORY_WIDTH, STORY_HEIGHT});
  };

  return (
    <Block paddingVertical={24}>
      <Pressable onPress={handlePress}>
        {isFullMode && currentIndex === index ? (
          <Block width={STORY_WIDTH} height={STORY_HEIGHT} radius={24} />
        ) : (
          <>
            <Image
              source={{uri: thumbnail}}
              width={STORY_WIDTH}
              height={STORY_HEIGHT}
              style={{borderRadius: getSize.s(24)}}
            />
            <Block absolute top={12} right={12}>
              <Image source={ICONS.playback_control[mode].isPaused} round={48} />
            </Block>
          </>
        )}
      </Pressable>
      <Block padding={24}>
        <Text center size={24} marginBottom={5} numberOfLines={2} type="semibold">
          {content}
        </Text>
        <Text sm center size={24} numberOfLines={1} color="sub_text">
          {dayjs(createdAt).format('DD/MM/YYYY')}
        </Text>
      </Block>
    </Block>
  );
};

export default MomentVideo;
