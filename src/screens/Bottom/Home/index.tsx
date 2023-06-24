import {Block} from '@components';
import {useColors, useStore} from '@hooks';
import React from 'react';
import {StatusBar, StatusBarStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Feeling, PostList} from './components';

const Home: React.FC = () => {
  const {useSelector} = useStore();
  const {top} = useSafeAreaInsets();
  const {mode} = useSelector('theme');
  const {COLORS} = useColors();
  const barStyle: StatusBarStyle = `${mode === 'dark' ? 'light' : 'dark'}-content`;

  return (
    <Block flex paddingTop={top + 24} backgroundColor="background">
      <StatusBar backgroundColor={COLORS.background} barStyle={barStyle} />
      <PostList />
      <Feeling />
    </Block>
  );
};

export default Home;
