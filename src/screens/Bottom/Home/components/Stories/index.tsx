import {ICONS} from '@assets';
import {Block, Image, ListWrapper, StoryCard} from '@components';
import {IStory} from '@screens/Bottom/Home/types';
import useHome from '@screens/Bottom/Home/useHome';
import {width} from '@utils/responsive';
import React, {memo} from 'react';
import {ListRenderItem} from 'react-native';

const STORY_WIDTH = width * 0.35;
const STORY_HEIGHT = STORY_WIDTH * 1.4;

const Stories: React.FC = () => {
  const {userMomentsList} = useHome();

  const _renderItem: ListRenderItem<IStory> = ({item}) => <StoryCard item={item} />;

  if (!userMomentsList?.length)
    return (
      <Block height={STORY_HEIGHT} marginBottom={36} paddingLeft={16}>
        <Block
          alignCenter
          justifyCenter
          radius={20}
          height={STORY_HEIGHT}
          width={STORY_WIDTH}
          backgroundColor="secondary_background">
          <Image source={ICONS.image_holder} square={16} tintColor="#D1D5DB" />
        </Block>
      </Block>
    );
  return (
    <Block flex marginBottom={24}>
      <ListWrapper
        horizontal
        data={userMomentsList?.slice(0, 6)}
        keyExtractor={(item: IStory) => String(item.id)}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default memo(Stories);
