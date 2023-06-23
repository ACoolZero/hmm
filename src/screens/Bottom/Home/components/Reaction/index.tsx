import {Block, ReactionCard} from '@components';
import {IReaction} from '@screens/Bottom/Home/types';
import React, {memo} from 'react';
import {DATA} from './data';

const Reaction: React.FC = () => {
  const _renderItem = (item: IReaction) => <ReactionCard key={item.id} item={item} />;

  return (
    <Block row paddingHorizontal={16} marginBottom={24} space="between" gap={12}>
      {DATA.map(_renderItem)}
    </Block>
  );
};

export default memo(Reaction);
