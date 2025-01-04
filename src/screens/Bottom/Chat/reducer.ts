import {GET_MESSAGES, NEW_MESSAGES_COMING, TYPING_LISTENING, _onComplete, _onFailure, _onSuccess, _onUnmount} from '@store/actions';
import {produce} from 'immer';
import {unionBy} from 'lodash';

const INITIAL_STATE = {
  data: [],
  isTyping: null,
  isLoading: false,
  total: null,
};

const messages = produce((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      console.log('GET_MESSAGES event deducer');
      state.isLoading = true;
      return state;

    case NEW_MESSAGES_COMING:
      console.log('NEW_MESSAGES_COMING event deducer');
      state.data = unionBy([...action.payload.msg, ...state.data], '_id');
      return state;

    case TYPING_LISTENING:
      console.log('TYPING_LISTENING event deducer: ', action.payload.data);
      state.isTyping = action.payload.data;
      return state;

    case _onSuccess(GET_MESSAGES):
      console.log('GET_MESSAGES event deducer');
      state.data = unionBy([...state.data, ...action.payload.data], '_id');
      state.total = action.payload.total;

      return state;

    case _onComplete(GET_MESSAGES):
      console.log('_onComplete event deducer');
      state.isLoading = false;
      return state;

    case _onUnmount(GET_MESSAGES):
      console.log('_onUnmount event deducer');
      return INITIAL_STATE;

    case _onFailure(GET_MESSAGES):
      console.error('Failed to get messages:', action.payload.error);
      return state; // Handle failure state if needed

    default:
      return state;
  }
});

export default {messages};
