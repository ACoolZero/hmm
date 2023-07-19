import {IMAGES} from '@assets';
import {Block, FAB, Image, Text} from '@components';
import React from 'react';

const Discover = () => {
  return (
    <Block flex alignCenter justifyCenter backgroundColor="background">
      <Text>Discover</Text>
      <Block height={100} />
      <FAB draggable>
        <Image source={IMAGES.avatar} square={50} />
      </FAB>
    </Block>
  );
};

export default Discover;
