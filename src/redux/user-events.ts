import { Action, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';

interface UserEvent {
  id: number;
  title: string;
  dateStart: string;
  dateEnd: string;
}

interface UserEventsState {
  byIds: Record<UserEvent['id'], UserEvent>;
  allIds: UserEvent['id'][];
}
const LOAD_REQUEST = 'userEvents/load_request';
const LOAD_SUCCESS = 'userEvents/load_success';
const LOAD_FAILURE = 'userEvents/load_failure';

interface LoadRequestAction extends Action<typeof LOAD_REQUEST> {}

interface LoadSuccessAction extends Action<typeof LOAD_SUCCESS> {
  payload: {
    events: UserEvent[];
  };
}

interface LoadFailureAction extends Action<typeof LOAD_FAILURE> {
  error: string;
}

export const loadUserEvent =
  (): ThunkAction<
    void,
    RootState,
    undefined,
    LoadRequestAction | LoadSuccessAction | LoadFailureAction
  > =>
  async (dispatch, getState) => {
    dispatch({
      type: LOAD_REQUEST,
    });

    try {
      const response = await fetch('http://localhost:3001/events');
      const events: UserEvent[] = await response.json();

      dispatch({
        type: LOAD_SUCCESS,
        payload: { events },
      });
    } catch (e) {
      dispatch({
        type: LOAD_FAILURE,
        error: 'Failed load events',
      });
    }
  };

const initialState: UserEventsState = {
  byIds: {},
  allIds: [],
};

const userEventsReducer = (
  state: UserEventsState = initialState,
  action: LoadSuccessAction
) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      const { events } = action.payload;

      return {
        ...state,
        allIds: events.map(({ id }) => id),
        byIds: events.reduce<UserEventsState['byIds']>((byIds, event) => {
          byIds[event.id] = event;
          return byIds;
        }, {}),
      };

    default:
      return state;
  }
};

export default userEventsReducer;
