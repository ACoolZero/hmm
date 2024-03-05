import {GET_MESSAGES, NEW_MESSAGES_COMING, TYPING_LISTENING, _onComplete, _onSuccess, _onUnmount} from '@store/actions';
import {produce} from 'immer';
import {unionBy} from 'lodash';

const INITIAL_STATE = {
  data: [],
  isTyping: null,
  isLoading: false,
};

const messages = produce((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      state.isLoading = true;
      return state;

    case NEW_MESSAGES_COMING:
      state.data = unionBy([...action.payload.msg, ...state.data], '_id');
      return state;

    case TYPING_LISTENING:
      state.isTyping = action.payload.data;
      return state;

    case _onSuccess(GET_MESSAGES):
      state.data = unionBy([...state.data, ...action.payload.data], '_id');
      return state;

    case _onComplete(GET_MESSAGES):
      state.isLoading = false;
      return state;

    case _onUnmount(GET_MESSAGES):
      return INITIAL_STATE;

    default:
      return state;
  }
});

export default {messages};
