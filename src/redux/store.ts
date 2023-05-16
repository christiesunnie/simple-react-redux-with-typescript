import { combineReducers, createStore } from 'redux';
import userEventsReducer from './user-events';

const reducer = {
  userEvents: userEventsReducer,
};

const rootReducer = combineReducers(reducer);

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
