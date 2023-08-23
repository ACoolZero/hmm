import {api} from '@services';
import * as actions from '@store/actions';
import {guard} from '@store/general/saga';
import {ActionPayload} from '@store/general/types';
import {call, takeLatest} from 'redux-saga/effects';
import {LoginPayload, RegisterPayload} from './types';

function* register(action: ActionPayload<RegisterPayload>) {
  const data = action.payload;
  yield call(api, '/auth/sign-up', {method: 'post', data});
}

function* login(action: ActionPayload<LoginPayload>) {
  const data = action.payload;
  yield call(api, '/auth/login', {method: 'post', data});
}

function* getCurrentUser(action: any) {}

function* logout(action: any) {}

export default [
  takeLatest(actions.REGISTER_ACCOUNT, guard(register)),
  takeLatest(actions.LOGIN_ACCOUNT, guard(login)),
  takeLatest(actions.GET_CURRENT_USER, guard(getCurrentUser)),
  takeLatest(actions.LOGOUT_ACCOUNT, guard(logout)),
];
