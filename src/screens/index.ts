import routes from '@navigation/routes';
import ForgotPasswordStep1 from './Auth/ForgotPassword/Step1';
import ForgotPasswordStep2 from './Auth/ForgotPassword/Step2';
import ForgotPasswordStep3 from './Auth/ForgotPassword/Step3';
import ForgotPasswordStep4 from './Auth/ForgotPassword/Step4';
import Login from './Auth/Login';
import RegisterStep1 from './Auth/Register/Step1';
import RegisterStep2 from './Auth/Register/Step2';
import RegisterStep3 from './Auth/Register/Step3';
import RegisterStep4 from './Auth/Register/Step4';
import RegisterStep5 from './Auth/Register/Step5';
import Chat from './Bottom/Chat';
import Feeds from './Bottom/Feeds';
import Gadgets from './Bottom/Gadgets';
import Home from './Bottom/Home';

export const auth = {
  [routes.LOGIN_SCREEN]: Login,
  [routes.REGISTER_STEP1_SCREEN]: RegisterStep1,
  [routes.REGISTER_STEP2_SCREEN]: RegisterStep2,
  [routes.REGISTER_STEP3_SCREEN]: RegisterStep3,
  [routes.REGISTER_STEP4_SCREEN]: RegisterStep4,
  [routes.REGISTER_STEP5_SCREEN]: RegisterStep5,
  [routes.FORGOT_PASSWORD_STEP1_SCREEN]: ForgotPasswordStep1,
  [routes.FORGOT_PASSWORD_STEP2_SCREEN]: ForgotPasswordStep2,
  [routes.FORGOT_PASSWORD_STEP3_SCREEN]: ForgotPasswordStep3,
  [routes.FORGOT_PASSWORD_STEP4_SCREEN]: ForgotPasswordStep4,
};

export const bottom = {
  [routes.HOME_SCREEN]: Home,
  [routes.FEEDS_SCREEN]: Feeds,
  [routes.CHAT_SCREEN]: Chat,
  [routes.GADGETS_SCREEN]: Gadgets,
};

export const common = {};
