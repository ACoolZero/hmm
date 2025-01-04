import {showMessage} from '@components/common/ToastMessage';
import {goBack, navigate, reset} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {api} from '@services';
import store from '@store';
import * as actions from '@store/actions';
import {guard} from '@store/general/saga';
import {ActionPayload} from '@store/general/types';
import {ACCESS_TOKEN,REFRESH_EXPIRES_AT, REFRESH_TOKEN, AppConfig } from '@utils/constants';
import Storage from '@utils/storage';
import {AxiosResponse} from 'axios';
import dayjs from 'dayjs';
import FastImage from 'react-native-fast-image';
import {persistStore} from 'redux-persist';
import {call, delay, put, select, takeLatest} from 'redux-saga/effects';
import {ForgotPasswordPayload, IUser, LoginPayload, RegisterPayload, UpdateUserPayload} from './types';
import { sleep } from '@utils/date';

function* register(action: ActionPayload<RegisterPayload>) {
  const data = action.payload;
  const {email, password} = action.payload;
  yield call(api, '/auth/sign-up', {method: 'post', data});
  const response: AxiosResponse = yield call(api, '/auth/login', {method: 'post', data: {email, password}});
  const {accessToken, refreshToken} = response.data;
  yield Storage.setItem(ACCESS_TOKEN, accessToken);
  yield Storage.setItem(REFRESH_TOKEN, refreshToken);
  yield put({type: actions._onSuccess(actions.LOGIN_ACCOUNT), payload: {accessToken, refreshToken}});
  yield put({type: actions.GET_CURRENT_USER});
  reset(routes.REGISTER_STEP5_SCREEN);
}

function* forgotPassword(action: ActionPayload<ForgotPasswordPayload>) {
  const data = action.payload;
  const response: AxiosResponse = yield call(api, '/auth/send-otp', {method: 'post', data});
  const {isSuccess} = response.data;
  yield put({type: actions._onSuccess(actions.FORGOT_PASSWORD), payload: {isSuccess}});
  navigate(routes.FORGOT_PASSWORD_STEP2_SCREEN);
}

function* login(action: ActionPayload<LoginPayload>) {
  const data = action.payload;
  const response: AxiosResponse = yield call(api, '/auth/login', {method: 'post', data});
  const {accessToken, refreshToken} = response.data;
  yield Storage.setItem(ACCESS_TOKEN, accessToken);
  yield Storage.setItem(REFRESH_TOKEN, refreshToken);
  yield put({type: actions._onSuccess(action.type), payload: {accessToken, refreshToken}});
  yield put({type: actions.GET_CURRENT_USER});
  yield put({type: actions._onSuccess(actions.CACHING_EMAIL), payload: {data: data?.email}});

  yield Storage.setItem(REFRESH_EXPIRES_AT, dayjs().add(1, 'week').format('YYYY-MM-DD'));
  yield delay(200);
  reset(routes.BOTTOM_TAB);
}

function* loginGoogle(action: ActionPayload<{accessToken: string; email: string}>) {
  const data = {
    accessToken: action.payload.accessToken,
    email: action.payload.email,
  };
  const response: AxiosResponse = yield call(api, '/auth/google', {method: 'post', data});
  yield put({type: actions._onSuccess(action.type)});
  const {accessToken, refreshToken} = response.data;
  yield Storage.setItem(ACCESS_TOKEN, accessToken);
  yield Storage.setItem(REFRESH_TOKEN, refreshToken);
  yield put({type: actions._onSuccess(actions.LOGIN_ACCOUNT), payload: {accessToken, refreshToken}});
  yield put({type: actions.GET_CURRENT_USER});

  yield Storage.setItem(REFRESH_EXPIRES_AT, dayjs().add(1, 'week').format('YYYY-MM-DD'));
  yield reset(routes.BOTTOM_TAB);
  GoogleSignin.revokeAccess();
}

function* getCurrentUser(action: ActionPayload<null>) {
  const response: AxiosResponse<IUser> = yield call(api, '/auth/profile');
  yield put({type: actions._onSuccess(action.type), payload: {userInfo: response.data}});
}

