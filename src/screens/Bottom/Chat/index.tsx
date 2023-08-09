import {Block, GiftedChat, OnTopButton} from '@components';
import {useStore} from '@hooks';
import React, {useState} from 'react';
import {Header} from './components';
import {DATA} from './data';

const Chat = () => {
  const {useSelector} = useStore();
  const {chatColor} = useSelector('general');
  const [messages, _] = useState(DATA);

  return (
    <Block flex paddingBottom={30} backgroundColor="background">
      <Header />
      <GiftedChat messages={messages} userId={2} chatColor={chatColor} />
      <OnTopButton bottomOffset={140} />
    </Block>
  );
};

export default Chat;
