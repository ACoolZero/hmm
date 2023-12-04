import authSaga from '@screens/Auth/saga';
import homeSaga from '@screens/Bottom/Home/saga';
import activitySaga from '@screens/Bottom/Moments/saga';
import mileStoneSaga from '@screens/Common/Milestone/saga';
import momentSaga from '@screens/Common/Moments/saga';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([...authSaga, ...homeSaga, ...activitySaga, ...mileStoneSaga, ...momentSaga]);
}
