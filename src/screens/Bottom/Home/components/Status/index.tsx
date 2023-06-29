import {Block, Text} from '@components';
import React, {memo} from 'react';
import styles from './styles';

const Status: React.FC = () => {
  const _renderTag: React.FC<any> = item => {
    return (
      <Block key={item} radius={12} paddingHorizontal={16} paddingVertical={12} backgroundColor="secondary_background">
        <Text sm>TAG</Text>
      </Block>
    );
  };

  return (
    <Block paddingHorizontal={16} marginBottom={24} backgroundColor="background">
      <Text type="semibold">How exactly you feel right now?</Text>
      <Block shadow borderWidth={1} borderColor="border" backgroundColor="secondary_background" style={styles.input} />
      <Block row wrap gap={12}>
        {[1, 2, 3, 4].map(_renderTag)}
      </Block>
    </Block>
  );
};

export default memo(Status);
