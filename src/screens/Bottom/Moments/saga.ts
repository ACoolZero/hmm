import {api} from '@services';
import * as actions from '@store/actions';
import {guard} from '@store/general/saga';
import {ActionPayload} from '@store/general/types';
import {ITEM_LIMIT_PER_PAGE} from '@utils/constants';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {IMomentTag} from './types';

function* getMomentTags(action: ActionPayload<null>) {
  const params = {skip: 0, limit: 100};
  const response: AxiosResponse<{items: IMomentTag[]}> = yield call(api, '/tags', {params});
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data.items}});
  if (response.data.items?.length) {
    yield call(action.callback, response.data.items[0].id);
  }
}

function* getMoments(action: ActionPayload<{tagId: string}>) {
  const params = {skip: 0, limit: ITEM_LIMIT_PER_PAGE, tagId: action.payload.tagId};
  const response: AxiosResponse = yield call(api, '/moments', {params});
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data.items}});
}

export default [
  takeLatest(actions.GET_MOMENT_TAGS, guard(getMomentTags)),
  takeLatest(actions.GET_MOMENTS_LIST, guard(getMoments)),
];
