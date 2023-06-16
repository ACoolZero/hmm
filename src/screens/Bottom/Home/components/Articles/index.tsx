import {IMAGES} from '@assets';
import {ArticleCard, Block, ListWrapper, Text} from '@components';
import React from 'react';
import Stories from '../Stories';

const DATA = [
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
  const _renderItem = ({item}: any) => <ArticleCard item={item} />;

  const _renderHeader = () => {
    return (
      <Block>
        <Stories />
        <Text size={24} marginHorizontal={16} marginVertical={24} type="bold">
          Reading list
        </Text>
      </Block>
    );
  };

  return (
    <Block flex>
      <ListWrapper
        data={DATA}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={_renderItem}
        ListHeaderComponent={_renderHeader}
      />
    </Block>
  );
};

export default Articles;
