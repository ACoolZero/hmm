import {ICONS} from '@assets';
import i18n from '@i18n';
import routes from '@navigation/routes';

export interface IFeedback {
  id: number;
  icon: number;
  label: string;
  route: keyof typeof routes;
}

const DATA: IFeedback[] = [
  {
    id: 1,
    icon: ICONS.FAQ,
    label: i18n.t('gadgets.FAQ/Feedback.FAQ.label'),
    route: routes.GADGETS_FAQ_SCREEN,
  },
  {
    id: 2,
    icon: ICONS.feedback,
    label: i18n.t('gadgets.FAQ/Feedback.feedback.label'),
    route: routes.FEEDBACK_SUBMIT_SCREEN,
  },
  {
    id: 3,
    icon: ICONS.data_protection,
    label: i18n.t('gadgets.FAQ/Feedback.data_protection.label'),
    route: routes.GADGETS_DATA_PROTECTION_SCREEN,
  },
  {
    id: 4,
    icon: ICONS.privacy,
    label: i18n.t('gadgets.FAQ/Feedback.privacy_agreement.label'),
    route: routes.GADGETS_PRIVACY_SCREEN,
  },
];

export default DATA;
