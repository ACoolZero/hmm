import {Block, GiftedChat, Text} from '@components';
import {useColors, useStore} from '@hooks';
import React, {useEffect, useState} from 'react';
import {GET_MESSAGES} from './action';
import {Header} from './components';
import useChatRoom from './useChatRoom';
import { AppConfig } from '@utils/constants';


interface User {
  _id: string;
  name: string;
  avatar: string;
}

interface Message {
  _id: string;
  text: string;
  createdAt: Date | string;
  user: User;
  system?: boolean,

}

const Chat = () => {
  const {dispatch, useSelector} = useStore();
  const {userInfo} = useSelector('auth');
  const {chatColor} = useSelector('general');
  const {COLORS} = useColors();
  const {isTyping, messages, total, _onSend} = useChatRoom();
  const [page, setPage] = useState(1);
  const [initMessages, setInitMessages] = useState<Message[]>([]);


  useEffect(() => {
  //   setInitMessages([
  //   {"_id": "664dc292de76f04049709a08", "createdAt": "2024-05-22T10:01:54.383Z", "text": "Hello Chris, it's great to meet you. How are you doing today? Is there anything specific that you would like to talk about or any concerns on your mind that you would like to address?", "user": {"_id": "650c0fcc-b913-11ee-a506-0242ac120002", "avatar": "https://i.imgur.com/3Gv7J0U.png", "name": "BOT"}}, 
  //   {"_id": "664dc290de76f040497099f3", "createdAt": "2024-05-22T10:01:52.596Z", "text": "Hi, it afternoon now. What your name?", "user": {"_id": "1b1a8d14-042e-47fb-8964-ffe008221e3e", "avatar": "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/avatar-dep-5.jpg.webp", "name": "Cuong test"}}, 
  //   {"_id": "664db2a6de76f04049709000", "createdAt": "2024-05-22T08:53:58.718Z", "text": "Hello Chris, it's great to meet you. How are you doing today? Is there anything specific that you would like to talk about or any concerns on your mind that you would like to address?", "user": {"_id": "650c0fcc-b913-11ee-a506-0242ac120002", "avatar": "https://i.imgur.com/3Gv7J0U.png", "name": "BOT"}}, 
  //   {"_id": "664db2a5de76f04049708feb", "createdAt": "2024-05-22T08:53:57.666Z", "text": "Hi again", "user": {"_id": "1b1a8d14-042e-47fb-8964-ffe008221e3e", "avatar": "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/avatar-dep-5.jpg.webp", "name": "Cuong test"}}, 
  //   {"_id": "664da944de76f04049708dce", "createdAt": "2024-05-22T08:13:56.987Z", "text": "It's great to hear that you are feeling positive about life, Chris. What is it about this life that you love? Is there anything in particular that stands out to you?", "user": {"_id": "650c0fcc-b913-11ee-a506-0242ac120002", "avatar": "https://i.imgur.com/3Gv7J0U.png", "name": "BOT"}}, 
  //   {"_id": "664da943de76f04049708db9", "createdAt": "2024-05-22T08:13:55.427Z", "text": "I want to say that I love this life", "user": {"_id": "1b1a8d14-042e-47fb-8964-ffe008221e3e", "avatar": "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/avatar-dep-5.jpg.webp", "name": "Cuong test"}}, 
  //   {"_id": "664da91cde76f04049708dae", "createdAt": "2024-05-22T08:13:16.863Z", "text": "Hello Chris, it's great to meet you. How are you doing today? Is there anything specific that you would like to talk about or any concerns on your mind that you would like to address?", "user": {"_id": "650c0fcc-b913-11ee-a506-0242ac120002", "avatar": "https://i.imgur.com/3Gv7J0U.png", "name": "BOT"}}, 
  //   {"_id": "664da91bde76f04049708d99", "createdAt": "2024-05-22T08:13:15.178Z", "text": "Hi, My name is Chris", "user": {"_id": "1b1a8d14-042e-47fb-8964-ffe008221e3e", "avatar": "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/avatar-dep-5.jpg.webp", "name": "Cuong test"}}
  // ]);
    // 2024-05-22T05:34:54.521Z Date - string error
    
    // Note: This is sample message to know that there's an issue working with Socket.io server. The server has another initMessages.
    setInitMessages([       // In reversed
      {
        _id: '2',
        text: "Hi. Nice to meet you 🤗",
        createdAt: new Date(),
        user: {
          _id: userInfo.id,
          name: 'Me',
          avatar: `${AppConfig.BASE_URL}/file/image/common/default-profile-image.png`,
        },
      },
      {
        _id: '1',
        text: "Hi there 🤗",
        createdAt: new Date(),
        user: {
          _id: '1',
          name: 'BOT',
          avatar: `${AppConfig.BASE_URL}/file/image/common/bot.png`,
        },
      },
      {
        _id: '0',
        text: "🤗 Let's chat! 🤗",
        createdAt: new Date(),
        system: true,
        user: {
          _id: '0',
          name: 'Welcome',
          avatar: `${AppConfig.BASE_URL}/file/image/common/bot.png`,
        }
      },
    ])
    dispatch({type: GET_MESSAGES, payload: {page}});
  }, [dispatch, page]);

  const _onLoadEarlier = () => setPage(page + 1);

  const _renderFooter = () =>
    isTyping && (
      <Block paddingHorizontal={10} marginBottom={5}>
        <Text sm color={COLORS.sub_text}>
          BOT is typing ...
        </Text>
      </Block>
    );

    if (__DEV__ && AppConfig.DEBUG_LOGGING_ENABLED) {
      // console.log('initMessage:', initMessages);
      console.debug('Messages in Bottom/Chat:', messages);
      console.debug("Messages length: ", messages?.length);
    }

  if ( messages && messages.length > 0 ) {
    return (
      <Block flex backgroundColor="background">
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
  } else {
    console.log("[Bottom/Chat] Error rendering return messages or no chat message, returned sample chat");
    return (
      <Block flex backgroundColor="background">
        <Header />
        <GiftedChat
          loadEarlier={initMessages?.length < total}
          messages={initMessages}
          userId={userInfo.id}
          chatColor={chatColor}
          onSend={_onSend}
          onLoadEarlier={_onLoadEarlier}
          renderFooter={_renderFooter}
        />
      </Block>
    );
  }
};

export default Chat;
