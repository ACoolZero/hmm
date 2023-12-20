import {api} from '@services';
import * as actions from '@store/actions';
import {guard} from '@store/general/saga';
import {AxiosResponse} from 'axios';
import {call, takeLatest} from 'redux-saga/effects';

function* getCustomization() {
  const response: AxiosResponse = yield call(api, '/user/customization');
  console.log(response);
}

export default [takeLatest(actions.GET_CUSTOMIZATION, guard(getCustomization))];
