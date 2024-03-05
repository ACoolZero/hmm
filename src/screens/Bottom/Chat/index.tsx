import {Block, GiftedChat, Text} from '@components';
import {useColors, useStore} from '@hooks';
import React from 'react';
import {Header} from './components';
import useChatRoom from './useChatRoom';

const Chat = () => {
  const {useSelector} = useStore();
  const {userInfo} = useSelector('auth');
  const {chatColor} = useSelector('general');
  const {COLORS} = useColors();
  const {isTyping, messages, _onSend} = useChatRoom();

  const _renderFooter = () =>
    isTyping && (
      <Block paddingHorizontal={10} marginBottom={5}>
        <Text sm color={COLORS.light_text}>
          BOT is typing ...
        </Text>
      </Block>
    );

  return (
    <Block flex paddingBottom={30} backgroundColor="background">
      <Header />
      <GiftedChat
        messages={messages}
        userId={userInfo.id}
        chatColor={chatColor}
        onSend={_onSend}
        renderFooter={_renderFooter}
      />
    </Block>
  );
};

export default Chat;
