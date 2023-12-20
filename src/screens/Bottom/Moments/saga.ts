import {api} from '@services';
import * as actions from '@store/actions';
import {guard} from '@store/general/saga';
import {ActionPayload} from '@store/general/types';
import {ITEM_LIMIT_PER_PAGE} from '@utils/constants';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

function* getMomentTags(action: ActionPayload<null>) {
  const response: AxiosResponse = yield call(api, '/activity-tag/user');
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data}});
  if (response.data?.length) {
    yield call(action.callback, response.data[0].taggingId);
  }
}

function* getMoments(action: ActionPayload<{taggingId: string}>) {
  const params = {skip: 0, limit: ITEM_LIMIT_PER_PAGE, taggingId: action.payload.taggingId};
  const response: AxiosResponse = yield call(api, '/activity', {params});
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data.items}});
}

function* likeMoment(action: ActionPayload<{id: string; action: 'LIKE' | 'UNLIKE'}>) {
  yield call(api, `/activity/like/${action.payload.id}`, {
    method: 'put',
    data: {action: action.payload.action},
  });
  yield put({type: actions._onSuccess(action.type), payload: {id: action.payload.id}});
}

export default [
  takeLatest(actions.GET_MOMENT_TAGS, guard(getMomentTags)),
  takeLatest(actions.GET_MOMENTS_LIST, guard(getMoments)),
  takeLatest(actions.LIKE_MOMENT, guard(likeMoment)),
];
