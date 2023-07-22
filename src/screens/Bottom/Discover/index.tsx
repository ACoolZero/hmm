import {Block, OnTopButton, Text} from '@components';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Category, Newsfeed} from './components';

const Discover = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block flex safeBottom paddingTop={top + 16} backgroundColor="background">
      <Text size={42} marginHorizontal={16} type="semibold">
        Discover
      </Text>
      <Category />
      <Newsfeed />
      <OnTopButton />
    </Block>
  );
};

export default Discover;
