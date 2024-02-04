import {IMAGES} from '@assets';
import {IAppsMenu} from './types';
import i18n from '@i18n';

const MENU: IAppsMenu[] = [
  {
    id: 1,
    label: i18n.t('gadgets.apps.community'),
    icon: IMAGES.community,
  },
  {
    id: 2,
    label: i18n.t('gadgets.apps.exchange'),
    icon: IMAGES.exchange,
  },
  {
    id: 3,
    label: i18n.t('gadgets.apps.market'),
    icon: IMAGES.market,
  },
  {
    id: 4,
    label: i18n.t('gadgets.apps.music'),
    icon: IMAGES.music,
  },
  {
    id: 5,
    label: i18n.t('gadgets.apps.game'),
    icon: IMAGES.game,
  },
  {
    id: 6,
    label: i18n.t('gadgets.apps.shopping'),
    icon: IMAGES.shopping,
  },
];

export default MENU;
