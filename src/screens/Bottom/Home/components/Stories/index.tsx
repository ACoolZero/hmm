import {Block, ListWrapper, StoryCard} from '@components';
import {IStory} from '@screens/Bottom/Home/types';
import useHome from '@screens/Bottom/Home/useHome';
import React, {memo} from 'react';
import {ListRenderItem} from 'react-native';

const Stories: React.FC = () => {
  const {userMomentsList} = useHome();

  const _renderItem: ListRenderItem<IStory> = ({item}) => <StoryCard item={item} />;

  if (!userMomentsList?.length) return null;
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
