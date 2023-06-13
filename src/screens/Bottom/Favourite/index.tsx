import {Block, Text} from '@components';
import {useStore, useTranslation} from '@hooks';
import {COLORS} from '@theme';
import React from 'react';
import {StatusBar} from 'react-native';

const Favourite = () => {
  const {t} = useTranslation();
  const {dispatch, useSelector} = useStore();

  return (
    <Block flex backgroundColor="#22343C">
      <StatusBar backgroundColor={COLORS.black} barStyle="light-content" />
      <Text />
    </Block>
  );
};

export default Favourite;
