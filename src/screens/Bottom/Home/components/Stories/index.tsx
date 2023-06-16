import {IMAGES} from '@assets';
import {Block, ListWrapper, StoryCard} from '@components';
import React from 'react';

const DATA = [
  {id: 1, image: IMAGES.story1, title: 'Good memories'},
  {id: 2, image: IMAGES.story2, title: 'Good memories'},
  {id: 3, image: IMAGES.story1, title: 'Good memories'},
  {id: 4, image: IMAGES.story1, title: 'Good memories'},
];

const Stories: React.FC = () => {
  const _renderItem = ({item}: any) => <StoryCard item={item} />;

  return (
    <Block flex>
      <ListWrapper horizontal data={DATA} keyExtractor={(item: any) => String(item.id)} renderItem={_renderItem} />
    </Block>
  );
};

export default Stories;
