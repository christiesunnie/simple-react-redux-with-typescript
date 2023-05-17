import {
  applyMiddleware,
  combineReducers,
  createStore,
  AnyAction,
} from 'redux';
import thunk from 'redux-thunk';
import userEventsReducer from './user-events';
import recorderReducer from './recorder';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';

const reducer = {
  userEvents: userEventsReducer,
  recorder: recorderReducer,
};

const rootReducer = combineReducers(reducer);

export type RootState = ReturnType<typeof rootReducer>;

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
