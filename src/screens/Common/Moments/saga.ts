import {showMessage} from '@components/common/ToastMessage';
import {goBack} from '@navigation/NavigationServices';
import {api} from '@services';
import * as actions from '@store/actions';
import {guard} from '@store/general/saga';
import {ActionPayload} from '@store/general/types';
import {ITEM_LIMIT_PER_PAGE} from '@utils/constants';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {CreateMomentPayload} from './types';

function* getUserMoments(action: ActionPayload<null>) {
  const params = {skip: 0, limit: ITEM_LIMIT_PER_PAGE};
  const response: AxiosResponse = yield call(api, '/moments', {params});
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data.items}});
}

function* createMoment(action: ActionPayload<CreateMomentPayload>) {
  const data = action.payload.moment;
  yield call(api, '/moments', {method: 'post', data});
  yield put({type: actions.GET_USER_MOMENTS_LIST});
  showMessage({message: 'Moment Created'});
  goBack();
}

export default [
  takeLatest(actions.GET_USER_MOMENTS_LIST, guard(getUserMoments)),
  takeLatest(actions.CREATE_MOMENT, guard(createMoment)),
];