function* logout(action: ActionPayload<null>) {
  try {
    const {accessToken} = yield select(state => state.auth);
    yield call(api, `/auth/logout/${accessToken}`, {
      method: 'delete',
      headers: {Authorization: `Bearer ${accessToken}`},
    });
  } catch (error) {
  } finally {
    yield put({type: actions._onSuccess(action.type)});
    yield delay(500);
    console.log("Logged out.");
    reset(routes.LOGIN_SCREEN);
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
    Storage.removeItem(ACCESS_TOKEN);
    Storage.removeItem(REFRESH_TOKEN);
    Storage.removeItem(REFRESH_EXPIRES_AT);
    FastImage.clearMemoryCache();
    FastImage.clearDiskCache();
    persistStore(store).purge();
    // sleep(500).then(() => reset(routes.LOGIN_SCREEN));

  }
}

function* getRefreshToken() {
  try{
    const {accessToken, refreshToken} = yield select(state => state.auth);
    const response: AxiosResponse = yield call(api, '/auth/refresh-token', {
      method: 'post',
      data: { refreshToken },
      // data: {accessToken, refreshToken},
    });
    if (__DEV__ && AppConfig.DEBUG_LOGGING_ENABLED) {
      console.debug("[REFRESH_TOKEN] Response: ", response );
    }
    Storage.setItem(ACCESS_TOKEN, response.data.accessToken);
    Storage.setItem(REFRESH_TOKEN, response.data.refreshToken);
    yield Storage.setItem(REFRESH_EXPIRES_AT, dayjs().add(1, 'week').format('YYYY-MM-DD'));
    yield put({
      type: actions._onSuccess(actions.LOGIN_ACCOUNT),
      payload: {accessToken: response.data.accessToken, refreshToken: response.data.refreshToken},
    });
    yield put({type: actions.GET_CURRENT_USER});
    yield reset(routes.BOTTOM_TAB);
  } catch (error) {
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
    Storage.removeItem(ACCESS_TOKEN);
    Storage.removeItem(REFRESH_TOKEN);
    Storage.removeItem(REFRESH_EXPIRES_AT);
    FastImage.clearMemoryCache();
    FastImage.clearDiskCache();
    persistStore(store).purge();
    sleep(500).then(() => reset(routes.LOGIN_SCREEN));
  }
}

function* updateUser(action: ActionPayload<UpdateUserPayload>) {
  const data = action.payload;
  if (!data?.fullName) return showMessage({type: 'error', message: 'Họ tên không được để trống'});
  if (!data?.slogan) return showMessage({type: 'error', message: 'Slogan không được để trống'});

  yield call(api, '/user', {method: 'put', data});
  yield put({type: actions.GET_CURRENT_USER});
  showMessage({type: 'success', message: 'Cập nhật thành công'});
  goBack();
}

function* uploadFile(action: ActionPayload<any>) {
  const data = action.payload;
  const response: AxiosResponse = yield call(api, '/file/upload', {
    method: 'post',
    data,
    headers: {'Content-Type': 'multipart/form-data'},
    timeout: 300000, // Set timeout to 5 minutes for short video background uploading
  });
  yield call(action.callback, response.data);
}

export default [
  takeLatest(actions.REGISTER_ACCOUNT, guard(register)),
  takeLatest(actions.FORGOT_PASSWORD, guard(forgotPassword)),
  takeLatest(actions.LOGIN_ACCOUNT, guard(login)),
  takeLatest(actions.LOGIN_GOOGLE, guard(loginGoogle)),
  takeLatest(actions.GET_CURRENT_USER, guard(getCurrentUser)),
  takeLatest(actions.LOGOUT_ACCOUNT, logout),
  takeLatest(actions.GET_REFRESH_TOKEN, getRefreshToken),
  takeLatest(actions.UPDATE_USER_INFO, guard(updateUser)),
  takeLatest(actions.UPLOAD_FILE, guard(uploadFile)),
];
