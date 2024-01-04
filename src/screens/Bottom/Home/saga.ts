import {IPost} from '@screens/Bottom/Home/components/Articles/types';
import {IEmotionScore} from '@screens/Bottom/Home/components/EmotionChart/types';
import {api} from '@services';
import * as actions from '@store/actions';
import {guard} from '@store/general/saga';
import {ActionPayload} from '@store/general/types';
import {ITEM_LIMIT_PER_PAGE} from '@utils/constants';
import {AxiosResponse} from 'axios';
import {call, debounce, put, select, takeLatest} from 'redux-saga/effects';

function* getEmotionScore(
  action: ActionPayload<{startCurrentDate: string; endCurrentDate: string; startPastDate: string; endPastDate: string}>,
) {
  const {startCurrentDate, endCurrentDate, startPastDate, endPastDate} = action.payload;
  const params = {startCurrentDate, endCurrentDate, startPastDate, endPastDate};
  const response: AxiosResponse<{data: IEmotionScore}> = yield call(api, '/user-mood/emotion-score', {params});
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data}});
}

function* getMoods(action: ActionPayload<null>) {
  const params = {limit: 100, skip: 0};
  const response: AxiosResponse = yield call(api, '/user-mood/customization/frequency', {params});
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data}});
}

function* createMood(action: ActionPayload<{moodId: number}>) {
  const data = {moodId: action.payload.moodId};
  const response: AxiosResponse = yield call(api, '/user-mood', {method: 'post', data});
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data.id}});
}

function* getUserMoodFrequency(action: ActionPayload<null>) {
  const response: AxiosResponse = yield call(api, 'user-mood/mood-frequency');
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data}});
}

function* updateStatus(action: ActionPayload<{exactlyYouFeelText: string}>) {
  const {data: userCurrentMood} = yield select(state => state.userCurrentMood);
  const exactlyYouFeelText = action.payload.exactlyYouFeelText;
  yield call(api, `/user-mood/${userCurrentMood}`, {method: 'put', data: {exactlyYouFeelText}});
  yield put({type: actions._onSuccess(action.type)});
  yield put({type: actions.GENERATE_TAG, payload: {exactlyYouFeelText}});
}

function* generateTags(action: ActionPayload<{exactlyYouFeelText: string}>) {
  const data = {exactlyYouFeelText: action.payload.exactlyYouFeelText};
  const response: AxiosResponse = yield call(api, '/user-mood/generate-tag', {method: 'post', data});
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data}});
}

function* updateTag(action: ActionPayload<{tagging: string}>) {
  const {data: userCurrentMood} = yield select(state => state.userCurrentMood);
  const data = {tagging: action.payload.tagging};
  yield call(api, `/user-mood/${userCurrentMood}`, {method: 'put', data});
}

function* getPosts(action: ActionPayload<null>) {
  const params = {limit: ITEM_LIMIT_PER_PAGE, skip: 0};
  const response: AxiosResponse<{items: IPost[]}> = yield call(api, '/posts', {params});
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data.items}});
}

function* getViewedPosts(action: ActionPayload<null>) {
  const params = {limit: ITEM_LIMIT_PER_PAGE, skip: 0, statusView: 'VIEWED'};
  const response: AxiosResponse<{items: IPost[]}> = yield call(api, '/posts', {params});
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data.items}});
}

function* getPostsDetails(action: ActionPayload<{id: string}>) {
  const {id} = action.payload;
  const response: AxiosResponse = yield call(api, `/posts/${id}`);
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data}});
}

function* ratingPosts(action: ActionPayload<{id: string; rating: number}>) {
  const {id, rating} = action.payload;
  const response: AxiosResponse = yield call(api, `/posts/rating/${id}`, {method: 'put', data: {rating}});
  yield put({type: actions._onSuccess(action.type), payload: {data: response.data}});
}

export default [
  takeLatest(actions.GET_MOOD_LIST, guard(getMoods)),
  takeLatest(actions.CREATE_MOOD, guard(createMood)),
  takeLatest(actions.GET_USER_MOOD_FREQUENCY, guard(getUserMoodFrequency)),
  debounce(1000, actions.UPDATE_STATUS, guard(updateStatus)),
  takeLatest(actions.GENERATE_TAG, guard(generateTags)),
  debounce(3000, actions.UPDATE_TAG, guard(updateTag)),
  takeLatest(actions.GET_EMOTION_SCORE, guard(getEmotionScore)),
  takeLatest(actions.GET_POSTS, guard(getPosts)),
  takeLatest(actions.GET_VIEWED_POSTS, guard(getViewedPosts)),
  takeLatest(actions.GET_POSTS_DETAILS, guard(getPostsDetails)),
  takeLatest(actions.RATING_POSTS, guard(ratingPosts)),
];
