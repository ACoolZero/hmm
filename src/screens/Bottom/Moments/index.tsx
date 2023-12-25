import {Block} from '@components';
import React, {useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Newsfeed} from './components';
import useMoments from './useMoments';

const Moments = () => {
  const {top} = useSafeAreaInsets();
  const {fetchData} = useMoments();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Block flex safeBottom paddingTop={top + 12} backgroundColor="secondary_background">
      <Newsfeed />
    </Block>
  );
};

export default Moments;
