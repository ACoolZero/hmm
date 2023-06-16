import {Block, Text} from '@components';
import {useStore, useTranslation} from '@hooks';
import React from 'react';
import {StatusBar} from 'react-native';

const Feeds = () => {
  const {t} = useTranslation();
  const {dispatch, useSelector} = useStore();

  return (
    <Block flex backgroundColor="background">
      <StatusBar barStyle="light-content" />
      <Text />
    </Block>
  );
};

export default Feeds;
