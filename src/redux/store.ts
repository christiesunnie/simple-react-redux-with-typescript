import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import userEventsReducer from './user-events';
import recorderReducer from './recorder';

const reducer = {
  userEvents: userEventsReducer,
  recorder: recorderReducer,
};

const rootReducer = combineReducers(reducer);

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
