import {AppConfig, TOKEN_EXPIRED} from '@utils/constants';
import io, {type Socket} from 'socket.io-client';

export const createSocket = (token: string): Socket => {
  const socket: Socket = io(AppConfig.WS_BASE_URL, {
    path: AppConfig.WS_BASE_PATH,
    // transports: ['websocket', 'polling'], // websocket method is not working well with the api/v1. So, only fix it if availble, otherwise, use default polling method.
    transportOptions: {
      polling: {
        extraHeaders: {
          authorization: `Bearer ${token}`,
        },
      },
    },
  });

  socket.on("connect", () => {
    console.log(`Socket connected: ${ socket.id }`);
  });
  
  socket.on("disconnect", () => {
    console.log(socket.connected); // false
  });

  // Handle connection errors
  socket.on('connect_error', (error: any) => {

    console.error('Socket connection error:', error, JSON.stringify(error));

    // If server responds with 401 Unauthorized (invalid token)
    if (error.response && error.response.status === TOKEN_EXPIRED) {
      console.warn('Invalid token. Stopping socket connection.');
      socket.disconnect(); // Manually disconnect the socket
    }
  });

  return socket;
};

export default createSocket;
