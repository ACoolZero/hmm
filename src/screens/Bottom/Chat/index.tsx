import {Block, GiftedChat, Text} from '@components';
import {useColors, useStore} from '@hooks';
import React, {useEffect, useState} from 'react';
import {GET_MESSAGES} from './action';
import {Header} from './components';
import useChatRoom from './useChatRoom';

const Chat = () => {
  const {dispatch, useSelector} = useStore();
  const {userInfo} = useSelector('auth');
  const {chatColor} = useSelector('general');
  const {COLORS} = useColors();
  const {isTyping, messages, total, _onSend} = useChatRoom();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({type: GET_MESSAGES, payload: {page}});
  }, [dispatch, page]);

  const _onLoadEarlier = () => setPage(page + 1);

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
        loadEarlier={messages?.length < total}
        messages={messages}
        userId={userInfo.id}
        chatColor={chatColor}
        onSend={_onSend}
        onLoadEarlier={_onLoadEarlier}
        renderFooter={_renderFooter}
      />
    </Block>
  );
};

export default Chat;
