import {Block, OnTopButton} from '@components';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Newsfeed} from './components';

const Moments = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block flex safeBottom paddingTop={top + 12} backgroundColor="secondary_background">
      <Newsfeed />
      <OnTopButton />
    </Block>
  );
};

export default Moments;
