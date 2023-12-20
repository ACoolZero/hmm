import {
  CACHING_EMAIL,
  GET_CURRENT_USER,
  LOGIN_ACCOUNT,
  LOGIN_GOOGLE,
  LOGOUT_ACCOUNT,
  REGISTER_ACCOUNT,
  STORE_REGISTER_DATA,
  UPDATE_USER_INFO,
  UPLOAD_FILE,
  _onComplete,
  _onSuccess,
} from '@store/actions';
import {reducer} from '@store/general/common';
import {produce} from 'immer';

const INITIAL_STATE = {
  isAuth: false,
  accessToken: null,
  refreshToken: null,
  userInfo: {},
  isLoading: false,
};

const auth = produce((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_ACCOUNT:
    case LOGIN_ACCOUNT:
    case GET_CURRENT_USER:
    case LOGOUT_ACCOUNT:
    case UPDATE_USER_INFO:
      state.isLoading = true;
      return state;

    case _onSuccess(LOGIN_ACCOUNT):
      state.isAuth = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      return state;

    case _onSuccess(GET_CURRENT_USER):
      state.isAuth = true;
      state.userInfo = action.payload.userInfo;
      return state;

    case _onSuccess(LOGOUT_ACCOUNT):
      return INITIAL_STATE;

    case _onComplete(REGISTER_ACCOUNT):
    case _onComplete(LOGIN_ACCOUNT):
    case _onComplete(GET_CURRENT_USER):
    case _onComplete(LOGOUT_ACCOUNT):
    case _onComplete(UPDATE_USER_INFO):
      state.isLoading = false;
      return state;

    default:
      return state;
  }
});

const register = produce((state = {data: {}}, action) => {
  switch (action.type) {
    case STORE_REGISTER_DATA:
      state.data = {...state.data, ...action.payload};
      return state;

    default:
      return state;
  }
});

const loginGoogle = (...args: any) => reducer.apply(null, [...args, LOGIN_GOOGLE] as any);

const emailCaching = (...args: any) => reducer.apply(null, [...args, CACHING_EMAIL] as any);

const uploadFile = (...args: any) => reducer.apply(null, [...args, UPLOAD_FILE] as any);

export default {auth, register, loginGoogle, uploadFile, emailCaching};
