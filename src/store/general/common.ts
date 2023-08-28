import {_onComplete, _onSearch, _onSuccess, _onUnmount} from '@store/actions';
import {removeAccent} from '@utils/helper';
import {produce} from 'immer';

export const INITIAL_GENERAL_STATE = {
  environment: null,
  deviceToken: '',
  locale: 'vi',
  isFirstLaunching: true,
  chatColor: '#558EF9',
};

export const INITIAL_ALERT_STATE = {
  isShowAlert: false,
  title: '',
  message: '',
  cancelable: true,
  canBackdropPress: true,
  cancelText: '',
  submitText: '',
  onCancel: () => {},
  onSubmit: () => {},
};

/**
 *  @todo use for simple reducer
 */
export const INITIAL_REDUCER_STATE = {data: null, temp: null, isLoading: false};
export const reducer = produce((state = INITIAL_REDUCER_STATE, action, type) => {
  switch (action.type) {
    case type:
      state.isLoading = true;
      return state;

    case _onSuccess(type):
      state.data = action.payload.data;
      state.temp = action.payload.data;
      return state;

    case _onComplete(type):
      state.isLoading = false;
      return state;

    case _onUnmount(type):
      return INITIAL_REDUCER_STATE;

    case _onSearch(type):
      const searchResult = state.temp?.filter(
        (item: any) => removeAccent(item.name || item.title).indexOf(removeAccent(action.payload.keyword)) > -1,
      );
      state.data = searchResult;
      return state;

    default:
      return state;
  }
});

/**
 * @todo use for extra reducer
 */
export const INITIAL_EXTRA_REDUCER_STATE = {
  data: null,
  size: null,
  total: null,
  isLoading: false,
};

export const extraReducer = produce((state = INITIAL_EXTRA_REDUCER_STATE, action, type) => {
  switch (action.type) {
    case type:
      state.isLoading = true;
      return state;

    case _onSuccess(type):
      state.data = action.payload.hasMore ? [...state.data, ...action.payload.data] : action.payload.data;
      state.size = action.payload.hasMore ? state.size + action.payload.size : action.payload.size;
      state.total = action.payload.total;
      return state;

    case _onComplete(type):
      state.isLoading = false;
      return state;

    case _onUnmount(type):
      return INITIAL_EXTRA_REDUCER_STATE;

    default:
      return state;
  }
});
