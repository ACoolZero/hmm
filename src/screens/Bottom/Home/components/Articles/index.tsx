import {ArticleCard, Block, ListWrapper, Text} from '@components';
import {EmotionChart, Reaction, Stories} from '@screens/Bottom/Home/components';
import {IArticle} from '@screens/Bottom/Home/types';
import React, {memo} from 'react';
import {ListRenderItem} from 'react-native';
import {DATA} from './data';

const Articles: React.FC = () => {
  const _renderItem: ListRenderItem<IArticle> = ({item, index}) => <ArticleCard item={item} index={index} />;

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
    <Block flex safeBottom>
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
