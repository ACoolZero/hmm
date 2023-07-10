import {ICONS} from '@assets';
import i18n from '@i18n';

export interface IGadgetsMenu {
  id: number;
  label: string;
  icon: number;
  route: string;
}

const MENU: IGadgetsMenu[] = [
  {
    id: 1,
    label: i18n.t('gadgets.apps'),
    icon: ICONS.gadget_apps,
    route: '',
  },
  {
    id: 2,
    label: i18n.t('gadgets.mood_history'),
    icon: ICONS.gadget_mood_history,
    route: '',
  },
  {
    id: 3,
    label: i18n.t('gadgets.feedback'),
    icon: ICONS.gadget_feedback,
    route: '',
  },
  {
    id: 4,
    label: i18n.t('gadgets.customization'),
    icon: ICONS.gadget_customization,
    route: '',
  },
];

export default MENU;
