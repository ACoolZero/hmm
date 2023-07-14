import * as actions from '@store/actions';
import {produce} from 'immer';
import * as common from './common';

const general = produce((state = common.INITIAL_GENERAL_STATE, action) => {
  switch (action.type) {
    case actions.SETUP_ENVIRONMENT:
      state.environment = action.payload.environment;
      return state;

    case actions.CHANGE_DEVICE_LOCALE:
      state.locale = action.payload.locale;
      return state;

    case actions.HIDE_ONBOARDING:
      state.isFirstLaunching = false;
      return state;

    case actions.STORE_DEVICE_TOKEN:
      state.deviceToken = action.payload.deviceToken;
      return state;

    case actions.CHANGE_CHAT_COLOR:
      state.chatColor = action.payload.chatColor;
      return state;

    default:
      return state;
  }
});

const alert = produce((state = common.INITIAL_ALERT_STATE, action) => {
  switch (action.type) {
    case actions.SHOW_ALERT:
      state.isShowAlert = true;
      state.title = action?.customProps?.title ? action.customProps.title : '';
      state.message = action?.customProps?.message ? action.customProps.message : '';
      state.cancelable = action?.cancelable ? action.cancelable : null;
      state.canBackdropPress = action?.canBackdropPress ? action.canBackdropPress : null;
      state.cancelText = action?.customProps?.cancelText ? action.customProps.cancelText : null;
      state.submitText = action?.customProps?.submitText ? action.customProps.submitText : null;
      state.onCancel = action?.onCancel;
      state.onSubmit = action?.onSubmit;
      return state;

    case actions.HIDE_ALERT:
      state.isShowAlert = false;
      return state;

    default:
      return state;
  }
});

const theme = produce((state = {mode: 'dark'}, action) => {
  switch (action.type) {
    case actions.SWITCH_THEME_MODE:
      state.mode = action.payload.mode;
      return state;

    default:
      return state;
  }
});

export default {general, alert, theme};
