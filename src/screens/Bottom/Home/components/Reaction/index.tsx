import {Block, Text} from '@components';
import React, {memo} from 'react';

const Reaction: React.FC = () => {
  const _renderTag = () => {
    return (
      <Block radius={12} paddingHorizontal={16} paddingVertical={12} backgroundColor="light_background">
        <Text sm>TAG</Text>
      </Block>
    );
  };

  return (
    <Block padding={16} marginBottom={12}>
      <Text type="semibold">How exactly you feel right now?</Text>
      <Block
        radius={12}
        height={64}
        marginVertical={12}
        borderWidth={1}
        borderColor="#5C7987"
        backgroundColor="light_background"
      />
      <Block row wrap gap={12}>
        {[1, 2, 3, 4].map(_renderTag)}
      </Block>
    </Block>
  );
};

export default memo(Reaction);
