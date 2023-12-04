import {
  CREATE_MOOD,
  GENERATE_TAG,
  GET_EMOTION_SCORE,
  GET_MOOD_LIST,
  GET_POSTS,
  GET_POSTS_DETAILS,
  GET_VIEWED_POSTS,
} from '@store/actions';
import {reducer} from '@store/general/common';

const moodsList = (...args: any) => reducer.apply(null, [...args, GET_MOOD_LIST] as any);

const userCurrentMood = (...args: any) => reducer.apply(null, [...args, CREATE_MOOD] as any);

const tagsList = (...args: any) => reducer.apply(null, [...args, GENERATE_TAG] as any);

const emotionScore = (...args: any) => reducer.apply(null, [...args, GET_EMOTION_SCORE] as any);

const postsList = (...args: any) => reducer.apply(null, [...args, GET_POSTS] as any);

const viewedPostsList = (...args: any) => reducer.apply(null, [...args, GET_VIEWED_POSTS] as any);

const postDetails = (...args: any) => reducer.apply(null, [...args, GET_POSTS_DETAILS] as any);

export default {
  emotionScore,
  moodsList,
  userCurrentMood,
  tagsList,
  postsList,
  viewedPostsList,
  postDetails,
};
