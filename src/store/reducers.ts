import {combineReducers} from 'redux';
import generalReducer from './general/reducer';

const rootReducer: any = combineReducers({
  ...generalReducer,
});

export default rootReducer;
