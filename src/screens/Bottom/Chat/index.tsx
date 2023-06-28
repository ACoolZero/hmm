import {Block, GiftedChat} from '@components';
import {height} from '@utils/responsive';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DATA} from './data';

const Chat = () => {
  const {bottom} = useSafeAreaInsets();
  const [messages, setMessages] = useState(DATA);

  return (
    <Block height={height} marginBottom={55} paddingBottom={bottom + 30} backgroundColor="background">
      <GiftedChat messages={messages} userId={2} />
    </Block>
  );
};

export default Chat;
