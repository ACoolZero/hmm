import {Block} from '@components';
import {useColors} from '@hooks';
import React, {useEffect} from 'react';
import {RefreshControl, ScrollView, StatusBar, StatusBarStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {EmotionChart, Milestones, PostList, Reaction, Status, Stories} from './components';
import useHome from './useHome';

const Home: React.FC = () => {
  const {top} = useSafeAreaInsets();
  const {mode, fetchData} = useHome();
  const {COLORS} = useColors();
  const barStyle: StatusBarStyle = `${mode === 'dark' ? 'dark' : 'light'}-content`;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const _onRefresh = () => {
    fetchData();
  };

  return (
    <Block flex paddingTop={top + 24} backgroundColor="background">
      <StatusBar backgroundColor={COLORS.background} barStyle={barStyle} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={false} onRefresh={_onRefresh} tintColor={COLORS.text} />}>
        <Block paddingBottom={36}>
          <Stories />
          <Reaction />
          <Status />
          <EmotionChart />
          <Milestones />
          <PostList />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default Home;
