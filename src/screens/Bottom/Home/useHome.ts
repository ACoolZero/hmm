import {useStore} from '@hooks';
import {
  GET_CUSTOMIZATION,
  GET_EMOTION_SCORE,
  GET_MILESTONES,
  GET_MOOD_LIST,
  GET_POSTS,
  GET_USER_MOMENTS_LIST,
} from '@store/actions';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import {useCallback} from 'react';
dayjs.extend(weekday);

const useHome = () => {
  const {dispatch, useSelector} = useStore();
  const {mode} = useSelector('theme');
  const {data: userMomentsList} = useSelector('userMomentsList');
  const {data: emotionScore} = useSelector('emotionScore');
  const {data: moodsList} = useSelector('moodsList');
  const {data: userCurrentMood} = useSelector('userCurrentMood');
  const {data: tagsList} = useSelector('tagsList');
  const {data: milestoneList} = useSelector('milestoneList');
  const {data: postsList} = useSelector('postsList');
  const {data: customization} = useSelector('customization');

  const fetchData = useCallback(() => {
    /**
     * GET_CUSTOMIZATION
     */
    dispatch({type: GET_CUSTOMIZATION});

    /**
     * GET_EMOTION_SCORE
     */
    dispatch({
      type: GET_EMOTION_SCORE,
      payload: {
        startCurrentDate: dayjs(dayjs().subtract(6, 'day')).format('YYYY-MM-DD'),
        endCurrentDate: dayjs(new Date()).format('YYYY-MM-DD'),
        startPastDate: dayjs(dayjs().subtract(13, 'day')).format('YYYY-MM-DD'),
        endPastDate: dayjs(dayjs().subtract(7, 'day')).format('YYYY-MM-DD'),
      },
    });

    /**
     * GET_MOODS_LIST
     */
    dispatch({type: GET_MOOD_LIST});

    /**
     * GET_USER_MOMENTS_LIST
     */
    dispatch({
      type: GET_USER_MOMENTS_LIST,
    });

    /**
     * GET_MILESTONE_LIST
     */
    dispatch({type: GET_MILESTONES});

    /**
     * GET_POSTS
     */
    dispatch({type: GET_POSTS});
  }, [dispatch]);

  return {
    mode,
    moodsList,
    userCurrentMood,
    userMomentsList,
    emotionScore,
    tagsList,
    milestoneList,
    postsList,
    customization,
    dispatch,
    fetchData,
  };
};

export default useHome;
