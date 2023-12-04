import {useStore} from '@hooks';
import {GET_MOMENTS_LIST} from '@store/actions';
import {useCallback} from 'react';

const useMoments = () => {
  const {dispatch, useSelector} = useStore();
  const {data: momentsList, isLoading} = useSelector('momentsList');

  const fetchData = useCallback(() => {
    dispatch({type: GET_MOMENTS_LIST});
  }, [dispatch]);

  return {momentsList, isLoading, fetchData};
};

export default useMoments;
