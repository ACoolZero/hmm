import createSocket from '@services/socket';
import store from '@store';
import * as actions from '@store/actions';
import {guard} from '@store/general/saga';
import {ActionPayload} from '@store/general/types';
import {AppConfig, ITEM_LIMIT_PER_PAGE} from '@utils/constants';
import {call, put, select, takeLatest, takeLeading} from 'redux-saga/effects';
import {Socket} from 'socket.io-client';
import {IMessage} from './types';

function* connectSocket() {
  const {accessToken} = yield select(state => state.auth);
  const socketInstance: Socket = yield call(() => createSocket(accessToken));

  if (socketInstance) {
    yield put({type: actions.SOCKET_INSTANCE, payload: {instance: socketInstance}});

    /**
     * Server received message from user
     */
    socketInstance.on('SERVER_RECEIVED_USER', () => {
      console.log('SERVER_RECEIVED_USER event received');
    });

    /**
     * Bot Typing
     */
    socketInstance.on('BOT_TYPING', response => {
      console.log('BOT_TYPING event received');
      store.dispatch({type: actions.TYPING_LISTENING, payload: {data: response.data.typing}});
    });

    /**
     * Message response from bot
     */
    socketInstance.on('MESSAGE_BOT', response => {
      console.log('MESSAGE_BOT event received');
      const {_id, content, senderId, senderAvatar, senderName, createdAt} = response.data;
      store.dispatch({
        type: actions.NEW_MESSAGES_COMING,
        payload: {
          msg: [
            Object.assign(
              {},
              {
                _id,
                text: content,
                createdAt: createdAt,
                user: {_id: senderId, avatar: senderAvatar, name: senderName},
              },
            ),
          ],
        },
      });
    });

    /**
     * Get list message paging response
     */
    socketInstance.on('USER_GET_MESSAGES_PAGING_RESPONSE', response => {
      console.log('USER_GET_MESSAGES_PAGING_RESPONSE event received');//, JSON.stringify(response));
      store.dispatch({
        type: actions._onSuccess(actions.GET_MESSAGES),
        payload: {
          total: response.data.total,
          data: response.data.messages.map((item: IMessage) =>
            Object.assign(
              {},
              {
                _id: item._id,
                text: item.content,
                createdAt: item.createdAt,
                user: {
                  _id: item.senderId,
                  avatar: item.senderAvatar,
                  name: item.senderName,
                },
              },
            ),
          ),
        },
      });
    });
  }
  else {
    console.error("Socket could not be initialized.");
  }
}

function* getMessages(action: ActionPayload<{page: string}>) {
  if (__DEV__ && AppConfig.DEBUG_LOGGING_ENABLED) {
    console.debug('Getting messages...');
  }
  const {page} = action.payload;
  const socket: Socket = yield select(state => state.socket.instance);
  yield socket.emit('USER_GET_MESSAGES_PAGING', {limit: ITEM_LIMIT_PER_PAGE, page});
}

function* sendMessage(action: ActionPayload<{message: string; channel: string}>) {
  if (__DEV__ && AppConfig.DEBUG_LOGGING_ENABLED) {
    console.debug('Sending message...');
  }
  const {message, channel} = action.payload;
  const socket: Socket = yield select(state => state.socket.instance);
  yield socket.emit('MESSAGE_USER', {message, channel});
}

export default [
  takeLeading(actions.SOCKET_CONNECT, guard(connectSocket)),
  takeLeading(actions.SEND_MESSAGE, guard(sendMessage)),
  takeLeading(actions.GET_MESSAGES, guard(getMessages)),
];
