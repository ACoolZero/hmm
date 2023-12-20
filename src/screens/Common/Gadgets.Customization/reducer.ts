import {GET_CUSTOMIZATION, STORE_CONFIG_MOOD} from '@store/actions';
import {reducer} from '@store/general/common';
import {produce} from 'immer';

const customization = (...args: any) => reducer.apply(null, [...args, GET_CUSTOMIZATION] as any);

const INITIAL_STATE = {data: null, isLoading: false};
const configMood = produce((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_CONFIG_MOOD:
      state.data = action.payload.data;
      return state;

    default:
      return state;
  }
});

export default {customization, configMood};
