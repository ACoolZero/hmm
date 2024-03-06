import {Block, Image, Text} from '@components';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {getSize} from '@utils/responsive';
import dayjs from 'dayjs';
import React, {useState} from 'react';
import {Pressable} from 'react-native';

interface MomentImageProps {
  item: any;
  index: number;
  currentIndex: number | null;
  STORY_WIDTH: number;
  STORY_HEIGHT: number;
}

const MomentImage = ({item, index, currentIndex, STORY_WIDTH, STORY_HEIGHT}: MomentImageProps) => {
  const {media, content, createdAt} = item;
  const [isFullMode, setIsFullMode] = useState(false);
  const handlePress = () => {
    setIsFullMode(true);
    navigate(routes.MOMENT_FULL_SCREEN, {item, STORY_WIDTH, STORY_HEIGHT, setIsFullMode});
  };

  return (
    <Block paddingVertical={24}>
      <Pressable onPress={handlePress}>
        {isFullMode && currentIndex === index ? (
          <Block width={STORY_WIDTH} height={STORY_HEIGHT} radius={24} />
        ) : (
          <Image
            source={{uri: media}}
            width={STORY_WIDTH}
            height={STORY_HEIGHT}
            style={{borderRadius: getSize.s(24)}}
          />
        )}
      </Pressable>
      <Block padding={24}>
        <Text center size={24} marginBottom={5} numberOfLines={2} type="semibold">
          {content}
        </Text>
        <Text sm center size={24} numberOfLines={1} color="light_text">
          {dayjs(createdAt).format('DD/MM/YYYY')}
        </Text>
      </Block>
    </Block>
  );
};

export default MomentImage;
