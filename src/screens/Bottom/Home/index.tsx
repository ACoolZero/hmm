import {Block} from '@components';
import {useStore} from '@hooks';
import React from 'react';
import {StatusBar, StatusBarStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PostList} from './components';

const Home: React.FC = () => {
  const {useSelector} = useStore();
  const {top} = useSafeAreaInsets();
  const {mode} = useSelector('theme');
  const barStyle: StatusBarStyle = `${mode === 'dark' ? 'light' : 'dark'}-content`;

  return (
    <Block flex paddingTop={top + 24} backgroundColor="background">
      <StatusBar barStyle={barStyle} />
      <PostList />
    </Block>
  );
};

export default Home;
