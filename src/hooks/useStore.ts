import rootReducer from '@store/reducers';
import {useDispatch, useSelector as useReduxSelector} from 'react-redux';

export type RootState = ReturnType<typeof rootReducer>;

const useStore = () => {
  const dispatch = useDispatch();

  const useSelector = (state: keyof RootState) => useReduxSelector((store: RootState) => store[state]);

  return {dispatch, useSelector};
};

export default useStore;
