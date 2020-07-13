import {
  FETCH_TODOS, SET_MESSAGE
} from '../actions';

const initialState = {
  todos: [],
  loading: false,
  message: ''
}

const reducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case FETCH_TODOS:
      return {
        ...state,
        loading: false,
        todos: payload
      }
    case SET_MESSAGE:
      return {
        ...state,
        message: payload
      }
    default:
      return state
  }
}

export default reducers;