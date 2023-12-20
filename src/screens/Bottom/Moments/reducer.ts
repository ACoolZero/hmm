import {GET_MOMENTS_LIST, GET_MOMENT_TAGS, LIKE_MOMENT, _onComplete, _onSuccess, _onUnmount} from '@store/actions';
import {reducer} from '@store/general/common';
import {produce} from 'immer';

const momentTags = (...args: any) => reducer.apply(null, [...args, GET_MOMENT_TAGS] as any);

const INITIAL_STATE = {
  data: null,
  size: null,
  total: null,
  isLoading: false,
};

const momentsList = produce((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOMENTS_LIST:
      state.isLoading = true;
      return state;

    case _onSuccess(GET_MOMENTS_LIST):
      state.data = action.payload.hasMore ? [...state.data, ...action.payload.data] : action.payload.data;
      state.size = action.payload.hasMore ? state.size + action.payload.size : action.payload.size;
      state.total = action.payload.total;
      return state;

    case _onSuccess(LIKE_MOMENT):
      let temp = [...state.data];
      let moment = temp.find(x => x.id === action.payload.id);
      moment.liked = !moment.liked;
      state.data = temp;
      return state;

    case _onComplete(GET_MOMENTS_LIST):
      state.isLoading = false;
      return state;

    case _onUnmount(GET_MOMENTS_LIST):
      return INITIAL_STATE;

    default:
      return state;
  }
});

export default {momentsList, momentTags};
