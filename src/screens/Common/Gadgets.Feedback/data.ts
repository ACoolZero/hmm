import {ICONS} from '@assets';
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
    label: 'FAQ',
    route: routes.GADGETS_FAQ_SCREEN,
  },
  {
    id: 2,
    icon: ICONS.feedback,
    label: 'Feedback',
    route: routes.FEEDBACK_SUBMIT_SCREEN,
  },
  {
    id: 3,
    icon: ICONS.data_protection,
    label: 'Data Protection',
    route: routes.GADGETS_DATA_PROTECTION_SCREEN,
  },
  {
    id: 4,
    icon: ICONS.privacy,
    label: 'Privacy Agreement',
    route: routes.GADGETS_PRIVACY_SCREEN,
  },
];

export default DATA;
