import {Block, LazyImage, Text} from '@components';
import {navigate} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {IStory} from '@screens/Bottom/Home/types';
import {getSize} from '@utils/responsive';
import React, {memo} from 'react';
import {Pressable} from 'react-native';
import styles, {STORY_HEIGHT, STORY_WIDTH} from './styles';

interface StoryCardProps {
  item: IStory;
  index: number;
}

const StoryCard: React.FC<StoryCardProps> = ({item, index}) => {
  const {thumbnail, media, content} = item;

  return (
    <Pressable
      onPress={() => {
        navigate(routes.RECALL_SCREEN, {momentIdx: index});
      }}>
      <Block shadow overflow="hidden" radius={20} style={styles.container} backgroundColor="secondary_background">
        <LazyImage
          thumbnail={thumbnail}
          source={media}
          style={{height: STORY_HEIGHT, width: STORY_WIDTH, borderRadius: getSize.s(20)}}
        />
        <Block flex radius={20} backgroundColor="#0000002f">
          <Block padding={16} absolute bottom={0}>
            <Text type="medium" color="white" numberOfLines={2}>
              {content}
            </Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default memo(StoryCard);
