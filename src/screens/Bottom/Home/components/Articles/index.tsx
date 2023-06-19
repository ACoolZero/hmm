import {IMAGES} from '@assets';
import {ArticleCard, Block, ListWrapper, Text} from '@components';
import {EmotionChart, Reaction, Stories} from '@screens/Bottom/Home/components';
import {IArticle} from '@screens/Bottom/Home/types';
import React, {memo} from 'react';
import {ListRenderItem} from 'react-native';

const DATA: IArticle[] = [
  {
    id: 1,
    image: IMAGES.article1,
    title: 'Weekly Article',
    short: 'Allow users to create an account or sign in with an existing account to securely store their...',
    views_count: 64,
    rating: 4,
  },
  {
    id: 2,
    image: IMAGES.article1,
    title: 'Weekly Article',
    short: 'Allow users to create an account or sign in with an existing account to securely store their...',
    views_count: 64,
    rating: 3,
  },
  {
    id: 3,
    image: IMAGES.article1,
    title: 'Weekly Article',
    short: 'Allow users to create an account or sign in with an existing account to securely store their...',
    views_count: 64,
    rating: 4,
  },
  {
    id: 4,
    image: IMAGES.article1,
    title: 'Weekly Article',
    short: 'Allow users to create an account or sign in with an existing account to securely store their...',
    views_count: 64,
    rating: 4,
  },
];

const Articles: React.FC = () => {
  const _renderItem: ListRenderItem<IArticle> = ({item}) => <ArticleCard item={item} />;

  const _renderHeader = () => {
    return (
      <Block>
        <Stories />
        <Reaction />
        <EmotionChart />
        <Text size={24} marginHorizontal={16} marginBottom={24} type="bold">
          Reading list
        </Text>
      </Block>
    );
  };

  return (
    <Block flex>
      <ListWrapper
        data={DATA}
        keyExtractor={(item: IArticle) => String(item.id)}
        renderItem={_renderItem}
        ListHeaderComponent={_renderHeader}
      />
    </Block>
  );
};

export default memo(Articles);
