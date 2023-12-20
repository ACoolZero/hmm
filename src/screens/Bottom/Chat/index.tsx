import {Block, GiftedChat, OnTopButton, Text} from '@components';
import {useStore} from '@hooks';
import {isDeveloping} from '@utils/helper';
import React, {useState} from 'react';
import {Header} from './components';
import {DATA} from './data';

const Chat = () => {
  const {useSelector} = useStore();
  const {chatColor} = useSelector('general');
  const [messages, _] = useState(DATA);

  if (isDeveloping) {
    return (
      <Block flex alignCenter justifyCenter backgroundColor="background">
        <Text>Coming soon</Text>
      </Block>
    );
  }
  return (
    <Block flex paddingBottom={30} backgroundColor="background">
      <Header />
      <GiftedChat messages={messages} userId={2} chatColor={chatColor} />
      <OnTopButton bottomOffset={140} />
    </Block>
  );
};

export default Chat;
