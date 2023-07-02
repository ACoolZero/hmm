import {Block, GiftedChat} from '@components';
import React, {useState} from 'react';
import {Header} from './components';
import {DATA} from './data';

const Chat = () => {
  const [messages, setMessages] = useState(DATA);

  return (
    <Block flex paddingBottom={30} backgroundColor="background">
      <Header />
      <GiftedChat messages={messages} userId={2} />
    </Block>
  );
};

export default Chat;
