import {
  CREATE_MOOD,
  GENERATE_TAG,
  GET_EMOTION_SCORE,
  GET_MOOD_HISTORY,
  GET_MOOD_LIST,
  GET_POSTS,
  GET_POSTS_DETAILS,
  GET_USER_MOOD_FREQUENCY,
  GET_VIEWED_POSTS,
} from '@store/actions';
import {reducer} from '@store/general/common';

const moodsList = (...args: any) => reducer.apply(null, [...args, GET_MOOD_LIST] as any);

const moodsHistoryList = (...args: any) => reducer.apply(null, [...args, GET_MOOD_HISTORY] as any);

const userCurrentMood = (...args: any) => reducer.apply(null, [...args, CREATE_MOOD] as any);

const userMoodFrequency = (...args: any) => reducer.apply(null, [...args, GET_USER_MOOD_FREQUENCY] as any);

const tagsList = (...args: any) => reducer.apply(null, [...args, GENERATE_TAG] as any);

const emotionScore = (...args: any) => reducer.apply(null, [...args, GET_EMOTION_SCORE] as any);

const postsList = (...args: any) => reducer.apply(null, [...args, GET_POSTS] as any);

const viewedPostsList = (...args: any) => reducer.apply(null, [...args, GET_VIEWED_POSTS] as any);

const postDetails = (...args: any) => reducer.apply(null, [...args, GET_POSTS_DETAILS] as any);

export default {
  emotionScore,
  moodsList,
  moodsHistoryList,
  userCurrentMood,
  userMoodFrequency,
  tagsList,
  postsList,
  viewedPostsList,
  postDetails,
};
