import {ICONS} from '@assets';
import i18n from '@i18n';
import routes from '@navigation/routes';

export interface IGadgetsMenu {
  id: number;
  label: string;
  icon: number;
  route: keyof typeof routes;
}

const MENU: IGadgetsMenu[] = [
  {
    id: 1,
    label: i18n.t('gadgets.apps'),
    icon: ICONS.gadget_apps,
    route: routes.GADGETS_APPS_SCREEN,
  },
  {
    id: 2,
    label: i18n.t('gadgets.mood_history'),
    icon: ICONS.gadget_mood_history,
    route: routes.GADGETS_MOOD_HISTORY_SCREEN,
  },
  {
    id: 3,
    label: i18n.t('gadgets.feedback'),
    icon: ICONS.gadget_feedback,
    route: routes.GADGETS_FEEDBACK_SCREEN,
  },
  {
    id: 4,
    label: i18n.t('gadgets.customization'),
    icon: ICONS.gadget_customization,
    route: routes.GADGETS_CUSTOMIZATION_SCREEN,
  },
];

export default MENU;
