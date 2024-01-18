import {ICONS} from '@assets';
export const DATA = [
  {
    _id: 1,
    text: 'I am so sorry about that',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'sender',
      avatar: ICONS.bot,
    },
  },
  {
    _id: 2,
    text: 'I didnt tell my family',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'receiver',
      avatar: 'https://reactnative.dev/img/tiny_logo.png',
    },
  },
  {
    _id: 3,
    text: 'I got a bad grade in my favorite subject',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'receiver',
      avatar: 'https://reactnative.dev/img/tiny_logo.png',
    },
  },
  {
    _id: 4,
    text: 'I feel very sad today',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'receiver',
      avatar: 'https://reactnative.dev/img/tiny_logo.png',
    },
  },
  {
    _id: 5,
    text: 'What can I do for you?',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'sender',
      avatar: ICONS.bot,
    },
  },
  {
    _id: 6,
    text: 'How are you today?',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'sender',
      avatar: ICONS.bot,
    },
  },
];
