import {showMessage} from '@components/common/ToastMessage';
import {goBack, replace} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import {IMilestone} from '@screens/Bottom/Home/types';
import {api} from '@services';
import * as actions from '@store/actions';
import {guard} from '@store/general/saga';
import {ActionPayload} from '@store/general/types';
import {ITEM_LIMIT_PER_PAGE} from '@utils/constants';
import {sleep} from '@utils/date';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {CreateMileStonePayload} from './types';

function* createMileStone(action: ActionPayload<CreateMileStonePayload>) {
  const data = action.payload.mileStone;
  const hasMoment = action.payload.hasMoment;

  const response: AxiosResponse = yield call(api, '/milestone', {method: 'post', data});
  yield put({type: actions.GET_MILESTONES});

  if (hasMoment) {
    showMessage({message: 'MileStone Created'});
    sleep(500).then(() => replace(routes.CREATE_MOMENT_SCREEN, {milestoneId: response.data.id}));
  } else {
    showMessage({message: 'MileStone Created'});
    goBack();
  }
}

function* getMileStones(action: ActionPayload<null>) {
  const params = {limit: ITEM_LIMIT_PER_PAGE, skip: 0};
  const response: AxiosResponse<{items: IMilestone[]}> = yield call(api, '/milestone', {params});
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data.items}});
}

function* getMileStoneDetails(action: ActionPayload<{milestoneId: string}>) {
  const {milestoneId} = action.payload;
  const response: AxiosResponse = yield call(api, `/milestone/${milestoneId}`);
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data}});
}

function* updateMileStone(action: ActionPayload<{milestoneId: string; data: IMilestone}>) {
  const {milestoneId, data} = action.payload;
  yield call(api, `/milestone/${milestoneId}`, {method: 'put', data});
  yield put({type: actions._onSuccess(action.type), payload: {}});
  yield put({type: actions.GET_MILESTONES});
  showMessage({message: 'MileStone Updated'});
  goBack();
}

export default [
  takeLatest(actions.CREATE_MILESTONE, guard(createMileStone)),
  takeLatest(actions.GET_MILESTONES, guard(getMileStones)),
  takeLatest(actions.GET_MILESTONE_DETAILS, guard(getMileStoneDetails)),
  takeLatest(actions.UPDATE_MILESTONE, guard(updateMileStone)),
];
