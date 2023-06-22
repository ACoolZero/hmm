import {IArticle} from '@screens/Bottom/Home/types';
import routes from './routes';

export type RootStackParamList = {
  [routes.BOTTOM_TAB]: undefined;
  [routes.LOGIN_SCREEN]: undefined;
  [routes.REGISTER_STEP1_SCREEN]: undefined;
  [routes.REGISTER_STEP2_SCREEN]: undefined;
  [routes.REGISTER_STEP3_SCREEN]: undefined;
  [routes.REGISTER_STEP4_SCREEN]: undefined;
  [routes.REGISTER_STEP5_SCREEN]: undefined;
  [routes.FORGOT_PASSWORD_STEP1_SCREEN]: undefined;
  [routes.FORGOT_PASSWORD_STEP2_SCREEN]: undefined;
  [routes.FORGOT_PASSWORD_STEP3_SCREEN]: undefined;
  [routes.FORGOT_PASSWORD_STEP4_SCREEN]: undefined;
  [routes.ARTICLE_DETAILS_SCREEN]: {details: IArticle};
  [routes.MILESTONE_DETAILS_SCREEN]: undefined;
};
