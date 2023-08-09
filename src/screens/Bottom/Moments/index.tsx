import {Block, OnTopButton, Text} from '@components';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Category, Newsfeed} from './components';

const Moments = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block flex safeBottom paddingTop={top + 16} backgroundColor="secondary_background">
      <Text size={36} marginHorizontal={16} type="semibold">
        Moments
      </Text>
      <Category />
      <Newsfeed />
      <OnTopButton />
    </Block>
  );
};

export default Moments;
