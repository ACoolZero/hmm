import {Block, OnTopButton} from '@components';
import {useColors} from '@hooks';
import React from 'react';
import {StatusBar, StatusBarStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Feeling, PostList} from './components';
import useHome from './useHome';

const Home: React.FC = () => {
  const {top} = useSafeAreaInsets();
  const {mode} = useHome();
  const {COLORS} = useColors();
  const barStyle: StatusBarStyle = `${mode === 'dark' ? 'light' : 'dark'}-content`;

  return (
    <Block flex paddingTop={top + 24} backgroundColor="background">
      <StatusBar backgroundColor={COLORS.background} barStyle={barStyle} />
      <PostList />
      <Feeling />
      <OnTopButton />
    </Block>
  );
};

export default Home;
