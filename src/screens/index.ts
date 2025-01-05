import routes from '@navigation/routes';
import ForgotPasswordStep1 from './Auth/ForgotPassword/Step1';
import ForgotPasswordStep2 from './Auth/ForgotPassword/Step2';
import ForgotPasswordStep3 from './Auth/ForgotPassword/Step3';
import ForgotPasswordStep4 from './Auth/ForgotPassword/Step4';
import LoginIssueStep1 from './Auth/LoginIssue/Step1';
import LoginIssueStep2 from './Auth/LoginIssue/Step2';
import LoginIssueStep3 from './Auth/LoginIssue/Step3';
import LoginIssueStep4 from './Auth/LoginIssue/Step4';
import Login from './Auth/Login';
import LoginVerifyStep from './Auth/Login/components/LoginForm/VerifyStep';
import RegisterStep1 from './Auth/Register/Step1';
import RegisterStep2 from './Auth/Register/Step2';
import RegisterStep3 from './Auth/Register/Step3';
import RegisterStep4 from './Auth/Register/Step4';
import RegisterStep5 from './Auth/Register/Step5';
import Chat from './Bottom/Chat';
import Gadgets from './Bottom/Gadgets';
import Home from './Bottom/Home';
import Moments from './Bottom/Moments';
import ActivityDetails from './Common/ActivityDetails';
import ArticleDetails from './Common/ArticleDetails';
import ArticleViewed from './Common/ArticleViewed';
import EditProfile from './Common/EditProfile';
import FeedbackSubmitForm from './Common/Feedback.SubmitForm';
import Apps from './Common/Gadgets.Apps';
import Customization from './Common/Gadgets.Customization';
import DataProtection from './Common/Gadgets.DataProtection';
import FAQ from './Common/Gadgets.FAQ';
import Feedback from './Common/Gadgets.Feedback';
import MoodHistory from './Common/Gadgets.MoodHistory';
import Privacy from './Common/Gadgets.Privacy';
import MilestoneDetails from './Common/Home.MilestoneDetails';
import CreateMilestone from './Common/Milestone/CreateScreen';
import EditScreen from './Common/Milestone/EditScreen';
import CreateMoment from './Common/Moments/CreateScreen';
import MomentDetails from './Common/Moments/DetailsScreen';
import EditMoment from './Common/Moments/EditScreen';
import Recall from './Common/Recall';
import Suggest from './Common/Suggest';
import MomentFullScreen from './Common/ActivityDetails/components/MomentFullScreen';

export const auth = {
  [routes.LOGIN_SCREEN]: Login,
  [routes.LOGIN_VERIFY_SCREEN]: LoginVerifyStep,
  [routes.REGISTER_STEP1_SCREEN]: RegisterStep1,
  [routes.REGISTER_STEP2_SCREEN]: RegisterStep2,
  [routes.REGISTER_STEP3_SCREEN]: RegisterStep3,
  [routes.REGISTER_STEP4_SCREEN]: RegisterStep4,
  [routes.REGISTER_STEP5_SCREEN]: RegisterStep5,
  [routes.FORGOT_PASSWORD_STEP1_SCREEN]: ForgotPasswordStep1,
  [routes.FORGOT_PASSWORD_STEP2_SCREEN]: ForgotPasswordStep2,
  [routes.FORGOT_PASSWORD_STEP3_SCREEN]: ForgotPasswordStep3,
  [routes.FORGOT_PASSWORD_STEP4_SCREEN]: ForgotPasswordStep4,
  [routes.LOGIN_ISSUE_STEP1_SCREEN]: LoginIssueStep1,
  [routes.LOGIN_ISSUE_STEP2_SCREEN]: LoginIssueStep2,
  [routes.LOGIN_ISSUE_STEP3_SCREEN]: LoginIssueStep3,
  [routes.LOGIN_ISSUE_STEP4_SCREEN]: LoginIssueStep4,
};

export const bottom = {
  [routes.HOME_SCREEN]: Home,
  [routes.MOMENTS_SCREEN]: Moments,
  [routes.CHAT_SCREEN]: Chat,
  [routes.GADGETS_SCREEN]: Gadgets,
};

export const common = {
  [routes.ARTICLE_VIEWED_SCREEN]: ArticleViewed,
  [routes.ARTICLE_DETAILS_SCREEN]: ArticleDetails,
  [routes.MILESTONE_DETAILS_SCREEN]: MilestoneDetails,
  [routes.EDIT_PROFILE_SCREEN]: EditProfile,
  [routes.GADGETS_APPS_SCREEN]: Apps,
  [routes.GADGETS_MOOD_HISTORY_SCREEN]: MoodHistory,
  [routes.GADGETS_FEEDBACK_SCREEN]: Feedback,
  [routes.GADGETS_CUSTOMIZATION_SCREEN]: Customization,
  [routes.CREATE_MILESTONE_SCREEN]: CreateMilestone,
  [routes.EDIT_MILESTONE_SCREEN]: EditScreen,
  [routes.SUGGEST_SCREEN]: Suggest,
  [routes.GADGETS_FAQ_SCREEN]: FAQ,
  [routes.GADGETS_PRIVACY_SCREEN]: Privacy,
  [routes.GADGETS_DATA_PROTECTION_SCREEN]: DataProtection,
  [routes.FEEDBACK_SUBMIT_SCREEN]: FeedbackSubmitForm,
  [routes.CREATE_MOMENT_SCREEN]: CreateMoment,
  [routes.EDIT_MOMENT_SCREEN]: EditMoment,
  [routes.RECALL_SCREEN]: Recall,
  [routes.ACTIVITY_DETAILS_SCREEN]: ActivityDetails,
  [routes.MOMENT_DETAILS_SCREEN]: MomentDetails,
  [routes.MOMENT_FULL_SCREEN]: MomentFullScreen,
};
