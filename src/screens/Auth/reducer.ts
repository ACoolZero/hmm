import {
  GET_CURRENT_USER,
  LOGIN_ACCOUNT,
  LOGOUT_ACCOUNT,
  REGISTER_ACCOUNT,
  STORE_REGISTER_DATA,
  _onComplete,
  _onSuccess,
} from '@store/actions';
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
      state.isLoading = true;
      return state;

    case _onSuccess(LOGIN_ACCOUNT):
      state.accessToken = action.accessToken;
      state.refreshToken = action.refreshToken;
      return state;

    case _onSuccess(GET_CURRENT_USER):
      state.isAuth = true;
      state.userInfo = action.userInfo;
      return state;

    case _onSuccess(LOGOUT_ACCOUNT):
      return INITIAL_STATE;

    case _onComplete(REGISTER_ACCOUNT):
    case _onComplete(LOGIN_ACCOUNT):
    case _onComplete(GET_CURRENT_USER):
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

export default {auth, register};
