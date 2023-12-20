import {IMAGES} from '@assets';
import {IReaction} from '@screens/Bottom/Home/types';

export const DATA: IReaction[] = [
  {
    id: 1,
    icon: IMAGES.sad,
    name: 'Sad',
    color: '#397BFF',
    percentage: 60,
  },
  {
    id: 2,
    icon: IMAGES.stress,
    name: 'Stress',
    color: '#29C9A0',
    percentage: 30,
  },
  {
    id: 3,
    icon: IMAGES.boring,
    name: 'Boring',
    color: '#FD5386',
    percentage: 50,
  },
  {
    id: 4,
    icon: IMAGES.fun,
    name: 'Fun',
    color: '#FE7E01',
    percentage: 25,
  },
];
