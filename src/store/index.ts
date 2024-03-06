import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {createBlacklistFilter} from 'redux-persist-transform-filter';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: [
    'theme',
    'general',
    'auth',
    'emailCaching',
    'userMomentsList',
    'emotionScore',
    'moodsList',
    'userCurrentMood',
    'userMoodFrequency',
    'milestoneList',
    'postsList',
    'customization',
    'momentsList',
  ],
  transforms: [createBlacklistFilter('auth', ['isLoading'])],
};

const pReducer = persistReducer(persistConfig, rootReducer as any);

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = createStore(pReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
