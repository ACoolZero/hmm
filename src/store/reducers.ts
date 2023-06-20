import {combineReducers} from 'redux';
import generalReducer from './general/reducer';

const rootReducer = combineReducers({
  ...generalReducer,
});

export default rootReducer;
