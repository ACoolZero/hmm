import {reset} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {api} from '@services';
import * as actions from '@store/actions';
import {guard} from '@store/general/saga';
import {ActionPayload} from '@store/general/types';
import {ACCESS_TOKEN, REFRESH_TOKEN} from '@utils/constants';
import Storage from '@utils/storage';
import {AxiosResponse} from 'axios';
import FastImage from 'react-native-fast-image';
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {LoginPayload, RegisterPayload} from './types';

function* register(action: ActionPayload<RegisterPayload>) {
  const data = action.payload;
  yield call(api, '/auth/sign-up', {method: 'post', data});
  reset(routes.REGISTER_STEP5_SCREEN);
}

function* login(action: ActionPayload<LoginPayload>) {
  const data = action.payload;
  const response: AxiosResponse = yield call(api, '/auth/login', {method: 'post', data});
  const {accessToken, refreshToken} = response.data;
  yield Storage.setItem(ACCESS_TOKEN, accessToken);
  yield Storage.setItem(REFRESH_TOKEN, refreshToken);
  yield put({type: actions._onSuccess(action.type), payload: {accessToken, refreshToken}});
  reset(routes.BOTTOM_TAB);
}

function* getCurrentUser() {}

function* logout(action: ActionPayload<null>) {
  const {accessToken} = yield select(state => state.auth);
  yield call(api, `/auth/logout/${accessToken}`, {method: 'delete'});
  yield put({type: actions._onSuccess(action.type)});
  Storage.removeItem(ACCESS_TOKEN);
  Storage.removeItem(REFRESH_TOKEN);
  FastImage.clearMemoryCache();
  FastImage.clearDiskCache();
}

export default [
  takeLatest(actions.REGISTER_ACCOUNT, guard(register)),
  takeLatest(actions.LOGIN_ACCOUNT, guard(login)),
  takeLatest(actions.GET_CURRENT_USER, guard(getCurrentUser)),
  takeLatest(actions.LOGOUT_ACCOUNT, guard(logout)),
];
