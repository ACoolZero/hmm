import {api} from '@services';
import * as actions from '@store/actions';
import {guard} from '@store/general/saga';
import {ActionPayload} from '@store/general/types';
import {call, takeLatest} from 'redux-saga/effects';

function* sendFeedback(action: ActionPayload<{content: string; attachment: string}>) {
  const data = {content: action.payload.content, attachment: action.payload.attachment};
  yield call(api, '/user-feedback', {method: 'post', data});
}

export default [takeLatest(actions.SEND_FEEDBACK, guard(sendFeedback))];
