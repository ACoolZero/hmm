import authReducer from '@screens/Auth/reducer';
import {combineReducers} from 'redux';
import generalReducer from './general/reducer';

const rootReducer = combineReducers({
  ...generalReducer,
  ...authReducer,
});

export default rootReducer;
