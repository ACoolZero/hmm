import {Block} from '@components';
import React from 'react';
import {StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PostList} from './components';

const Home: React.FC = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block flex paddingTop={top + 24} backgroundColor="background">
      <StatusBar barStyle="light-content" />
      <PostList />
    </Block>
  );
};

export default Home;
