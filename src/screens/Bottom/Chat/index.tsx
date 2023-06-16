import {Block, Text} from '@components';
import {useStore, useTranslation} from '@hooks';
import React from 'react';

const Chat = () => {
  const {t} = useTranslation();
  const {dispatch, useSelector} = useStore();

  return (
    <Block flex backgroundColor="background">
      <Text />
    </Block>
  );
};

export default Chat;
