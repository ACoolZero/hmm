import {Block} from '@components';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PostList} from './components';

const Home: React.FC = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block flex paddingTop={top + 24} backgroundColor="background">
      <PostList />
    </Block>
  );
};

export default Home;
