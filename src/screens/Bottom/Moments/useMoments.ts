import {useStore} from '@hooks';
import {GET_MOMENTS_LIST, GET_MOMENT_TAGS, _onUnmount} from '@store/actions';
import {useCallback} from 'react';

const useMoments = () => {
  const {dispatch, useSelector} = useStore();
  const {data: momentTags} = useSelector('momentTags');
  const {data: momentsList, isLoading} = useSelector('momentsList');

  const fetchData = useCallback(() => {
    dispatch({type: _onUnmount(GET_MOMENT_TAGS)});
    dispatch({
      type: GET_MOMENT_TAGS,
      callback: (tagId: string) => {
        dispatch({type: GET_MOMENTS_LIST, payload: {tagId}});
      },
    });
  }, [dispatch]);

  return {momentsList, momentTags, isLoading, fetchData};
};

export default useMoments;
