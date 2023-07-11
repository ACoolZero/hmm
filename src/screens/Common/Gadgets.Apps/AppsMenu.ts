import {IMAGES} from '@assets';

export interface IAppsMenu {
  id: number;
  label: string;
  icon: number;
}

const MENU: IAppsMenu[] = [
  {
    id: 1,
    label: 'Community',
    icon: IMAGES.community,
  },
  {
    id: 2,
    label: 'Exchange',
    icon: IMAGES.exchange,
  },
  {
    id: 3,
    label: 'Market',
    icon: IMAGES.market,
  },
  {
    id: 4,
    label: 'Music',
    icon: IMAGES.music,
  },
  {
    id: 5,
    label: 'Game',
    icon: IMAGES.game,
  },
  {
    id: 6,
    label: 'Shopping',
    icon: IMAGES.shopping,
  },
];

export default MENU;
