import {IMAGES} from '@assets';
import {Block, ListWrapper, StoryCard} from '@components';
import {IStory} from '@screens/Bottom/Home/types';
import React, {memo} from 'react';
import {ListRenderItem} from 'react-native';

const DATA: IStory[] = [
  {id: 1, image: IMAGES.story1, title: 'Good memories'},
  {id: 2, image: IMAGES.story2, title: 'Good memories'},
  {id: 3, image: IMAGES.story1, title: 'Good memories'},
  {id: 4, image: IMAGES.story1, title: 'Good memories'},
];

const Stories: React.FC = () => {
  const _renderItem: ListRenderItem<IStory> = ({item}) => <StoryCard item={item} />;

  return (
    <Block flex marginBottom={24}>
      <ListWrapper horizontal data={DATA} keyExtractor={(item: IStory) => item.id} renderItem={_renderItem} />
    </Block>
  );
};

export default memo(Stories);
