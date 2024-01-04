import {Block, ReactionCard} from '@components';
import {IReaction} from '@screens/Bottom/Home/types';
import useHome from '@screens/Bottom/Home/useHome';
import React, {memo} from 'react';

const Reaction: React.FC = () => {
  const {userMoodFrequency} = useHome();

  const _renderItem = (item: IReaction) => <ReactionCard key={item.id} item={item} />;

  return (
    <Block row paddingHorizontal={16} marginBottom={24} space="between" gap={12}>
      {userMoodFrequency?.map(_renderItem)}
    </Block>
  );
};

export default memo(Reaction);
