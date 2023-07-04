import {IMAGES} from '@assets';
import {IReaction} from '@screens/Bottom/Home/types';

export const DATA: IReaction[] = [
  {
    id: 1,
    image: IMAGES.sad,
    label: 'Sad',
    color: '#397BFF',
    percentage: 60,
  },
  {
    id: 2,
    image: IMAGES.stress,
    label: 'Stress',
    color: '#29C9A0',
    percentage: 30,
  },
  {
    id: 3,
    image: IMAGES.boring,
    label: 'Boring',
    color: '#FD5386',
    percentage: 50,
  },
  {
    id: 4,
    image: IMAGES.fun,
    label: 'Fun',
    color: '#FE7E01',
    percentage: 25,
  },
];
