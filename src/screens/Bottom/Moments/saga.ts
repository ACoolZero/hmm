import {api} from '@services';
import * as actions from '@store/actions';
import {guard} from '@store/general/saga';
import {ActionPayload} from '@store/general/types';
import {ITEM_LIMIT_PER_PAGE} from '@utils/constants';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

function* getMoments(action: ActionPayload<null>) {
  const params = {skip: 0, limit: ITEM_LIMIT_PER_PAGE, tagId: 'fa4bae12-a2d6-4c63-991c-4afac789fa0e'};
  const response: AxiosResponse = yield call(api, '/moments', {params});
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data.items}});
}

export default [takeLatest(actions.GET_MOMENTS_LIST, guard(getMoments))];
