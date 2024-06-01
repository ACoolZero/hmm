import {AppConfig} from '@utils/constants';
import io, {type Socket} from 'socket.io-client';

export const createSocket = (token: string): Socket => {
  const socket: Socket = io(AppConfig.BASE_URL, {
    transportOptions: {
      polling: {
        extraHeaders: {
          authorization: `Bearer ${token}`,
        },
      },
    },
  });

  return socket;
};

export default createSocket;
