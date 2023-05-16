import { combineReducers, createStore } from 'redux';
import userEventsReducer from './user-events';
import recorderReducer from './recorder';

const reducer = {
  userEvents: userEventsReducer,
  recorder: recorderReducer,
};

const rootReducer = combineReducers(reducer);

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
