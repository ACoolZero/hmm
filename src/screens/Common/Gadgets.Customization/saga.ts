import {api} from '@services';
import * as actions from '@store/actions';
import {guard} from '@store/general/saga';
import {ActionPayload} from '@store/general/types';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

function* getCustomization(action: ActionPayload<null>) {
  const response: AxiosResponse = yield call(api, '/user/customization');
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data}});
  const defaultMoods = response.data.find((x: any) => x.key === 'MOOD').config;
  yield put({type: actions.STORE_CONFIG_MOOD, payload: {data: defaultMoods}});
}

function* updateConfigMood(action: ActionPayload<{moodIds: number[]}>) {
  const data = {moodIds: action.payload.moodIds};
  yield call(api, '/user/customization/config-mood', {method: 'put', data});
  yield put({type: actions.GET_CUSTOMIZATION});
}

export default [
  takeLatest(actions.GET_CUSTOMIZATION, guard(getCustomization)),
  takeLatest(actions.UPDATE_CONFIG_MOOD, guard(updateConfigMood)),
];
