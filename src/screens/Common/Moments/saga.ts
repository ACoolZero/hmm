import {showMessage} from '@components/common/ToastMessage';
import {goBack} from '@navigation/NavigationServices';
import {api} from '@services';
import * as actions from '@store/actions';
import {guard} from '@store/general/saga';
import {ActionPayload} from '@store/general/types';
import {ITEM_LIMIT_PER_PAGE} from '@utils/constants';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {CreateMomentPayload, EditMomentPayload} from './types';

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

function* getMomentDetails(action: ActionPayload<{momentId: string}>) {
  const {momentId} = action.payload;
  const response: AxiosResponse = yield call(api, `/moments/${momentId}`);
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data}});
  if (action.callback) {
    yield call(action.callback, response.data);
  }
}

function* editMoment(action: ActionPayload<EditMomentPayload>) {
  const {momentId, moment} = action.payload;
  yield call(api, `/moments/${momentId}`, {method: 'put', data: moment});
  yield put({type: actions.GET_USER_MOMENTS_LIST});
  showMessage({message: 'Moment Updated'});
  goBack();
}

function* deleteMoment(action: ActionPayload<{momentId: string}>) {
  const {momentId} = action.payload;
  yield call(api, `/moments/${momentId}`, {method: 'delete'});
  yield put({type: actions.GET_USER_MOMENTS_LIST});
  showMessage({message: 'Moment Deleted'});
  goBack();
}

export default [
  takeLatest(actions.GET_USER_MOMENTS_LIST, guard(getUserMoments)),
  takeLatest(actions.CREATE_MOMENT, guard(createMoment)),
  takeLatest(actions.GET_MOMENT_DETAILS, guard(getMomentDetails)),
  takeLatest(actions.EDIT_MOMENT, guard(editMoment)),
  takeLatest(actions.DELETE_MOMENT, guard(deleteMoment)),
];
