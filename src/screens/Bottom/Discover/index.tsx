import {Block, OnTopButton, Text} from '@components';
import React from 'react';

const Discover = () => {
  return (
    <Block flex alignCenter justifyCenter backgroundColor="background">
      <Text>Discover</Text>
      <Block height={100} />
      <OnTopButton />
    </Block>
  );
};

export default Discover;
